---
name: diagramar
description: Use no discovery para desenhar a arquitetura de ALTO NÃVEL em Mermaid â€” diagrama de contexto (C4 L1), containers (C4 L2) e o mapa de bounded contexts (DDD). LÃª vision, context-map, design e assessment, e gera/atualiza docs/architecture/diagrams.md. MantÃ©m alto nÃ­vel, sem detalhe de implementaÃ§Ã£o. Acione com /diagramar.
---

# Skill: Diagramar arquitetura (Mermaid, alto nÃ­vel)

Gera os diagramas de arquitetura em **Mermaid** (renderizam no GitHub e no agent) a partir
dos artefatos de discovery. Mantenha **alto nÃ­vel**: atores, sistemas, containers e contextos â€”
nunca classes, tabelas ou detalhe de implementaÃ§Ã£o (isso Ã© escopo do `design.md` da feature).

## Insumos (puxe sÃ³ o que existir e cite a origem)
- `docs/product/vision.md` â€” atores/personas e propÃ³sito do sistema.
- `docs/architecture/context-map.md` â€” bounded contexts e relaÃ§Ãµes (DDD).
- `specs/*/design.md` â€” containers, serviÃ§os e integraÃ§Ãµes.
- `docs/architecture/assessment.md` â€” as-is, no brownfield.
- **Lacunas** â†’ pergunte (`AskUserQuestion`): atores externos, sistemas vizinhos, principais
  containers (UI/serviÃ§os/dados/filas) e a jornada crÃ­tica a ilustrar.

## Diagramas (alto nÃ­vel, alinhado a C4 + DDD)
1. **Contexto do sistema (C4 L1):** o sistema no centro + personas + sistemas externos.
2. **Containers (C4 L2):** apps/serviÃ§os, dados, filas e como conversam.
3. **Mapa de bounded contexts (DDD):** contextos e padrÃµes de relaÃ§Ã£o (ACL, Customer/Supplier,
   Conformist, Shared Kernel).
4. *(opcional)* **Fluxo-chave:** uma jornada crÃ­tica em `sequenceDiagram`.

> Use `flowchart` (renderiza em todo lugar) ou os diagramas C4 nativos do Mermaid (`C4Context`,
> `C4Container`) se o renderizador suportar. RÃ³tulos na **linguagem ubÃ­qua** do `glossary.md`.

## SaÃ­da
- Escreva/atualize `docs/architecture/diagrams.md` (jÃ¡ existe como placeholder; mantenha o
  frontmatter `alwaysApply: false`). Cada diagrama num bloco ` ```mermaid `, com tÃ­tulo e 1 linha
  de contexto.
- Garanta o link de volta em `context-map.md`. **Regenere quando a arquitetura mudar** â€” diagrama
  desatualizado engana mais que ajuda.

## Regras
- **Alto nÃ­vel only.** Pediram detalhe de classe/tabela? Diga que Ã© escopo do `design.md`.
- **Valide a sintaxe antes de entregar** â€” rode o gate determinÃ­stico (nÃ£o confie sÃ³ no olho):
  ```
  node scripts/validate-mermaid.mjs .
  ```
  Pega bloco vazio, tipo de diagrama ausente/desconhecido e aspas/delimitadores desbalanceados.
  Corrija os erros antes de salvar; Ã© o mesmo gate que roda na CI (`esteira.yml`).
- NÃ£o invente componentes que nÃ£o estÃ£o nos insumos â€” pergunte (ver verificaÃ§Ã£o de conhecimento no `AGENTS.md`).



