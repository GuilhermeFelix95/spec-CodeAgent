---
name: design
description: Technical Design Doc â€” 5 eixos + tabelas de dependÃªncias, soluÃ§Ã£o, riscos e roadmap, com links ao repo de artefatos do time. Puxe ao desenhar feature arquitetural.
alwaysApply: false
---

# Technical Design Doc â€” Cota de uso por organizaÃ§Ã£o

> **Tier:** arquitetural Â· **Status:** aprovado Â· **Autor:** Igor Â· **Data:** 2026-06-18

## Links e artefatos
| Artefato                 | Onde                | Link                                         |
|--------------------------|---------------------|----------------------------------------------|
| PÃ¡gina do design         | Confluence          | acme.atlassian.net/wiki/â€¦/usage-quota        |
| Issue / Ã©pico            | Jira                | PLAT-481                                      |
| Repo de artefatos        | wiki do time        | wiki/platform/rate-limiting                   |
| Spec Â· Product Â· DomÃ­nio | repositÃ³rio         | `./spec.md` Â· `./product.md` Â· `./domain.md`  |

## Contexto da funcionalidade
A API de inferÃªncia nÃ£o tem isolamento por org â€” picos de uma conta degradam todas (3 incidentes
P2 no trimestre). Esta feature limita o uso por organizaÃ§Ã£o por janela de tempo. Ver `./product.md`.

## Goals / Non-goals
**Goals**
- Contagem de uso por org com janela configurÃ¡vel e limite por org.
- DecisÃ£o de aceitar/recusar em < 5ms (nÃ£o pode virar gargalo).

**Non-goals**
- PersistÃªncia durÃ¡vel do contador (perda em restart Ã© tolerÃ¡vel).
- CobranÃ§a por excedente.

## GlossÃ¡rio (da funcionalidade)
| Termo      | DescriÃ§Ã£o                                              |
|------------|--------------------------------------------------------|
| Quota      | Limite mÃ¡ximo de requisiÃ§Ãµes de uma org por janela     |
| Window     | Intervalo fixo em que o uso Ã© contado e zerado         |
| Usage      | Contagem de requisiÃ§Ãµes da org na janela atual         |
| Exceeded   | Estado em que `usage â‰¥ quota`                          |

## Design proposto
Novo bounded context **Usage Metering** (supporting). Um value object `Quota` e o agregado
`OrganizationUsage` mantÃªm a contagem por janela. Um middleware em `interfaces/` consulta o caso
de uso `CheckQuota` antes de encaminhar para inferÃªncia. Contador em **Redis** (INCR + EXPIRE por
janela) atrÃ¡s de uma porta `UsageCounter` definida no domÃ­nio â€” o domÃ­nio nÃ£o conhece Redis.

```
[API edge] â†’ interfaces/middleware â†’ application/CheckQuota
                                         â†’ domain/OrganizationUsage (regra)
                                         â†’ infrastructure/RedisUsageCounter (porta)
```

## Cobertura dos 5 eixos
### 1. Tech stack
Introduz **Redis** como datastore do contador. Sem outras libs novas.
### 2. Arquitetura base
Novo bounded context **Usage Metering** (supporting). Porta `UsageCounter` no domÃ­nio, adapter na
infra â€” segue a regra de camadas. RelaÃ§Ã£o Customer/Supplier com o contexto Inference.
### 3. Infra
Redis gerenciado (INCR/EXPIRE). Feature flag `usage_quota_enabled` por org. **Rollout:** shadow
mode (conta, nÃ£o bloqueia) â†’ 5% â†’ 100%. **ReversÃ£o:** desligar a flag (efeito imediato).
### 4. Qualidade
Unidade (invariantes de `Quota`/`UsageCount`); integraÃ§Ã£o (`RedisUsageCounter` com testcontainer);
aceite (um teste por `AC-N`, incluindo fail-open). Gate de latÃªncia < 5ms.
### 5. Observabilidade
MÃ©tricas `quota_checks_total`, `quota_exceeded_total{org}`, histograma de latÃªncia do check.
Alerta quando o fail-open ativar. SLO: p95 do check < 5ms.

## Mapa de dependÃªncias
| DependÃªncia         | Tipo                 | DescriÃ§Ã£o                              | Principais mÃ©todos / endpoints |
|---------------------|----------------------|----------------------------------------|--------------------------------|
| Redis               | datastore / cache    | contador de uso por org, TTL por janela| `INCR` Â· `EXPIRE` Â· `GET`      |
| API de InferÃªncia   | serviÃ§o interno (downstream) | consome o veredito de `CheckQuota`     | recebe `allow: bool` + headers |

## SoluÃ§Ã£o
| #  | Tarefa / bloco                          | DescriÃ§Ã£o                              | Status      |
|----|-----------------------------------------|----------------------------------------|-------------|
| 1  | Value objects `Quota`/`Window`/`UsageCount` | invariantes do domÃ­nio              | definido    |
| 2  | Agregado `OrganizationUsage` + eventos  | `QuotaExceeded` / `WindowReset`        | definido    |
| 3  | Porta `UsageCounter` + `RedisUsageCounter` | INCR/EXPIRE por janela              | definido    |
| 4  | Middleware na borda + `429`/`Retry-After` | gate antes da inferÃªncia             | definido    |
| 5  | Fail-open + alerta                      | comportamento quando o Redis cai       | definido    |
| 6  | Custo do Redis em alta escala           | dimensionar chaves/sharding            | indefinido  |

## Alternativas consideradas
| Alternativa               | PrÃ³s                        | Contras                       | Por que (nÃ£o) escolhida |
|---------------------------|-----------------------------|-------------------------------|-------------------------|
| Redis (escolhida)         | rÃ¡pido, TTL nativo, simples | dependÃªncia externa           | âœ… atende SLA de 5ms |
| Contador em memÃ³ria local | zero dependÃªncia            | nÃ£o funciona com N rÃ©plicas   | âŒ inconsistente |
| Postgres                  | durÃ¡vel                     | latÃªncia alta no hot path     | âŒ vira gargalo |

## Trade-offs e consequÃªncias
Aceitamos perder a contagem em restart do Redis (a janela reinicia) em troca de simplicidade e
latÃªncia. Para cotas de proteÃ§Ã£o, Ã© aceitÃ¡vel.

## Riscos
| Risco                  | DescriÃ§Ã£o                       | Prob. Ã— Impacto | AÃ§Ãµes / mitigaÃ§Ãµes                     |
|------------------------|---------------------------------|-----------------|----------------------------------------|
| Redis indisponÃ­vel     | contador fora do ar             | baixa Ã— alto    | fail-open (permite request) + alerta   |
| Janela mal configurada | cota 0/negativa                 | mÃ©dia Ã— mÃ©dio   | validaÃ§Ã£o no domÃ­nio + default seguro  |
| Custo do Redis sob pico | muitas orgs Ã— muitas chaves    | baixa Ã— mÃ©dio   | TTL curto; avaliar sharding (Onda 2)   |

## Roadmap da feature
| Fase / onda | Entrega                                  | Quando       | Depende de |
|-------------|------------------------------------------|--------------|------------|
| 1 (MVP)     | shadow mode (conta, nÃ£o bloqueia) + `429`| sprint atual | â€”          |
| 2           | rollout 5% â†’ 100% + alerta de fail-open  | prÃ³ximo      | 1          |
| 3           | avaliar janela deslizante / sharding     | depois       | 2          |

## QuestÃµes em aberto
- [ ] Janela fixa ou deslizante no MVP? â†’ **decidido: fixa** (registrar ADR-0002).


