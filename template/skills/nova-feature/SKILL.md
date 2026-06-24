---
name: nova-feature
description: Use para abrir uma nova feature no padrÃ£o SDD. Decide o tier (trivial/pequeno/arquitetural), cria specs/NNNN-<nome>/ com os templates certos, conduz o preenchimento de cima pra baixo pelos gates (product â†’ design â†’ domain â†’ spec â†’ tasks) e, quando hÃ¡ MCP conectado, importa a story do Jira no inÃ­cio e cria as issues na quebra de tasks. Acione com /nova-feature.
---

# Skill: Nova feature (loop SDD)

Abre e conduz uma feature pela esteira do `README.md`. A **spec Ã© o contrato**; preencha na
ordem dos gates e pare em cada um para review. Siga as convenÃ§Ãµes do `AGENTS.md`.

## PrincÃ­pios
- **Pergunte em lotes curtos** com `AskUserQuestion`; ofereÃ§a defaults "(Recomendado)". Mas quando a
  ambiguidade for **profunda e ramificada** (uma decisÃ£o depende da outra), troque o lote por uma
  **sabatina** â€” rode **`/clarificar`** (uma pergunta por vez, caminhando a Ã¡rvore) e volte com o
  entendimento fechado. Especialmente Ãºtil nos gates de **design** e **spec**.
- **NÃ£o delegue a `spec.md`** â€” os critÃ©rios de aceite sÃ£o o contrato; o usuÃ¡rio valida.
- AÃ§Ãµes outward-facing (criar issue, publicar) â†’ **confirme antes**.
- *Tools-aware:* sÃ³ use um MCP se ele estiver disponÃ­vel na sessÃ£o (`mcp__<servidor>__*`);
  caso contrÃ¡rio, siga sem ele e registre como pendÃªncia.
- **Trava de conexÃ£o:** MCP jÃ¡ ativo nÃ£o autoriza uso. Confirme **qual conta/workspace** a
  conexÃ£o aponta antes de ler a story, e reconfirme antes de **criar issues** (escrever na conta
  errada â€” ex.: Jira pessoal vs do projeto â€” vaza dado). Use a conexÃ£o validada no `/kickoff` se houver.

## Fase 1 â€” Identidade da feature
1. Calcule o prÃ³ximo nÃºmero: maior `NNNN` em `specs/` + 1, com 4 dÃ­gitos (ex.: `0002`).
2. Pergunte um nome curto em kebab-case â†’ pasta `specs/NNNN-<nome>/`.
3. **(tools-aware) Importar contexto:** se Jira/Linear estiver conectado, pergunte se a feature
   tem uma story/Ã©pico. Se sim, leia a issue e use para semear `product.md`; guarde a chave na
   frontmatter (`jira: PROJ-123`). Se Confluence/Notion estiver conectado, puxe pÃ¡ginas relacionadas.
   **Se nada de gestÃ£o/doc estiver conectado** e o usuÃ¡rio quiser puxar insumo, **ofereÃ§a rodar
   `/integracoes` agora** (neutro â€” deixe-o dizer o que usa); se recusar, siga sem e registre a pendÃªncia.

## Fase 2 â€” Decidir o tier
Pergunte (gate): **"isso introduz decisÃ£o difÃ­cil de reverter ou nova fronteira de domÃ­nio?"**

| Resposta | Tier | Artefatos a criar |
|----------|------|-------------------|
| NÃ£o, Ã© trivial (â‰¤3 arquivos) | **Trivial** | sÃ³ o PR â€” ou `specs/quick/NNN-slug/` (TASK.md + SUMMARY.md) p/ deixar rastro. |
| NÃ£o, mas Ã© uma feature isolada | **Pequeno** | `spec.md` + `tasks.md` |
| Sim | **Arquitetural** | `product.md` + `design.md` + `domain.md` + `spec.md` + `tasks.md` |

Na dÃºvida, promova de tier (Ã© barato). Copie os templates de `specs/_templates/` para a pasta.

## Fase 3 â€” Preencher de cima pra baixo (pelos gates)
Para cada artefato do tier, rascunhe a partir do template e **pare no gate para review**:

1. **`product.md`** (arquitetural) â€” problema, para quem, mÃ©trica, goals/non-goals.
2. **`design.md`** (arquitetural) â€” soluÃ§Ã£o + os 5 eixos (stack, arquitetura, infra, qualidade,
   observabilidade) + alternativas/trade-offs/riscos. DecisÃ£o difÃ­cil de reverter â†’ vira ADR.
   Trade-offs entrelaÃ§ados? Rode **`/clarificar`** para sabatinar os ramos antes de fixar a decisÃ£o.
   Se existir o subagente `domain-modeler`/`spec-reviewer`, ofereÃ§a delegar a eles.
3. **`domain.md`** (arquitetural) â€” bounded context, linguagem ubÃ­qua, agregados, eventos.
   Atualize `docs/glossary.md` e `docs/architecture/context-map.md` se surgirem termos/fronteiras.
4. **`spec.md`** (sempre) â€” critÃ©rios de aceite em Given/When/Then, casos de borda, fora de escopo.
   Gate **Definition of Ready**: cada AC Ã© testÃ¡vel e nÃ£o-ambÃ­guo? **Algum AC ainda vago ou um "como
   deveria se comportar quandoâ€¦" em aberto? Rode `/clarificar`** para fechar a Ã¡rvore antes de gravar.
   Se houver `spec-reviewer`, use-o.
   **Regra que combina vÃ¡rios fatores** (flags, estados, modos)? Use a **Matriz de decisÃ£o** do
   template â€” tabela-verdade Ã© mais densa e barata em tokens que prosa, e cada linha vira teste.
5. **`tasks.md`** (sempre) â€” decomponha em tasks, cada uma mapeando para um ou mais AC + plano de teste.

## Fase 4 â€” Quebra de tasks e tracking
1. Preencha a tabela de `tasks.md` (task â†’ cobre AC â†’ depende de â†’ status).
2. **(tools-aware) Criar issues:** se Jira/Linear estiver conectado, ofereÃ§a criar uma issue/subtask
   por task (confirme antes). Escrita Ã© **uma via** (repo â†’ ferramenta); grave o mapeamento
   `task # â†” issue key` no `tasks.md`. **Se nÃ£o houver MCP de gestÃ£o**, ofereÃ§a rodar `/integracoes`
   para conectar agora; se o usuÃ¡rio recusar, deixe a coluna para preencher Ã  mÃ£o.

## Fase 5 â€” Pronto para implementar
- Cheque o **Definition of Ready** (ver `README.md`): AC testÃ¡veis, non-goals, termos no glossÃ¡rio,
  e â€” no tier arquitetural â€” `design.md` aprovado.
- Resuma com links clicÃ¡veis e aponte: implementar respeitando a regra de camadas (`src/README.md`),
  um teste por AC. Lembre o **Definition of Done** para o merge (AC verdes, ADRs, docs vivas, spec fiel).
- Se for repositÃ³rio git e o usuÃ¡rio quiser, ofereÃ§a um commit dos artefatos da spec.

## Fase 6 â€” ValidaÃ§Ã£o (UAT)
ApÃ³s a implementaÃ§Ã£o (pode ser em outra sessÃ£o), rode a skill **`/validar`**: ela roda os gates de
`docs/engineering/TESTING.md`, mapeia `AC-N â†’ teste`, resolve `SPEC_DEVIATION`, checa o Definition of Done e
atualiza `docs/STATE.md`. Encerre com `/handoff` se for pausar.



