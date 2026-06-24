---
name: mapear
description: Use para mapear um codebase existente (brownfield) e produzir docs/architecture/assessment.md â€” stack, arquitetura, bounded contexts implÃ­citos, maturidade nos 5 eixos, dÃ­vidas/riscos e decisÃµes histÃ³ricas a virar ADR retroativo. Re-execuÃ§Ã£o atualiza o assessment. Ã‰ chamada pelo /kickoff no modo brownfield, e tambÃ©m roda sozinha quando o codebase mudar ou para analisar um repo. Acione com /mapear.
---

# Skill: Mapear o estado atual (as-is)

Produz o retrato de um projeto **jÃ¡ em andamento**. Primeiro **leia o cÃ³digo**, depois pergunte
sÃ³ o que o cÃ³digo nÃ£o revela. Ã‰ **idempotente**: re-rodar atualiza `docs/architecture/assessment.md`.

## Processo
1. **Mapeamento automÃ¡tico:** identifique stack, estrutura de pastas, estilo de arquitetura,
   acoplamentos, testes/CI, logs/mÃ©tricas/tracing. Infira os **bounded contexts implÃ­citos** a
   partir da organizaÃ§Ã£o do cÃ³digo. Em repos grandes, **delegue a varredura a um subagente** de
   exploraÃ§Ã£o (ver `docs/engineering/_templates/subagent.template.md`) para manter o contexto enxuto.
2. **Insumos externos (se houver):** se `/integracoes` conectou GitHub/cloud/Confluence (conta
   validada), use para enriquecer o as-is. Cite a origem.
3. **Entrevista de lacunas** (`AskUserQuestion`): intenÃ§Ã£o de negÃ³cio e North Star atuais;
   maiores dores/riscos hoje; termos de domÃ­nio que confundem o time; o que NÃƒO pode quebrar;
   contexto e tamanho do time.
4. **Gap analysis:** compare o as-is com o padrÃ£o SDD nos 5 eixos (tech stack, arquitetura, infra,
   qualidade, observabilidade). Marque risco (baixo/mÃ©dio/alto).
5. **DecisÃµes histÃ³ricas:** liste escolhas estruturais jÃ¡ feitas sem registro â†’ viram **ADR
   retroativo** (status: aceito, registrando o porquÃª histÃ³rico).

## SaÃ­das
- `docs/architecture/assessment.md` (use `docs/architecture/_templates/assessment.template.md`).
- Lista de ADRs retroativos a criar em `docs/architecture/adr/`.

## PrÃ³ximo passo
- Dentro do `/kickoff`: devolva o assessment + gaps para alimentar os 5 eixos e o roadmap.
- Sozinha: sugira `/roadmap` (priorizar as dÃ­vidas mapeadas) ou `/camada-agentica`.


