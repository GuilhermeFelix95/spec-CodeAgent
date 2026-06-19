# Como criar uma skill de projeto

Uma skill vive em `.claude/skills/<nome>/SKILL.md` e é acionada por `/<nome>`. Copie a
estrutura abaixo para esse caminho (este arquivo é só referência — não é carregado como skill).

```markdown
---
name: <nome-da-skill>
description: <quando usar, em terceira pessoa, com gatilhos claros. Ex.: "Use para abrir uma nova feature no padrão SDD, escolhendo o tier e copiando os templates." Acione com /<nome>.>
---

# Skill: <título>

<Objetivo em 1-2 frases.>

## Processo
1. <passo — use AskUserQuestion para decisões do usuário>
2. <passo>

## Saídas
- <arquivos/efeitos que a skill produz>

## Regras
- Confirme antes de ações outward-facing (publicar, criar issue, configurar MCP).
- Siga a esteira do `README.md` e as convenções do `CLAUDE.md`.
```

> Skills *tools-aware* (que dependem de um MCP, ex. `/spec-to-jira`) devem checar se o servidor
> está disponível na sessão (`mcp__<servidor>__*`) e degradar com elegância se não estiver.
