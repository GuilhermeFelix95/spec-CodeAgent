---
name: evals
description: Use para avaliar a fidelidade da implementaÃ§Ã£o Ã  spec â€” roda o eval que checa se cada AC-N Ã© coberto por task e referenciado em teste, conta SPEC_DEVIATION e reporta um score por feature. Acione com /evals.
---

# Skill: Evals de fidelidade specâ†’cÃ³digo

Mede se **o que foi construÃ­do reflete a spec** â€” a mÃ©trica de qualidade da saÃ­da do agente.
Duas camadas: determinÃ­stica (script) e de julgamento.

## 1. Camada determinÃ­stica
```
node scripts/eval-spec-fidelity.mjs .
```
Reporta, por feature: AC totais, **cobertos por task**, **referenciados em teste/cÃ³digo** e
**SPEC_DEVIATION** abertos. Falha (exit 1) se algum AC nÃ£o tem task â€” rastreabilidade quebrada.
ReferÃªncia em teste Ã© aviso atÃ© a feature ser implementada.

## 2. Camada de julgamento (o script nÃ£o pega isso)
- O teste de cada `AC-N` realmente exercita o **Given/When/Then** â€” ou sÃ³ cita o ID num teste vazio?
- A implementaÃ§Ã£o cobre os **casos de borda** e respeitou o **"Fora de escopo"** da spec?
- Os `SPEC_DEVIATION` abertos tÃªm resoluÃ§Ã£o (corrigir cÃ³digo **ou** atualizar a spec/ADR)?

## SaÃ­da
Score por feature + os gaps. Complementa o `/validar` (UAT de uma feature) com uma visÃ£o de
**fidelidade do portfÃ³lio**. O mesmo eval roda na CI (`esteira.yml`) â€” aqui Ã© o complemento com julgamento.



