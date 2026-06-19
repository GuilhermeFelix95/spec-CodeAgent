# Technical Design Doc — Cota de uso por organização

> **Tier:** arquitetural · **Status:** aprovado · **Autor:** Igor · **Data:** 2026-06-18

## Contexto
A API de inferência não tem isolamento por org. Picos de uma conta degradam todas.
Ver `./product.md`.

## Goals / Non-goals
**Goals**
- Contagem de uso por org com janela deslizante e limite configurável.
- Decisão de aceitar/recusar em < 5ms (não pode virar gargalo).

**Non-goals**
- Persistência durável do contador (perda em restart é tolerável).
- Cobrança por excedente.

## Design proposto
Novo bounded context **Usage Metering** (supporting). Um value object `Quota` e um
agregado `OrganizationUsage` mantêm a contagem por janela. Um middleware em `interfaces/`
consulta o caso de uso `CheckQuota` antes de encaminhar para inferência.

Contador em **Redis** (INCR + EXPIRE por janela) atrás de uma porta `UsageCounter`
definida no domínio — domínio não conhece Redis.

```
[API edge] → interfaces/middleware → application/CheckQuota
                                         → domain/OrganizationUsage (regra)
                                         → infrastructure/RedisUsageCounter (porta)
```

## Alternativas consideradas
| Alternativa            | Prós                     | Contras                          | Veredito |
|------------------------|--------------------------|----------------------------------|----------|
| Redis (escolhida)      | rápido, TTL nativo, simples | dependência externa            | ✅ atende SLA de 5ms |
| Contador em memória local | zero dependência        | não funciona com N réplicas      | ❌ inconsistente |
| Postgres               | durável                  | latência alta para o hot path    | ❌ vira gargalo |

## Trade-offs e consequências
Aceitamos perder a contagem em restart do Redis (janela reinicia) em troca de
simplicidade e latência. Para cotas de proteção, isso é aceitável.

## Riscos e mitigação
| Risco                     | Prob. | Impacto | Mitigação |
|---------------------------|-------|---------|-----------|
| Redis indisponível        | baixa | alto    | fail-open (permite request) + alerta |
| Janela mal configurada    | média | médio   | validação no domínio + default seguro |

## Rollout e reversão
Feature flag `usage_quota_enabled` por org. Rollout: shadow mode (conta, não bloqueia)
→ 5% → 100%. Reversão: desligar a flag (efeito imediato).

## Observabilidade
Métricas: `quota_checks_total`, `quota_exceeded_total{org}`, latência do check (histograma).
Alerta se fail-open ativar.

## Questões em aberto
- [ ] Janela fixa ou deslizante no MVP? → decidido: fixa (ver ADR-0002, a criar).
