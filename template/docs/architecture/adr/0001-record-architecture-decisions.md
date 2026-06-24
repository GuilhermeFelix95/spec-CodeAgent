---
name: ADR-0001
description: DecisÃ£o de usar ADRs. Puxe ao registrar ou rever decisÃµes.
alwaysApply: false
---

# ADR-0001: Registrar decisÃµes de arquitetura como ADRs

- **Status:** aceito
- **Data:** <YYYY-MM-DD>
- **Decisores:** <nomes>

## Contexto
DecisÃµes arquiteturais difÃ­ceis de reverter precisam de memÃ³ria durÃ¡vel. Sem isso,
o time reabre as mesmas discussÃµes e perde o *porquÃª* de escolhas antigas.

## DecisÃ£o
Usaremos **Architecture Decision Records** (formato Nygard) em `docs/architecture/adr/`.
- Um arquivo por decisÃ£o, numerado sequencialmente: `NNNN-titulo.md`.
- ADRs sÃ£o **imutÃ¡veis**. Para mudar uma decisÃ£o, crie um novo ADR com status
  `substitui ADR-XXXX` e marque o antigo como `substituÃ­do por ADR-YYYY`.
- Crie um ADR quando a decisÃ£o for difÃ­cil de reverter (escolha de banco,
  fronteira de contexto, protocolo de integraÃ§Ã£o, padrÃ£o transversal).

## ConsequÃªncias
- **+** Rastreabilidade do *porquÃª*; onboarding mais rÃ¡pido.
- **+** Reviews mais objetivos (a decisÃ£o tem um lar).
- **âˆ’** Pequeno overhead por decisÃ£o â€” aceitÃ¡vel e restrito ao tier arquitetural.

## Template para novos ADRs
Ver `docs/architecture/adr/_template.md`.



