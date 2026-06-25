---
name: setup-ci
description: Use para criar ou ajustar a pipeline de CI/CD que materializa os gates SDD â€” lint, anÃ¡lise estÃ¡tica (type-check/complexidade/SAST), testes (unidade/integraÃ§Ã£o/aceite) e cobertura a partir de docs/engineering/TESTING.md, com cobertura e anÃ¡lise estÃ¡tica publicadas como artefatos, mais a regra "falha PR sem spec aprovada". Detecta GitHub Actions / GitLab CI / outro. Gera o arquivo sÃ³ com aprovaÃ§Ã£o. Acione com /setup-ci.
---

# Skill: Setup de CI/CD (gates SDD na pipeline)

Materializa os gates SDD na esteira automÃ¡tica â€” Ã© onde "documento que o time tenta seguir" vira
"regra que o sistema garante". **Idempotente**: re-rodar ajusta a pipeline existente.

## Descubra o alvo
- Detecte o provedor (GitHub Actions / GitLab CI / Bitbucket / outro) pelo repo e por `integrations.md`.
- Leia `docs/engineering/TESTING.md` (comandos de gate) e o quality gate do `AGENTS.md` (cobertura mÃ­nima).

## Proponha a pipeline (confirme antes de gerar)
EstÃ¡gios em ordem; falhar **bloqueia o merge**:
1. **Lint/format** â†’ 2. **AnÃ¡lise estÃ¡tica** (type-check + complexidade + SAST) â†’ 3. **Unidade** â†’
   4. **IntegraÃ§Ã£o** â†’ 5. **Aceite** (um por `AC-N`) â†’ 6. **Cobertura** (mÃ­n. do `AGENTS.md`).
7. **Regra SDD:** PR que altera cÃ³digo **sem spec aprovada** em `specs/` â†’ falha (job que checa a
   presenÃ§a/status da spec correspondente Ã  mudanÃ§a).

**EvidÃªncia rastreÃ¡vel:** publique **cobertura e anÃ¡lise estÃ¡tica como artefatos** do run (e, se o
provedor permitir, como check/comentÃ¡rio no PR). O resultado de qualidade fica anexado Ã  mudanÃ§a e
alimenta a tendÃªncia do `/metricas`.

## Gere
- O arquivo da pipeline (`.github/workflows/*.yml` / `.gitlab-ci.yml`) usando os comandos de
  `docs/engineering/TESTING.md` â€” nÃ£o invente comandos; reuse os de lÃ¡.
- âš ï¸ **Sem segredos no arquivo** â€” use os secrets do provedor. Confirme antes de escrever.
- Registre a escolha de pipeline como **ADR** se for estrutural; aponte em `docs/engineering/agentic-layer.md`.

## PrÃ³ximo passo
Combine com `/revisar-pr` (gate humano/agente). Juntos cobrem **review + automaÃ§Ã£o**: a CI garante
os testes/cobertura/spec; o `/revisar-pr` garante a conformidade de processo no PR/MR.



