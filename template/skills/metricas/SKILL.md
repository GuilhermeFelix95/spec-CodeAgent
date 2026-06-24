---
name: metricas
description: Use para acompanhar mÃ©tricas de entrega/fluxo â€” Lead Time (tempo atÃ© produÃ§Ã£o) e Throughput (itens concluÃ­dos por ciclo) â€” a maturidade de Continuous Delivery vs Continuous Deployment, e a qualidade de cÃ³digo (cobertura e anÃ¡lise estÃ¡tica) como tendÃªncia rastreÃ¡vel. LÃª git/Jira/CI e os artefatos de qualidade quando hÃ¡ MCP conectado e atualiza docs/engineering/metrics.md. Acione com /metricas.
---

# Skill: MÃ©tricas de entrega (Lead Time Â· Throughput Â· CD)

Acompanha a saÃºde do fluxo de entrega. **Idempotente**: re-rodar recalcula o perÃ­odo.
PrincÃ­pio: usar para **achar gargalo**, nÃ£o para ranquear pessoas (nÃ£o incentive gaming).

## Defina o perÃ­odo
Pergunte (`AskUserQuestion`) o ciclo (sprint / semana / mÃªs) e a janela de datas.

## 1. Lead Time â€” quanto tempo atÃ© produÃ§Ã£o
Tempo de **"comeÃ§ou" â†’ "em produÃ§Ã£o"** por item.
- **InÃ­cio** (use o que houver): data da spec/STATE, criaÃ§Ã£o da issue (Jira) ou 1Âº commit.
- **Fim:** deploy em prod â€” tag/release, log de CI/CD, ou status "done" do Jira.
- Calcule por item e o agregado: **mediana** e **p85** (mais robusto que mÃ©dia). Quebre por
  tier/tipo (feature/bug) se Ãºtil.

## 2. Throughput â€” itens concluÃ­dos no ciclo
NÃºmero de itens que chegaram a **"pronto"/prod** no perÃ­odo (histÃ³rias, bugs, tarefas).
- Fontes: `specs/` marcadas implementadas, PRs mergeados, issues fechadas (Jira), deploys.
- Reporte o **nÃºmero absoluto** por ciclo e a **tendÃªncia** (â†‘ / â†’ / â†“ vs ciclo anterior).

## 3. Continuous Delivery vs Continuous Deployment
Avalie onde o time estÃ¡ e o gap:

| PrÃ¡tica | DefiniÃ§Ã£o | Pergunta de verificaÃ§Ã£o |
|---|---|---|
| **Continuous Delivery** | toda mudanÃ§a fica **deployÃ¡vel** (pipeline verde); o release Ã© decisÃ£o de negÃ³cio (um botÃ£o) | o pipeline garante deployabilidade? hÃ¡ staging? |
| **Continuous Deployment** | toda mudanÃ§a aprovada vai para prod **automaticamente**, sem gate manual | ainda hÃ¡ gate manual? quanto da pipeline Ã© automÃ¡tico? |

- Reporte tambÃ©m a **Deployment Frequency** (quantos deploys no perÃ­odo).
- Aponte o prÃ³ximo passo de automaÃ§Ã£o â†’ `/setup-ci`.

## 4. Qualidade de cÃ³digo â€” cobertura e anÃ¡lise estÃ¡tica
EvidÃªncia rastreÃ¡vel do **resultado** (nÃ£o sÃ³ do fluxo). Olhe a **tendÃªncia**, nÃ£o o nÃºmero isolado â€”
e nunca para ranquear pessoas (nÃ£o incentive gaming: 100% de cobertura com testes vazios Ã© pior que 80% honesto).
- **Cobertura:** % atual (global e, se Ãºtil, por mÃ³dulo/camada) e a tendÃªncia vs ciclo anterior.
  Fonte: relatÃ³rio de cobertura da CI (artefato â€” ver `/setup-ci`) ou `<comando de cobertura>` local.
- **AnÃ¡lise estÃ¡tica:** nÂº de **findings por severidade** (type-check, complexidade/smells,
  SAST/seguranÃ§a, duplicaÃ§Ã£o) e a tendÃªncia. Fonte: relatÃ³rio do CI (Sonar/CodeQL/semgrep/ruff/tscâ€¦).
- LigaÃ§Ã£o com o gate: cobertura abaixo do mÃ­nimo ou finding **bloqueante** barra o merge (ver
  `docs/engineering/TESTING.md`); o resto entra aqui como **tendÃªncia** a vigiar (dÃ­vida acumulando?).

## Fontes (tools-aware)
Se Jira/GitHub/GitLab/CI MCP estiver conectado (conta validada â€” ver `/integracoes`), **puxe os
dados** (issues, PRs, releases, runs de pipeline, **artefatos de cobertura/anÃ¡lise estÃ¡tica**).
SenÃ£o, use `git log`/tags locais e os comandos do `TESTING.md`, e peÃ§a os nÃºmeros que faltarem. Cite a origem.

## SaÃ­da
- Atualize `docs/engineering/metrics.md` (tabelas + tendÃªncia + data e perÃ­odo), incluindo a seÃ§Ã£o
  **Qualidade de cÃ³digo**.
- Resuma: Lead Time (mediana/p85), Throughput (total + tendÃªncia), maturidade CD, **cobertura e
  findings de anÃ¡lise estÃ¡tica (tendÃªncia)** e o gargalo nÂº 1.
- **Realimente o `/roadmap`:** o Throughput recente Ã© a **capacidade observada** â€” nÃ£o planeje
  ondas alÃ©m da vazÃ£o real do time.

> Contexto: Lead Time e Deployment Frequency sÃ£o mÃ©tricas **DORA**; Throughput Ã© mÃ©trica de fluxo.
> Olhe a **tendÃªncia**, nÃ£o o nÃºmero isolado.


