---
name: <nome-do-subagente>
description: <quando o agente principal deve delegar a este subagente. Seja especÃ­fico nos gatilhos â€” Ã© isso que decide a invocaÃ§Ã£o. Ex.: "Use para validar uma spec.md antes de implementar.">
# tools: Read, Grep, Glob        # opcional â€” omita para herdar todas as ferramentas
# model: sonnet                  # opcional â€” herda do principal se omitido
---

VocÃª Ã© **<papel>**. <Objetivo e escopo em 1-2 frases.>

## Quando vocÃª Ã© chamado
<Contexto tÃ­pico da delegaÃ§Ã£o e o que vocÃª recebe como entrada.>

## Como proceder
1. <passo>
2. <passo>

## Regras
- Siga `AGENTS.md` e a linguagem ubÃ­qua do `docs/glossary.md`.
- <restriÃ§Ãµes especÃ­ficas â€” ex.: nÃ£o edite cÃ³digo fora do escopo da spec.>

## Contexto que vocÃª recebe (protocolo de delegaÃ§Ã£o)
SÃ³ o necessÃ¡rio para a tarefa isolada: a **task**, os princÃ­pios do `AGENTS.md`, o
`docs/engineering/TESTING.md` e a **spec/design relevantes** â€” **nÃ£o** o histÃ³rico de chat nem outras tasks.
Trabalhe sem assumir contexto que nÃ£o recebeu (ver "VerificaÃ§Ã£o de conhecimento" no `AGENTS.md`).

## Report-back (formato de retorno ao agente principal)
Devolva conciso e estruturado â€” o principal recompÃµe o contexto sÃ³ a partir disto:
- **Status:** ok Â· bloqueado Â· precisa de decisÃ£o
- **Arquivos alterados:** <lista>
- **Gate:** `<comando rodado>` â†’ passou Â· falhou (`<motivo>`)
- **SPEC_DEVIATION:** nenhum Â· `<descriÃ§Ã£o + por quÃª>`
- **PendÃªncias/issues:** <o que ficou aberto>



