---
name: validar
description: Use após implementar uma feature para validá-la (UAT) - roda os gates de docs/engineering/TESTING.md, mapeia cada AC-N ao seu teste e aponta ACs sem cobertura, resolve SPEC_DEVIATION pendente, checa o Definition of Done e atualiza docs/STATE.md. Acione com /validar.
---

# Skill: Validar feature (UAT)

Fecha o loop SDD: prova que a implementaÃ§Ã£o cumpre a **spec**, pelo **gate executÃ¡vel** â€” nÃ£o por
inspeÃ§Ã£o. Rode depois de implementar (pode ser em outra sessÃ£o).

## Processo
1. **Identifique a feature** (`specs/NNNN-<nome>/`) e leia `spec.md` + `tasks.md`.
2. **Rode os gates** de `docs/engineering/TESTING.md` (e os comandos da coluna Gate do `tasks.md`). O `/verify`
   embutido do agent ajuda a validar comportamento real.
3. **Mapeie `AC-N â†’ teste`** e mostre a tabela; **aponte qualquer AC sem cobertura** ou falhando.
   Se a spec tem **Matriz de decisÃ£o**, cada linha Ã© um caso de teste: confira que **toda linha**
   tem teste correspondente (combinaÃ§Ãµes sÃ£o onde mais escapa bug).
4. **SPEC_DEVIATION:** resolva os pendentes â€” ou corrige o cÃ³digo (a spec vence) ou atualiza a
   spec conscientemente (e registra ADR se for difÃ­cil de reverter). Se a decisÃ£o "corrigir vs
   atualizar" tiver ramificaÃ§Ãµes (afeta outros AC, fronteiras, ADRs), rode **`/clarificar`** para
   fechar a Ã¡rvore antes de escolher.
5. **Definition of Done** (ver `README.md` / `AGENTS.md`): AC verdes pelo gate, sem deviation
   aberto, ADRs registrados, glossÃ¡rio/context-map atualizados, spec fiel.
6. **Atualize `docs/STATE.md`** (prÃ³ximo passo / decisÃµes) â€” ou rode `/handoff` para encerrar.

## SaÃ­da
Veredito claro: **pronto para merge** ou a lista do que falta (AC sem cobertura, deviation aberto,
item de DoD pendente). Se hÃ¡ MCP de escrita validado, ofereÃ§a atualizar a issue/pÃ¡gina da feature.



