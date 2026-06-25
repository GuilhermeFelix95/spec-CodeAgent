---
name: design
description: Technical Design Doc â€” 5 eixos + tabelas de dependÃªncias, soluÃ§Ã£o, riscos e roadmap, com links ao repo de artefatos do time. Puxe ao desenhar feature arquitetural.
alwaysApply: false
---

# Technical Design Doc â€” <nome da feature>

> **Tier:** arquitetural Â· **Status:** rascunho | em review | aprovado
> **Autor:** <nome> Â· **Revisores:** <nomes> Â· **Data:** <YYYY-MM-DD>
> Responde: **como** no nÃ­vel de sistema. ObrigatÃ³rio no tier arquitetural.

## Links e artefatos
> ConexÃ£o com o repositÃ³rio de artefatos do time. Publique via `/integracoes` (escrita repo â†’ ferramenta).

| Artefato                 | Onde                  | Link                        |
|--------------------------|-----------------------|-----------------------------|
| PÃ¡gina do design         | Confluence / Notion   | <url>                       |
| Issue / Ã©pico            | Jira / Linear         | <PROJ-123>                  |
| Repo de artefatos        | <Drive / wiki / repo> | <url>                       |
| Spec Â· Product Â· DomÃ­nio | repositÃ³rio           | `./spec.md` Â· `./product.md` Â· `./domain.md` |

## Contexto da funcionalidade
<Estado atual, restriÃ§Ãµes, por que agora. O problema que esta feature resolve (link `product.md`).>

## Goals / Non-goals
**Goals**
- <objetivo tÃ©cnico mensurÃ¡vel>

**Non-goals**
- <fora de escopo deste design>

## GlossÃ¡rio (da funcionalidade)
> Termos especÃ­ficos desta feature. Termo novo â†’ **promova ao `docs/glossary.md`** (linguagem ubÃ­qua).

| Termo     | DescriÃ§Ã£o                                  |
|-----------|--------------------------------------------|
| <Termo>   | <significado preciso no contexto da feature> |

## Design proposto
<A soluÃ§Ã£o. Diagramas (C4/sequÃªncia â€” gere com `/diagramar`), componentes, fluxo de dados,
contratos de API, modelo de dados. Mostre as fronteiras com os bounded contexts existentes.>

## Cobertura dos 5 eixos
> Toda decisÃ£o tÃ©cnica passa por estes 5 eixos. Preencha o que toca; marque "sem impacto" no resto.
> DecisÃ£o estrutural em qualquer eixo â†’ vira ADR.

### 1. Tech stack
<Linguagens, frameworks, libs ou serviÃ§os novos. VersÃµes. Diverge do stack padrÃ£o? Justifique.>
### 2. Arquitetura base
<Como encaixa nas camadas e bounded contexts. Nova fronteira? Novos agregados/portas? PadrÃ£o de integraÃ§Ã£o.>
### 3. Infra
<Recursos novos (fila, cache, banco), ambientes, IaC, custo. Deploy, feature flag, **reversÃ£o segura**.>
### 4. Qualidade
<EstratÃ©gia de teste e o que cobre os AC. Gates: cobertura, contract test, performance, seguranÃ§a.>
### 5. Observabilidade
<MÃ©tricas, logs, tracing, alertas. SLO/SLI. Como a telemetria prova que funciona?>

## Mapa de dependÃªncias
> O que esta feature consome/integra. Inclua APIs, serviÃ§os, libs e dados.

| DependÃªncia        | Tipo        | DescriÃ§Ã£o                  | Principais mÃ©todos / endpoints        |
|--------------------|-------------|----------------------------|---------------------------------------|
| <ex.: API Pagamentos> | REST / gRPC | <cobra e estorna cartÃ£o>   | `POST /charges` Â· `GET /charges/{id}` |
| <ex.: lib X>       | biblioteca  | <para quÃª>                 | <funÃ§Ãµes-chave>                       |

## SoluÃ§Ã£o
> Blocos da soluÃ§Ã£o e seu estado. **Indefinido** = ainda em aberto (vira spike ou QuestÃ£o em aberto).
> A quebra fina e executÃ¡vel vai para o `tasks.md`.

| #  | Tarefa / bloco        | DescriÃ§Ã£o                       | Status               |
|----|-----------------------|---------------------------------|----------------------|
| 1  | <â€¦>                   | <o que faz>                     | definido             |
| 2  | <â€¦>                   | <o que faz>                     | indefinido           |

## Alternativas consideradas
> A seÃ§Ã£o mais valiosa do doc â€” mostra que o trade-off foi pensado.

| Alternativa   | PrÃ³s | Contras | Por que (nÃ£o) escolhida |
|---------------|------|---------|-------------------------|
| A (escolhida) |      |         |                         |
| B             |      |         |                         |

## Trade-offs e consequÃªncias
<O que ganhamos e o que aceitamos perder. DÃ­vida tÃ©cnica assumida conscientemente.>

## Riscos
| Risco   | DescriÃ§Ã£o          | Prob. Ã— Impacto    | AÃ§Ãµes / mitigaÃ§Ãµes |
|---------|--------------------|--------------------|--------------------|
| <risco> | <por que acontece> | mÃ©dio Ã— alto       | <o que fazer / como mitigar> |

## Roadmap da feature
> Fases/ondas de entrega desta feature. A Onda 1 alimenta o `docs/product/roadmap.md` global.

| Fase / onda | Entrega                | Quando         | Depende de |
|-------------|------------------------|----------------|------------|
| 1 (MVP)     | <fatia que valida>     | <ciclo/sprint> | â€”          |
| 2           | <incremento>           | <depois>       | 1          |

## QuestÃµes em aberto
- [ ] <decisÃ£o pendente â€” quem responde, atÃ© quando>

> DecisÃµes difÃ­ceis de reverter tomadas aqui â†’ registre como ADR em `docs/architecture/adr/`.



