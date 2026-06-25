---
name: agentic-layer
description: Mapa de rules/agents/skills/workflows. Puxe ao evoluir a camada agÃªntica.
alwaysApply: false
---

# Camada agÃªntica do projeto

Os mesmos insumos do kickoff (stack, ferramentas, processo, domÃ­nio) afinam a camada que faz
**humanos e agentes operarem a esteira SDD**. Quatro tipos de artefato, todos versionados â€”
gerados/propostos pelo `/kickoff` e evoluÃ­dos ao longo do projeto.

## 1. Rules â€” como o agente deve se comportar
- **`AGENTS.md`** â€” convenÃ§Ãµes, linguagem ubÃ­qua, regra de camadas, Definition of Done.
  Lido em toda sessÃ£o. (gerado no kickoff)
- **`agent settings`** â€” permissÃµes (allowlist dos comandos comuns do stack, p/ reduzir
  prompts) e **hooks**. âš ï¸ SensÃ­vel: confirme cada permissÃ£o/hook antes de gravar.

## 2. Docs â€” o conhecimento (a constituiÃ§Ã£o)
vision Â· mvp-canvas Â· design Â· domain Â· spec Â· ADRs Â· glossary Â· context-map Â· roadmap Â· integrations.
A spec continua sendo a **fonte da verdade**.

## 3. Agents (subagentes) â€” especialistas sob demanda
`agents/<nome>.md` (ver `docs/engineering/_templates/subagent.template.md`). Exemplos tÃ­picos:
- **`spec-reviewer`** â€” valida critÃ©rios de aceite testÃ¡veis (gate *Definition of Ready*).
- **`domain-modeler`** â€” extrai linguagem ubÃ­qua e agregados de uma spec; checa o glossÃ¡rio.
- **`adr-writer`** â€” rascunha um ADR a partir de uma decisÃ£o.
- **`<stack>-tester`** â€” roda e interpreta os testes do stack (ex.: pytest, vitest).

## 4. Skills â€” workflows reutilizÃ¡veis
`skills/<nome>/SKILL.md` (ver `docs/engineering/_templates/skill.template.md`). Exemplos:
As 8 skills do kit, uma responsabilidade cada:

| Skill | Responsabilidade |
|---|---|
| **`/kickoff`** | orquestra a constituiÃ§Ã£o (descoberta + 5 eixos + geraÃ§Ã£o) |
| **`/mapear`** | brownfield as-is â†’ `assessment.md` (re-execuÃ§Ã£o independente) |
| **`/diagramar`** | arquitetura de alto nÃ­vel em Mermaid â†’ `diagrams.md` |
| **`/roadmap`** | constrÃ³i/revisa o roadmap com o time |
| **`/camada-agentica`** | propÃµe/gera rules, subagents, skills, workflows/CI |
| **`/integracoes`** | ferramentas do time + MCPs (ortogonal ao kickoff) |
| **`/nova-feature`** | loop por feature (tier â†’ spec â†’ tasks) |
| **`/validar`** | UAT local: gates, ACâ†’teste, SPEC_DEVIATION, DoD |
| **`/revisar-pr`** | gate de conformidade SDD no PR/MR (posta via MCP) |
| **`/setup-ci`** | pipeline CI/CD que materializa os gates SDD |
| **`/metricas`** | Lead Time Â· Throughput Â· maturidade de CD â†’ `metrics.md` |
| **`/auditar`** | valida conformidade da esteira (frontmatter, links, rastreabilidade) |
| **`/evals`** | fidelidade specâ†’cÃ³digo (AC por task/teste, SPEC_DEVIATION) |
| **`/handoff`** | pausa/retoma via `docs/STATE.md` (continuidade) |

- *Tools-aware* (geradas pela `/camada-agentica` se o MCP existir): **`/spec-to-jira`**, **`/publicar-confluence`**.

## 5. Workflows â€” automaÃ§Ã£o da esteira
- **Hooks** (`settings.json`): `SessionStart` â†’ `hooks/load-context.mjs` injeta o contexto
  base (`alwaysApply: true`); rodar lint/teste no `Stop`; alertar ao editar fora de escopo.
- **CI/CD** (`/setup-ci`): falhar PR que altera cÃ³digo **sem spec aprovada**; rodar os testes de
  aceite derivados da `spec.md`. Ã‰ aqui que o gate SDD vira pipeline.
- **Gate de PR/MR** (`/revisar-pr`): conformidade de processo na revisÃ£o, complementando o
  `/code-review` do harness (que caÃ§a bugs).
- **Conformidade da esteira** (`.github/workflows/esteira.yml` â†’ `scripts/audit-esteira.mjs`):
  valida frontmatter, links e specs em todo PR. O `/auditar` Ã© o complemento com julgamento
  (rastreabilidade, specs Ã³rfÃ£s, DoD).

## Como os insumos afinam cada artefato
| Insumo do kickoff               | Afina                                                   |
|---------------------------------|---------------------------------------------------------|
| Stack (ex.: Python/pytest)      | rules no `AGENTS.md` Â· `<stack>-tester` Â· permissÃµes     |
| Ferramentas (Jira/Confluence)   | skills `/spec-to-jira`, `/publicar-confluence`           |
| Processo (Scrum/Kanban)         | workflow de preparaÃ§Ã£o de sprint; cadÃªncia do roadmap    |
| DomÃ­nio (bounded contexts)      | `domain-modeler` Â· sementes do glossÃ¡rio                 |
| Observabilidade                 | hooks/CI que checam mÃ©tricas e SLO                       |

> PrincÃ­pio: **proponha com justificativa, gere sÃ³ o aprovado.** O que nÃ£o for aprovado vira
> item do roadmap de adoÃ§Ã£o â€” sem big-bang.





