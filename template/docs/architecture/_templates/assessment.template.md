---
name: assessment
description: Retrato as-is (brownfield). Puxe ao mapear ou avaliar o codebase.
alwaysApply: false
---

# Assessment (as-is) â€” <nome do projeto>

> Mapa do estado atual de um projeto **jÃ¡ em andamento** (brownfield), gerado no kickoff.
> Objetivo: entender o que existe antes de propor mudanÃ§as. Fotografe, nÃ£o julgue ainda.

## VisÃ£o geral
<O que o sistema faz hoje, estÃ¡ em produÃ§Ã£o, quantos usuÃ¡rios/serviÃ§os, idade do cÃ³digo.>

## Stack detectada
| Camada            | Tecnologia atual            | ObservaÃ§Ã£o |
|-------------------|-----------------------------|------------|
| Linguagem/runtime | <â€¦>                         |            |
| Frameworks        | <â€¦>                         |            |
| PersistÃªncia      | <â€¦>                         |            |
| Infra/deploy      | <â€¦>                         |            |

## Arquitetura atual
<Estilo real (monolito, serviÃ§os, big ball of mud?), camadas, acoplamentos perigosos,
pontos de entrada. Onde o domÃ­nio estÃ¡ misturado com infra?>

## Estrutura de pastas
<Como o cÃ³digo se organiza (por camada? por feature? por tipo?), onde estÃ£o os pontos de
entrada, e o que destoa do esperado.>

## ConvenÃ§Ãµes de cÃ³digo
<PadrÃµes reais observados: nomenclatura, estilo, tratamento de erro, padrÃµes de teste.
O que Ã© convenÃ§Ã£o tÃ¡cita (nÃ£o escrita) e deveria ir para o `AGENTS.md`?>

## Bounded contexts implÃ­citos
> Inferidos do cÃ³digo/estrutura â€” raramente explÃ­citos em brownfield.

| Contexto (inferido) | Onde vive no cÃ³digo | Core/Support/Generic | Fronteira clara? |
|---------------------|---------------------|----------------------|------------------|
| <â€¦>                 | <pasta/mÃ³dulo>      | <â€¦>                  | nÃ£o / parcial    |

## Testes & CI
<Tipos de teste existentes, cobertura aproximada, o que a CI roda, comandos de gate.
Alimenta o `docs/engineering/TESTING.md`.>

## IntegraÃ§Ãµes
| IntegraÃ§Ã£o       | Tipo (API/lib/fila) | Como Ã© usada            | Risco/acoplamento |
|------------------|---------------------|-------------------------|-------------------|
| <ex.: gateway X> | REST                | <â€¦>                     | <â€¦>               |

## Maturidade nos 5 eixos
| Eixo            | Estado atual                  | Gap vs padrÃ£o SDD        | Risco |
|-----------------|-------------------------------|--------------------------|-------|
| Tech stack      | <â€¦>                           | <â€¦>                      | baixo/mÃ©dio/alto |
| Arquitetura     | <â€¦>                           | <â€¦>                      |       |
| Infra           | <â€¦>                           | <â€¦>                      |       |
| Qualidade       | <testes? cobertura? anÃ¡lise estÃ¡tica? CI?> | <â€¦>         |       |
| Observabilidade | <logs/mÃ©tricas/tracing/SLO?>  | <â€¦>                      |       |

## DÃ­vidas e riscos principais
1. <maior risco â€” o que pode causar incidente ou travar evoluÃ§Ã£o>

## DecisÃµes histÃ³ricas a capturar como ADR
> Escolhas estruturais jÃ¡ tomadas, mas sem registro. Vire ADR retroativo (status: aceito).
- [ ] <ex.: "uso de X como banco" â€” por que foi escolhido, se ainda se sustenta>



