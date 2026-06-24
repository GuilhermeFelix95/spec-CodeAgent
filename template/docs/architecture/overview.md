---
name: architecture-overview
description: Arquitetura do sistema nos 5 eixos + seguranÃ§a e operacional. Puxe ao trabalhar em arquitetura, infra, qualidade, observabilidade ou seguranÃ§a.
alwaysApply: false
---

# Arquitetura do sistema

> VisÃ£o **consolidada** do sistema pelos 5 eixos (+ seguranÃ§a e operacional). Cada seÃ§Ã£o Ã© um
> **resumo curto + link** para o detalhe (ADRs, context-map, diagrams, TESTING). Gerado/atualizado
> no `/kickoff`. **Mantenha enxuto** â€” o detalhe vive nos docs linkados, aqui Ã© o mapa.

## 1. Tech stack
<Linguagens, frameworks, runtime, gerÃªncia de pacotes, versÃµes alvo.>
- DecisÃ£o: [ADR-XXXX](adr/XXXX-tech-stack.md)

## 2. Arquitetura base
<Estilo (monolito modular / serviÃ§os / serverless), camadas (DDD), principais bounded contexts.>
- Mapa de contextos: [context-map.md](context-map.md) Â· Diagramas: [diagrams.md](diagrams.md)
- DecisÃ£o: [ADR-XXXX](adr/XXXX-estilo-de-arquitetura.md)

## 3. Infra
<Cloud/provedor, ambientes (dev/stg/prod), modelo de deploy, IaC, custo.>
- DecisÃ£o: [ADR-XXXX](adr/XXXX-infra-e-deploy.md) Â· Operacional: ver seÃ§Ã£o 7.

## 4. Qualidade
<EstratÃ©gia de testes (pirÃ¢mide), cobertura mÃ­nima, lint/format, anÃ¡lise estÃ¡tica (type-check/complexidade/SAST), polÃ­tica de review.>
- Comandos e gates: [TESTING.md](../engineering/TESTING.md)

## 5. Observabilidade
<Logs estruturados, mÃ©tricas, tracing, alertas e SLO/SLI do sistema.>
- DecisÃ£o: [ADR-XXXX](adr/XXXX-observabilidade.md)

## 6. SeguranÃ§a
<AutenticaÃ§Ã£o e autorizaÃ§Ã£o, controles e polÃ­ticas, proteÃ§Ã£o de dados (PII/criptografia),
conformidade (LGPD/GDPR/â€¦), gestÃ£o de segredos. DecisÃµes difÃ­ceis de reverter â†’ ADR.>

## 7. Operacional
<Deploy e rollback, monitoramento e alertas (quem Ã© acionado), backup e recuperaÃ§Ã£o,
runbook de incidentes. Liga-se aos eixos Infra (3) e Observabilidade (5).>



