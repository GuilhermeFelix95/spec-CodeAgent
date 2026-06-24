---
name: <nome-da-skill>
description: <quando usar, em terceira pessoa, com gatilhos claros. Ex.: "Use para abrir uma nova feature no padrÃ£o SDD, escolhendo o tier e copiando os templates." Acione com /<nome>.>
---

# Skill: <tÃ­tulo>

<Objetivo em 1-2 frases.>

## Processo
1. <passo â€” use AskUserQuestion para decisÃµes do usuÃ¡rio>
2. <passo>

## SaÃ­das
- <arquivos/efeitos que a skill produz>

## Regras
- Confirme antes de aÃ§Ãµes outward-facing (publicar, criar issue, configurar MCP).
- Siga a esteira do `README.md` e as convenÃ§Ãµes do `AGENTS.md`.
- Skills *tools-aware* (dependem de MCP) checam `mcp__<servidor>__*` e degradam com elegÃ¢ncia se nÃ£o houver.

<!-- Template em formato de skill (dialeto do alvo: name + description, sem alwaysApply).
     Copie para skills/<nome>/SKILL.md. Aqui em _templates/ nÃ£o Ã© carregado como skill. -->



