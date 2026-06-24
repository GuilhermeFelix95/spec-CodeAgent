---
name: roadmap
description: Use para construir ou atualizar docs/product/roadmap.md em horizontes Now/Next/Later, com valor, esforÃ§o, dono e dependÃªncias, priorizando quick wins de baixo risco. No brownfield inclui a adoÃ§Ã£o incremental do SDD. Pensado para revisar com o time a cada ciclo. Ã‰ chamada pelo /kickoff e tambÃ©m roda sozinha periodicamente. Acione com /roadmap.
---

# Skill: Roadmap (construir / revisar com o time)

ConstrÃ³i ou atualiza o roadmap. **Idempotente**: re-rodar revisa o que existe, nÃ£o recomeÃ§a.
PrincÃ­pio: **quick wins de baixo risco primeiro** para gerar traÃ§Ã£o e confianÃ§a do time.

## ReÃºna os insumos
- **Greenfield:** `vision.md`, `mvp-canvas.md` (features sequenciadas por valor Ã— esforÃ§o).
- **Brownfield:** `assessment.md` (dÃ­vidas/riscos e gaps dos 5 eixos) â†’ itens de melhoria.
- **Sempre:** `docs/STATE.md` (todos soltos, ideias adiadas) e pendÃªncias de `integrations.md`.
- **Capacidade:** Throughput recente em `docs/engineering/metrics.md` (via `/metricas`) â€” dimensione
  as ondas pela **vazÃ£o real**, nÃ£o pelo otimismo.

## Construa
- Horizontes **Now / Next / Later** (datas sÃ³ no "Agora" â€” evita falsa precisÃ£o).
- Cada item: valor, esforÃ§o, **dono**, dependÃªncias, "pronto quando".
- Prioridade empatada ou dependÃªncias enredadas entre itens? Rode **`/clarificar`** para sabatinar
  a ordenaÃ§Ã£o (uma pergunta por vez) atÃ© a sequÃªncia fechar â€” em vez de chutar o "Agora".
- **Brownfield:** inclua a seÃ§Ã£o de **adoÃ§Ã£o incremental do SDD** (sem big-bang: prÃ³xima feature
  jÃ¡ nasce com spec; backfill de ADRs e context-map depois).
- Defina a **cadÃªncia de revisÃ£o** e quem decide prioridade.

## SaÃ­da
- `docs/product/roadmap.md` (use `docs/product/_templates/roadmap.template.md`).
- OfereÃ§a commit se for repositÃ³rio git.

## PrÃ³ximo passo
Aponte a primeira feature do "Agora" â†’ `/nova-feature`.



