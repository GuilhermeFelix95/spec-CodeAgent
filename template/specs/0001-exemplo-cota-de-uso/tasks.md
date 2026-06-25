---
name: tasks
description: DecomposiÃ§Ã£o e gates da feature. Puxe ao implementar.
alwaysApply: false
---

# Tasks â€” Cota de uso por organizaÃ§Ã£o

## Plano
| #  | Task                                                        | Cobre AC | Depende de | Status |
|----|-------------------------------------------------------------|----------|------------|--------|
| 1  | Value objects `Quota`, `Window`, `UsoCount` + invariantes | AC-1,2   | â€”          | todo   |
| 2  | Agregado `OrganizationUso` + eventos `QuotaExceeded`/`WindowReset` | AC-2,3 | 1 | todo |
| 3  | Porta `UsoCounter` (domÃ­nio) + caso de uso `CheckQuota`   | AC-1,2,3 | 2          | todo   |
| 4  | `RedisUsoCounter` implementando a porta (INCR/EXPIRE)     | AC-3,4   | 3          | todo   |
| 5  | Middleware na borda + headers 429 / `Retry-After`           | AC-1,2   | 3          | todo   |
| 6  | Fail-open + alerta quando contador indisponÃ­vel             | AC-4     | 4,5        | todo   |
| 7  | Feature flag + modo shadow                                  | â€”        | 5          | todo   |
| 8  | ADR-0002 (janela fixa vs deslizante)                        | â€”        | â€”          | todo   |

## Plano de teste
- Unidade: invariantes de `Quota`/`UsoCount`; transiÃ§Ã£o de estado `Exceeded`.
- IntegraÃ§Ã£o: `RedisUsoCounter` com Redis real (testcontainer); reset por TTL.
- Aceite: um teste por AC (AC-1 a AC-4), incluindo fail-open simulando Redis fora.

## Checklist de Definition of Done
- [ ] AC-1 a AC-4 verdes
- [ ] ADR-0002 registrado
- [ ] GlossÃ¡rio atualizado (Quota, Window, Uso, Exceeded)
- [ ] Context-map atualizado (novo contexto Uso Metering)
- [ ] Spec reflete o que foi construÃ­do



