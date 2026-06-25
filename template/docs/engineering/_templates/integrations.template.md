---
name: integrations
description: Ferramentas do time e MCPs. Puxe ao integrar Jira/Confluence/cloud.
alwaysApply: false
---

# IntegraÃ§Ãµes e MCPs â€” <nome do projeto>

> Ferramentas que o time jÃ¡ usa e os **MCP servers** propostos para conectÃ¡-las ao agent,
> ajudando a **rodar, documentar e integrar** sem sair do fluxo. Gerado no kickoff.

## Ferramentas do time
| Categoria          | Ferramenta            | Processo / observaÃ§Ã£o            |
|--------------------|-----------------------|----------------------------------|
| GestÃ£o de projeto  | <Jira/Trello/Linear>  | <Scrum / Kanban / Waterfall>     |
| DocumentaÃ§Ã£o       | <Confluence/Notion/Evernote> | <onde mora a doc viva>    |
| CÃ³digo & CI        | <GitHub/GitLab/Bitbucket> | <fluxo de PR/MR>             |
| Cloud              | <AWS/GCP/Azure>       | <regiÃµes, contas>                |
| Observabilidade    | <Datadog/Sentry/Grafana> | <onde os alertas chegam>      |
| ComunicaÃ§Ã£o        | <Slack/Teams>         | <canal de alertas/incidentes>    |

## MCPs propostos
> Verifique o nome/disponibilidade atual de cada servidor na doc oficial antes de configurar.
> **Conta/workspace** Ã© o destino validado da conexÃ£o â€” confirme que Ã© o do projeto (nÃ£o o pessoal).

| Ferramenta        | MCP server (proposto)        | Conta/workspace (validada) | O que habilita                       | Status   |
|-------------------|------------------------------|----------------------------|--------------------------------------|----------|
| Jira / Confluence | Atlassian (oficial)          | <workspace do projeto>     | ler/criar issues e pÃ¡ginas; sync     | proposto |
| Notion            | Notion (oficial)             | <business, nÃ£o pessoal>    | publicar vision/roadmap; buscar docs | proposto |
| GitHub            | GitHub (oficial)             | <org/repo>                 | PRs, issues, code review, releases   | proposto |
| GitLab            | GitLab (oficial/community)   | <grupo/projeto>            | MRs, issues, pipelines               | proposto |
| AWS               | AWS Labs MCP                 | <conta/perfil>             | consultar recursos, custos, docs     | proposto |
| GCP               | Google Cloud MCP / Toolbox   | <projeto>                  | recursos, dados                      | proposto |
| Azure             | Azure MCP (oficial)          | <subscription>             | recursos, deploy                     | proposto |
| Sentry / Datadog  | Sentry / Datadog MCP         | <org>                      | erros, mÃ©tricas, alertas no contexto | proposto |
| Slack             | Slack MCP                    | <workspace/canal>          | notificar status/alertas ao time     | proposto |
| Libs / APIs       | Context7 MCP                 | (pÃºblico)                  | lookup de libs na verificaÃ§Ã£o de conhecimento (`AGENTS.md`) | proposto |

## Como conectar (resumo)
- **Project-scoped:** `.mcp.json` na raiz do repo â€” compartilhÃ¡vel com o time. **Sem segredos.**
- **Segredos:** via variÃ¡vel de ambiente ou `mcp add`. **Nunca** commitar tokens.
- Servidores remotos/hosted (`type: http`) costumam usar OAuth; locais usam `command`+`args`.

## Fluxos que isso destrava
- Spec aprovada em `specs/NNNN/` â†’ abre/atualiza issue no Jira/Linear.
- `vision.md` / `roadmap.md` â†’ publica/atualiza no Notion/Confluence.
- ADR novo â†’ comenta no PR do GitHub/GitLab.
- Alerta de observabilidade â†’ resumo no Slack com link para a feature/spec.



