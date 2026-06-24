---
name: integracoes
description: Use para levantar as ferramentas do time (Jira, Confluence, Notion, GitHub, cloud, observabilidade), conectar os MCPs com segurança, puxar insumos de leitura e definir os fluxos de escrita (repo -> ferramenta). Gera docs/engineering/integrations.md e, se aprovado, .mcp.json, e registra os MCPs validados no roteamento (bloco "Ferramentas conectadas (MCP)" do AGENTS.md + skills tools-aware). Rode antes do /kickoff para alimentar os artefatos com dado real (read-first), ou depois, quando o ferramental ficar conhecido. Re-executável. Acione com /integracoes.
---

# Skill: IntegraÃ§Ãµes e MCPs do time

Esta skill Ã© **ortogonal ao kickoff** â€” vocÃª nem sempre conhece o ferramental ao iniciar o
projeto. Rode quando souber. Ã‰ **idempotente**: re-executar atualiza `docs/engineering/integrations.md`.

**Quando rodar:**
- **Antes do `/kickoff` (ideal):** os MCPs de leitura alimentam `vision`/`assessment`/`context-map`
  com dado real (read-first).
- **Depois, a qualquer momento:** quando o ferramental ficou conhecido, ou para configurar a escrita.
  Se o kickoff jÃ¡ rodou e vocÃª puxar insumos novos aqui, **ofereÃ§a enriquecer** os artefatos
  existentes (context-map, glossary, assessment), citando a origem.

## PrincÃ­pios
- **Trava de conexÃ£o (MCP):** conexÃ£o jÃ¡ ativa **nÃ£o** autoriza uso. Sempre confirme **qual
  conta/workspace** ela aponta antes de ler â€” e reconfirme antes de **qualquer escrita**. Usar a
  conta errada (ex.: Notion pessoal no lugar do business) lÃª contexto errado e, na escrita,
  **vaza dado do projeto** para fora do contexto de trabalho.
- AÃ§Ãµes outward-facing (conectar, publicar, criar issue) â†’ **confirme antes**.
- *Tools-aware:* sÃ³ use um MCP disponÃ­vel na sessÃ£o (`mcp__<servidor>__*`); senÃ£o, documente e siga.

## Fase 1 â€” Levantar as ferramentas do time
Lotes de `AskUserQuestion`:
- **GestÃ£o e processo:** Jira / Trello / Linear / Azure DevOps (+ **Scrum / Kanban / Waterfall**).
- **DocumentaÃ§Ã£o:** Confluence / Notion / Evernote / Google Docs.
- **CÃ³digo e CI:** GitHub / GitLab / Bitbucket. **Cloud:** AWS / GCP / Azure.
- **Observabilidade e comunicaÃ§Ã£o:** Datadog / Sentry / Grafana; Slack / Teams.
- **Libs/APIs:** Context7 (lookup na verificaÃ§Ã£o de conhecimento do `AGENTS.md`).

## Fase 2 â€” ConexÃ£o de leitura (read-first) + trava de seguranÃ§a
Para as ferramentas de leitura (Confluence, Jira, Notion, GitHub, cloud), verifique se o MCP
jÃ¡ estÃ¡ disponÃ­vel na sessÃ£o (`mcp__<servidor>__*`):
- **JÃ¡ conectado â†’ âš ï¸ trava de seguranÃ§a, NÃƒO use direto.** Pode apontar para a conta errada.
  1. **Identifique a conta/workspace** (se o MCP expÃµe â€” ex.: buscar o workspace/usuÃ¡rio atual) e
     mostre ao usuÃ¡rio. Se nÃ£o der pra verificar, trate como **nÃ£o confirmado**.
  2. Pergunte (`AskUserQuestion`): **usar esta conexÃ£o** (workspace X) Â· **reconectar / trocar de
     conta** (pessoal â†’ business) Â· **usar outra ferramenta** Â· **pular esta fonte**.
  3. SÃ³ prossiga apÃ³s confirmaÃ§Ã£o explÃ­cita. Registre a conta/workspace em `integrations.md`.
- **NÃ£o conectado** â†’ pergunte se quer conectar. âš ï¸ Adicionar um MCP novo (`.mcp.json` /
  `mcp add`) normalmente **sÃ³ passa a valer apÃ³s reconectar a sessÃ£o**. OfereÃ§a:
  - **(a)** conectar agora â†’ reabrir a sessÃ£o â†’ rodar `/integracoes` (ou `/kickoff`) de novo; ou
  - **(b)** seguir sem conectar â†’ vira item do roadmap de adoÃ§Ã£o. Documente em `integrations.md`.

**Puxe os insumos disponÃ­veis** (sÃ³ dos MCPs jÃ¡ conectados e validados) e cite a origem (link/ID):
- Confluence / Notion: decisÃµes de negÃ³cio, visÃ£o, domÃ­nio, arquitetura.
- Jira / Linear: Ã©picos, roadmap atual, stories abertas.
- GitHub / cloud: contexto de cÃ³digo e infra (as-is).

## Fase 3 â€” Plano de escrita (write-side)
1. **Mapeie cada ferramenta ao MCP server** (tabela em `docs/engineering/_templates/integrations.template.md`).
   Verifique nome/disponibilidade na doc oficial â€” nÃ£o invente nomes de pacote.
2. **Defina os fluxos de escrita e quando disparam** â€” regra: **leia cedo, escreva no gate**:
   - Gate "aprovado" de vision/design/spec/roadmap â†’ publica no Confluence/Notion.
   - Quebra de `tasks.md` â†’ cria issues/subtasks no Jira/Linear.
   - ADR novo â†’ comenta no PR do GitHub/GitLab. Evento (aprovou/subiu) â†’ Slack/Teams.
   - Escrita Ã© sempre **repo â†’ ferramenta** (uma via); guarde a chave de volta (`jira:`, `confluence:`).
   - âš ï¸ **Antes da primeira escrita**, reconfirme a conta/workspace de destino (mesma trava).
3. **Kiting (confirme antes).** Se aprovado, gere `.mcp.json` na raiz com placeholders,
   **sem segredos** (tokens via env / `mcp add`). NÃ£o commite credenciais.

## Fase 4 â€” Gerar/atualizar `docs/engineering/integrations.md`
A partir de `docs/engineering/_templates/integrations.template.md`: ferramentas, MCPs, conta/workspace validada,
fluxos read/write e status. Se o kickoff jÃ¡ rodou e vocÃª puxou insumos novos, ofereÃ§a enriquecer
`context-map.md` / `glossary.md` / `assessment.md` com o que encontrou (citando origem).

## Fase 5 â€” Registrar no roteamento (rules + skills)
ConexÃ£o validada **nÃ£o basta**: o resto da esteira precisa **saber** que ela existe e quem a usa.
1. **AGENTS.md (rules):** atualize o bloco **"Ferramentas conectadas (MCP)"** com os servidores
   validados â€” `mcp__<servidor>__*`, conta/workspace e quais skills consomem cada um. Como o
   `AGENTS.md` Ã© `alwaysApply: true`, toda sessÃ£o passa a carregar esse roteamento.
2. **Skills (roteamento):** confirme que as skills tools-aware apontam para os MCPs certos â€”
   `/nova-feature` (Jira/Linear/Confluence/Notion), `/revisar-pr` (GitHub/GitLab), `/publicar-*`
   (Confluence/Notion). NÃ£o duplique lÃ³gica: as skills checam `mcp__<servidor>__*` em runtime.
3. **Camada agÃªntica:** se as novas ferramentas pedem artefatos novos (skill `/spec-to-jira`,
   subagente, hook de publicaÃ§Ã£o), **delegue Ã  `/camada-agentica`** (propÃµe com justificativa, gera
   sÃ³ o aprovado). Itens nÃ£o aprovados viram roadmap de adoÃ§Ã£o.

## Fechamento
- Resuma com links clicÃ¡veis e liste os MCPs que entraram no roteamento (`AGENTS.md`).
- PrÃ³ximo passo: se o `/kickoff` ainda nÃ£o rodou, sugira rodÃ¡-lo agora (com os MCPs de leitura jÃ¡
  conectados, os artefatos saem com dado real). SenÃ£o, aponte `/nova-feature`. Se registrou
  ferramentas novas, considere `/camada-agentica` para afinar a esteira a elas.



