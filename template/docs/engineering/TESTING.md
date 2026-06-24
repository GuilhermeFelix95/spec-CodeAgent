---
name: TESTING
description: Comandos de gate e convenÃ§Ãµes de teste. Puxe ao codar, validar ou montar CI.
alwaysApply: false
---

# TESTING â€” Como verificar o projeto

> **Fonte Ãºnica dos comandos de gate** e das convenÃ§Ãµes de teste. Ã‰ o que o **DoD**, a **CI** e os
> **subagentes** consomem para provar que uma task/feature estÃ¡ pronta â€” sem inspeÃ§Ã£o visual.
> Preenchido no kickoff (eixo Qualidade) e mantido vivo.

## Como rodar
| NÃ­vel         | Comando                   | Quando |
|---------------|---------------------------|--------|
| Unidade       | `<comando>`               | sempre, rÃ¡pido |
| IntegraÃ§Ã£o    | `<comando>`               | adapters / repos / contratos |
| Aceite (UAT)  | `<comando>`               | um teste por `AC-N` da spec |
| Lint / format    | `<comando>`               | prÃ©-commit / CI |
| AnÃ¡lise estÃ¡tica | `<comando>` (type-check, complexidade, SAST) | CI â€” sem findings bloqueantes |
| Cobertura        | `<comando>` (mÃ­n. `<X>%`, gera relatÃ³rio) | CI â€” relatÃ³rio anexado ao PR |

## ConvenÃ§Ãµes
- PirÃ¢mide: muitos testes de unidade, menos de integraÃ§Ã£o, poucos de aceite.
- **Cada `AC-N` da spec tem um teste de aceite que Ã© o seu gate.** Nomeie o teste com o ID
  (`test_AC_1_*` / `AC-1: ...`) para rastreabilidade spec â†’ teste.
- DomÃ­nio nÃ£o sobe infra; integraÃ§Ã£o usa `<testcontainer / mock de borda>`.
- **AnÃ¡lise estÃ¡tica** (escolha por stack): type-check (`<mypy/tsc/â€¦>`), complexidade/smells e
  **SAST/seguranÃ§a** (`<sonar/codeql/semgrep/â€¦>`). Define o que Ã© **bloqueante** (barra o merge)
  vs **aviso** (entra como tendÃªncia em `metrics.md`, nÃ£o bloqueia).

## Gates (Definition of Done executÃ¡vel)
- Uma **task** sÃ³ vira `done` quando o **Gate (comando)** dela em `tasks.md` passa.
- Uma **feature** sÃ³ faz merge quando todos os AC estÃ£o verdes + lint + **anÃ¡lise estÃ¡tica limpa**
  (sem findings bloqueantes) + cobertura mÃ­nima.
- A **CI roda exatamente estes comandos** â€” falhar bloqueia o merge.

## O que a CI executa
<Pipeline em ordem: lint â†’ anÃ¡lise estÃ¡tica â†’ unidade â†’ integraÃ§Ã£o â†’ aceite â†’ cobertura (relatÃ³rio).
Mais a regra SDD: falhar PR que altera cÃ³digo sem spec aprovada.
**Cobertura e anÃ¡lise estÃ¡tica sÃ£o publicadas como artefatos do PR** â€” evidÃªncia rastreÃ¡vel do
resultado de qualidade, que o `/metricas` consome para a tendÃªncia.>



