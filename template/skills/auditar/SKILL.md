---
name: auditar
description: Use para auditar a conformidade do kit SDD - roda o validador estrutural (frontmatter, links, specs) e checa o que exige julgamento (rastreabilidade AC->teste->commit, DoD, specs órfãs, docs vivas atualizadas). Reporta violações com o arquivo. Acione com /auditar.
---

# Skill: Auditar a esteira SDD

Verifica se o projeto respeita o padrÃ£o da esteira. Duas camadas: **estrutural** (script, determinÃ­stico)
e **semÃ¢ntica** (julgamento do agente).

## 1. Checagem estrutural (determinÃ­stica)
Rode os validadores e reporte a saÃ­da:
```
node scripts/audit-esteira.mjs .
node scripts/validate-mermaid.mjs .
```
O primeiro cobre: frontmatter presente + dialeto certo (`alwaysApply` nos docs; `name`+`description`
nas skills), links relativos quebrados e toda `specs/NNNN-*/` com `spec.md`. O segundo valida os
blocos Mermaid (tipo, aspas, delimitadores). Exit â‰  0 em qualquer um = falhou.

## 2. Checagem semÃ¢ntica (julgamento)
O script nÃ£o pega tudo. Verifique tambÃ©m:
- **Rastreabilidade:** cada `AC-N` da spec aparece em `tasks.md` (coluna "Cobre AC") e tem teste?
- **Specs Ã³rfÃ£s:** features em `specs/` sem PR/implementaÃ§Ã£o correspondente, ou paradas hÃ¡ tempo
  (cruze com `STATE.md`).
- **Docs vivas:** glossÃ¡rio e `context-map.md` refletem os termos/fronteiras atuais? ADRs cobrem
  as decisÃµes difÃ­ceis de reverter jÃ¡ tomadas?
- **DoD pendente:** features marcadas prontas com `SPEC_DEVIATION` aberto ou AC sem teste.
- **Frontmatter `alwaysApply`:** o que Ã© base estÃ¡ `true`; o resto `false` com `description` que diz quando puxar.

## SaÃ­da
Liste as violaÃ§Ãµes por arquivo, separando **estrutural** (corrigir jÃ¡) de **semÃ¢ntica** (revisar).
OfereÃ§a corrigir as triviais (frontmatter, links). NÃ£o invente conformidade â€” relate o que achou.

> Esta skill Ã© o complemento humano/agente do gate de CI (`/setup-ci` roda o mesmo script).



