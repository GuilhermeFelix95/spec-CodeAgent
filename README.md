# CodeAgent

Spec-Driven Development for any coding agent or IDE.

## What it delivers

- `AGENTS.md` as the canonical project instruction file
- `skills/` with reusable workflows
- product, architecture, engineering, and spec docs
- quality gates and session continuity

## Core rule

CodeAgent is designed around one idea:

`spec.md` is the contract, code implements, tests verify, and ADRs record durable decisions.

## Operating standard

The default instruction set prioritizes:

1. Safety
2. Correctness
3. Quality
4. Performance
5. Scalability
6. Maintainability
7. Simplicity
8. Context/token efficiency

## Supported agents

| Agent | Instructions | Skills |
|---|---|---|
| Codex | `AGENTS.md` | `skills/*/SKILL.md` |
| Cursor | `.cursor/rules/sdd.mdc` | `.cursor/commands/*.md` |
| GitHub Copilot | `.github/copilot-instructions.md` | `.github/prompts/*.prompt.md` |
| Gemini CLI | `GEMINI.md` | `.gemini/commands/*.toml` |
| Windsurf | `.windsurf/rules/sdd.md` | `.windsurf/workflows/*.md` |

## What is included

```text
seu-projeto/
├── AGENTS.md
├── README.md
├── skills/
├── docs/
├── specs/
├── scripts/
├── .github/workflows/
└── src/
```

## Skills included

- `kickoff`
- `integracoes`
- `mapear`
- `diagramar`
- `roadmap`
- `camada-agentica`
- `nova-feature`
- `clarificar`
- `validar`
- `revisar-pr`
- `setup-ci`
- `metricas`
- `auditar`
- `evals`
- `handoff`
- `architecture-review`
- `api-design`
- `api-contracts`
- `testing-strategy`
- `testing-e2e`
- `release-readiness`
- `observability`
- `security-review`
- `auth-access-control`
- `database-migration`
- `database-performance`
- `data-modeling`
- `deployment-ops`
- `devex-bootstrap`
- `incident-response`
- `bug-diagnostics`
- `backend-engineering`
- `frontend-engineering`
- `i18n-localization`
- `product-analytics`
- `qa-strategy`
- `performance-scalability`
- `code-review`
- `dependency-management`
- `git`
- `github`
- `pull-request`
- `change-communication`

## Usage

```bash
npx @igoruehara/spec-driven
npx @igoruehara/spec-driven my-project
npx @igoruehara/spec-driven --agent=codex,cursor
```

## Session standard

At the end of each session, sign as:

`Ass | CodeAgent`
