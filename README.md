# CodeAgent

Spec do OpenCode para desenvolvimento guiado por especificacao em qualquer agente de codificacao ou IDE.

Desenvolvimento guiado por especificação para qualquer agente de codificação ou IDE.

## O que entrega

- `AGENTS.md` como arquivo canônico de instruções do projeto
- `skills/` com fluxos reutilizáveis
- documentação de produto, arquitetura, engenharia e specs
- critérios de qualidade e continuidade entre sessões

## Regra central

`spec.md` é o contrato; o código implementa, os testes verificam e as ADRs registram decisões duráveis.

## Padrão operacional

O conjunto padrão de instruções prioriza:

1. Segurança
2. Corretude
3. Qualidade
4. Desempenho
5. Escalabilidade
6. Manutenibilidade
7. Simplicidade
8. Eficiência de contexto/tokens

## Agentes suportados

| Agente | Instruções | Skills |
|---|---|---|
| Codex | `AGENTS.md` | `skills/*/SKILL.md` |
| Cursor | `.cursor/rules/sdd.mdc` | `.cursor/commands/*.md` |
| GitHub Copilot | `.github/copilot-instructions.md` | `.github/prompts/*.prompt.md` |
| Gemini CLI | `GEMINI.md` | `.gemini/commands/*.toml` |
| Windsurf | `.windsurf/rules/sdd.md` | `.windsurf/workflows/*.md` |

## O que está incluso

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

## Skills incluídas

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

## Uso

```bash
npx spec-codeagent
npx spec-codeagent meu-projeto
npx spec-codeagent --agent=codex,cursor
```

## Padrão de sessão

Ao final de cada sessão, assine como:

`Ass | CodeAgent`
