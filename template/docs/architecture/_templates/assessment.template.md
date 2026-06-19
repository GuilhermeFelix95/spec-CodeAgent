# Assessment (as-is) — <nome do projeto>

> Mapa do estado atual de um projeto **já em andamento** (brownfield), gerado no kickoff.
> Objetivo: entender o que existe antes de propor mudanças. Fotografe, não julgue ainda.

## Visão geral
<O que o sistema faz hoje, está em produção, quantos usuários/serviços, idade do código.>

## Stack detectada
| Camada            | Tecnologia atual            | Observação |
|-------------------|-----------------------------|------------|
| Linguagem/runtime | <…>                         |            |
| Frameworks        | <…>                         |            |
| Persistência      | <…>                         |            |
| Infra/deploy      | <…>                         |            |

## Arquitetura atual
<Estilo real (monolito, serviços, big ball of mud?), camadas, acoplamentos perigosos,
pontos de entrada. Onde o domínio está misturado com infra?>

## Bounded contexts implícitos
> Inferidos do código/estrutura — raramente explícitos em brownfield.

| Contexto (inferido) | Onde vive no código | Core/Support/Generic | Fronteira clara? |
|---------------------|---------------------|----------------------|------------------|
| <…>                 | <pasta/módulo>      | <…>                  | não / parcial    |

## Maturidade nos 5 eixos
| Eixo            | Estado atual                  | Gap vs padrão SDD        | Risco |
|-----------------|-------------------------------|--------------------------|-------|
| Tech stack      | <…>                           | <…>                      | baixo/médio/alto |
| Arquitetura     | <…>                           | <…>                      |       |
| Infra           | <…>                           | <…>                      |       |
| Qualidade       | <testes? cobertura? CI?>      | <…>                      |       |
| Observabilidade | <logs/métricas/tracing/SLO?>  | <…>                      |       |

## Dívidas e riscos principais
1. <maior risco — o que pode causar incidente ou travar evolução>

## Decisões históricas a capturar como ADR
> Escolhas estruturais já tomadas, mas sem registro. Vire ADR retroativo (status: aceito).
- [ ] <ex.: "uso de X como banco" — por que foi escolhido, se ainda se sustenta>
