---
name: tasks
description: DecomposiÃ§Ã£o e gates da feature. Puxe ao implementar.
alwaysApply: false
---

# Tasks â€” <nome da feature>

> DecomposiÃ§Ã£o da implementaÃ§Ã£o. Cada task **mapeia para um ou mais `AC-N`** (rastreabilidade
> spec â†’ task â†’ commit) e tem um **gate executÃ¡vel**: o comando que prova que ela estÃ¡ pronta.
> Marque `[P]` nas tasks que podem rodar em paralelo (sem dependÃªncia entre si).

## Plano
| #  | Task                                  | Cobre AC | Depende de | Gate (comando)        | Status |
|----|---------------------------------------|----------|------------|-----------------------|--------|
| 1  | <ex.: modelar agregado no domÃ­nio>    | AC-1     | â€”          | `<test do domÃ­nio>`   | todo   |
| 2  | <ex.: caso de uso na application>     | AC-1,2   | 1          | `<test do caso de uso>`| todo  |
| 3  | <ex.: adapter/repo na infrastructure> | AC-2     | 1          | `<test de integraÃ§Ã£o>`| todo   |
| 4  | <ex.: endpoint na interface> `[P]`    | AC-1,2   | 2,3        | `<test de aceite>`    | todo   |

> Uma task sÃ³ vira `done` quando o **gate passa** (comandos em `docs/engineering/TESTING.md`) â€” nÃ£o por
> inspeÃ§Ã£o visual. Um commit por task.

## Plano de teste
- Unidade: <invariantes do domÃ­nio, value objects>
- IntegraÃ§Ã£o: <adapters, repos, contratos>
- Aceite: <um teste por AC da spec.md â€” Ã© o gate de aceite>

## DivergÃªncias (SPEC_DEVIATION)
> Se a implementaÃ§Ã£o precisar fugir da spec, registre aqui antes de seguir (ver `AGENTS.md`).
- [ ] <task # Â· motivo Â· resoluÃ§Ã£o: corrigir cÃ³digo OU atualizar spec/ADR>

## Checklist de Definition of Done
- [ ] Todos os AC verdes **pelo gate executÃ¡vel** (nÃ£o por inspeÃ§Ã£o)
- [ ] Nenhum `SPEC_DEVIATION` pendente
- [ ] ADRs de decisÃµes difÃ­ceis de reverter registrados
- [ ] GlossÃ¡rio / context-map atualizados se mudaram
- [ ] Spec reflete o que foi construÃ­do
- [ ] `docs/STATE.md` atualizado (prÃ³ximo passo / decisÃµes)



