---
name: kickoff
description: Use ao iniciar ou retomar um projeto. Primeiro descobre o modo â€” greenfield (começando do zero) ou brownfield (já rodando) â€” e roteia. Greenfield conduz uma entrevista Lean Inception (visão, personas, MVP). Brownfield mapeia o estado atual (as-is), identifica gaps vs o padrão SDD e captura decisões históricas. Os dois caminhos passam pelo kickoff técnico nos 5 eixos (tech stack, arquitetura, infra, qualidade, observabilidade), propõem a camada agêntica do projeto (rules, subagents, skills, workflows/CI) e convergem num roadmap incremental, gerando a constituição do projeto. As integrações com ferramentas do time (Jira, Confluence, MCPs) são uma skill separada (/integracoes) - rode antes para insumos read-first, ou depois. Acione com /kickoff.
---

# Skill: Kickoff de projeto (Lean Inception + SDD)

VocÃª vai **entrevistar, mapear, propor e gerar um roadmap**. A primeira decisÃ£o Ã© o modo:
o trabalho para um projeto que estÃ¡ *comeÃ§ando* Ã© diferente do de um projeto que *jÃ¡ roda*.

## PrincÃ­pios de conduÃ§Ã£o
- **Pergunte em lotes curtos** com `AskUserQuestion` (mÃ¡x. 4 perguntas, 2-4 opÃ§Ãµes cada).
  OfereÃ§a sempre um default "(Recomendado)" como primeira opÃ§Ã£o; aceite "Other" livre.
  Quando um eixo abrir uma **decisÃ£o ramificada** (escolhas que dependem umas das outras â€” ex.:
  arquitetura â†’ bounded contexts â†’ infra), troque o lote por uma **sabatina**: rode **`/clarificar`**.
- **NÃ£o invente decisÃµes de arquitetura.** VocÃª propÃµe opÃ§Ãµes com trade-offs; quem decide Ã© o usuÃ¡rio.
- **NÃ£o levante nem proponha ferramentas aqui** â€” isso Ã© a skill `/integracoes`. O kickoff sÃ³ faz a
  **oferta neutra** (Fase 0.5) de conectar. Se a `/integracoes` jÃ¡ rodou, aproveite os insumos puxados;
  senÃ£o, siga sem e deixe `/integracoes` como item do roadmap.
- Confirme um resumo antes de gerar arquivos. Gere tudo de uma vez no fim.
- O objetivo final dos dois caminhos Ã© o mesmo: **a constituiÃ§Ã£o do projeto + um roadmap
  acionÃ¡vel para rodar com o time.**

## Fase 0 â€” Detectar o modo
1. Inspecione o diretÃ³rio: manifests (`package.json`, `pyproject.toml`, `go.mod`â€¦), `src/`
   com cÃ³digo real, histÃ³rico git, docs jÃ¡ preenchidos.
   - SÃ³ o kit / repo vazio â†’ provÃ¡vel **greenfield**.
   - CÃ³digo de produto existente â†’ provÃ¡vel **brownfield**.
2. Confirme com `AskUserQuestion`: **Greenfield** (comeÃ§ando) Â· **Brownfield** (jÃ¡ rodando) Â·
   **HÃ­brido** (base existe, mas vamos repensar). Roteie conforme a resposta.
3. Leia `README.md` e `AGENTS.md` para alinhar com a esteira SDD.

## Fase 0.5 â€” Oferta de integraÃ§Ã£o (neutra)
Conectar MCPs Ã© **ortogonal** ao kickoff e Ã© trabalho da skill `/integracoes`. Aqui vocÃª faz sÃ³
**uma oferta neutra** â€” **nÃ£o liste nem proponha ferramentas** (quem levanta o ferramental Ã© a
`/integracoes`; deixe o usuÃ¡rio dizer o que usa de fato lÃ¡).

Pergunte com `AskUserQuestion` (uma pergunta, **sem citar nomes de ferramenta**):
> *"Quer conectar suas ferramentas via MCP agora? Conectar antes deixa os artefatos com dado real
> (read-first)."* â€” opÃ§Ãµes: **Conectar agora (recomendado)** Â· **Seguir e conectar depois** Â· **JÃ¡ conectei**.

- **Conectar agora â†’** rode **`/integracoes`** e retome o kickoff com os insumos puxados (cite a origem nas fases).
- **Conectar depois â†’** siga sÃ³ com a entrevista; `/integracoes` vira item do roadmap de adoÃ§Ã£o (Fase 5).
- **JÃ¡ conectei â†’** **use os insumos puxados** (cite a origem) nas fases abaixo.

> A `/integracoes` Ã© **re-executÃ¡vel**. Mais adiante, se uma ferramenta passar a ajudar (puxar Ã©pico,
> ler PR), **reofereÃ§a-a** no ponto em que o valor aparece â€” nÃ£o precisa ser sÃ³ aqui.

---

## Fase 1A â€” [GREENFIELD] Descoberta (Lean Inception)
Conduza as atividades da inception em lotes de `AskUserQuestion` e **gere um artefato por pilar**
(nÃ£o enfie tudo num doc sÃ³ â€” cada pilar tem seu lar):

1. **VisÃ£o & escopo** â†’ `vision.md`: problema e para quem; categoria + diferencial; North Star;
   2-3 coisas que o produto explicitamente **NÃƒO Ã© / NÃƒO faz**.
2. **Stakeholders** â†’ `stakeholders.md`: quem influencia/Ã© impactado (interesse Ã— influÃªncia) e
   como engajar cada um.
3. **Jornadas** â†’ `journeys.md`: as 1-3 jornadas ponta a ponta â€” etapas, dores e oportunidades.
4. **Funcionalidades** â†’ `features.md`: brainstorm a partir das **jornadas**, classificadas por
   esforÃ§o/valor/confianÃ§a/UX e **sequenciadas em ondas** (Onda 1 = MVP).
5. **MVP** â†’ `mvp-canvas.md`: a Onda 1 + a hipÃ³tese principal e o critÃ©rio de sucesso.

â†’ SaÃ­das: `vision.md` Â· `stakeholders.md` Â· `journeys.md` Â· `features.md` Â· `mvp-canvas.md`.
A **Onda 1** de `features.md` alimenta o `roadmap.md` (Fase 5).

## Fase 1B â€” [BROWNFIELD] Mapear o estado atual (as-is)
Execute a skill **`/mapear`** (mesma lÃ³gica): leia o cÃ³digo, entreviste as lacunas, faÃ§a o gap
analysis dos 5 eixos e capture decisÃµes histÃ³ricas como ADR retroativo.

â†’ SaÃ­das: `docs/architecture/assessment.md` (as-is + gaps) e a lista de ADRs retroativos.
Esses gaps alimentam as Fases 2 e 5.

---

## Fase 2 â€” Kickoff tÃ©cnico (os 5 eixos)
Um lote de `AskUserQuestion` por eixo. Proponha defaults sensatos.
- **Greenfield:** sÃ£o decisÃµes *a tomar*.
- **Brownfield:** sÃ£o decisÃµes *jÃ¡ tomadas* (capture como ADR retroativo) + as que o time
  quer *mudar* (capture como ADR novo que substitui, mais um item no roadmap).

1. **Tech stack** â€” linguagem, framework/runtime, gerÃªncia de pacotes, versÃ£o alvo.
2. **Arquitetura base** â€” estilo (monolito modular / serviÃ§os / serverless), camadas DDD
   (default do kit), e os **bounded contexts** (do MVP no greenfield; validados no brownfield).
3. **Infra** â€” cloud, modelo de deploy, ambientes, CI/CD, IaC.
4. **Qualidade** â€” pirÃ¢mide de testes, cobertura mÃ­nima, lint/format, **anÃ¡lise estÃ¡tica** (type-check,
   complexidade, SAST/seguranÃ§a â€” o que Ã© bloqueante vs aviso), polÃ­tica de review, DoD.
5. **Observabilidade** â€” logs estruturados, mÃ©tricas, tracing, alertas, SLO/SLI iniciais.

## Fase 3 â€” ConfirmaÃ§Ã£o
Mostre um resumo em tabela (decisÃ£o â†’ escolha â†’ vira ADR? novo ou retroativo?). PeÃ§a OK.

## Fase 4 â€” GeraÃ§Ã£o dos documentos
Gere/atualize usando os templates do projeto:

| Arquivo | Modo | Template |
|---|---|---|
| `docs/product/vision.md` | greenfield | `docs/product/_templates/vision.template.md` |
| `docs/product/stakeholders.md` | greenfield | `docs/product/_templates/stakeholders.template.md` |
| `docs/product/journeys.md` | greenfield | `docs/product/_templates/journeys.template.md` |
| `docs/product/features.md` | greenfield | `docs/product/_templates/features.template.md` (classificadas + sequenciadas) |
| `docs/product/mvp-canvas.md` | greenfield | `docs/product/_templates/mvp-canvas.template.md` |
| `docs/architecture/assessment.md` | brownfield | `docs/architecture/_templates/assessment.template.md` |
| `docs/architecture/context-map.md` | ambos | existente (inicial no greenfield; reverse-engineered no brownfield) |
| `docs/architecture/overview.md` | ambos | existente â€” consolide os **5 eixos** + seguranÃ§a + operacional, com links para ADRs/context-map/diagrams/TESTING |
| `docs/glossary.md` | ambos | existente (semeie os termos centrais) |
| `AGENTS.md` | ambos | existente (preencha stack, comandos, quality gates, observabilidade) |
| `docs/architecture/adr/NNNN-*.md` | ambos | `docs/architecture/adr/_template.md` (um por decisÃ£o estrutural; retroativos no brownfield) |
| `docs/product/roadmap.md` | ambos | `docs/product/_templates/roadmap.template.md` |

> `docs/engineering/integrations.md` e `.mcp.json` sÃ£o gerados pela skill `/integracoes`, nÃ£o aqui.
> ApÃ³s o `context-map`, ofereÃ§a rodar **`/diagramar`** para os diagramas de arquitetura (Mermaid).

Regras:
- **ADRs:** numere apÃ³s o 0001. Greenfield: decisÃµes novas. Brownfield: retroativos (status
  aceito, registrando o porquÃª histÃ³rico) + novos para mudanÃ§as propostas. ImutÃ¡veis.
- **AGENTS.md:** preencha stack/comandos/camadas e adicione blocos "Quality gates" e
  "Observabilidade". NÃ£o remova as regras SDD existentes.
- **Roadmap:** quick wins de baixo risco primeiro. No brownfield, inclua a seÃ§Ã£o de **adoÃ§Ã£o
  incremental do SDD** (sem big-bang: comeÃ§ar pela prÃ³xima feature, backfill de ADRs depois).

## Fase 4.5 â€” Camada agÃªntica do projeto
Execute a skill **`/camada-agentica`** (mesma lÃ³gica): a partir de stack + ferramentas + processo
+ domÃ­nio, proponha rules, subagents, skills e workflows/CI afinados â€” **com justificativa** â€” e
gere sÃ³ o aprovado. Itens nÃ£o aprovados viram itens do roadmap (Fase 5). Ref.: `docs/engineering/agentic-layer.md`.

## Fase 5 â€” Roadmap e fechamento
- Execute a skill **`/roadmap`** (mesma lÃ³gica): construa `roadmap.md` em Now/Next/Later, com valor,
  esforÃ§o, dono e dependÃªncias, quick wins primeiro â€” para rodar e revisar **com o time**.
- Se for repositÃ³rio git, ofereÃ§a `git add -A && git commit -m "docs: kickoff do projeto"`.
- Resuma com links clicÃ¡veis e aponte o prÃ³ximo passo: criar a 1Âª feature em `specs/NNNN-<nome>/`
  escolhendo o tier (ver `README.md`).



