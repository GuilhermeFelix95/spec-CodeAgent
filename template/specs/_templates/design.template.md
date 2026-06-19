# Technical Design Doc — <nome da feature>

> **Tier:** arquitetural · **Status:** rascunho | em review | aprovado
> **Autor:** <nome> · **Revisores:** <nomes> · **Data:** <YYYY-MM-DD>
> Responde: **como** no nível de sistema. Obrigatório no tier arquitetural.

## Contexto
<Estado atual, restrições, por que agora. Link para o product.md.>

## Goals / Non-goals
**Goals**
- <objetivo técnico mensurável>

**Non-goals**
- <fora de escopo deste design>

## Design proposto
<A solução. Diagramas (C4/sequência), componentes, fluxo de dados, contratos de API,
modelo de dados. Mostre as fronteiras com os bounded contexts existentes.>

## Cobertura dos 5 eixos
> Toda decisão técnica desta feature passa por estes 5 eixos. Preencha o que ela toca;
> marque "sem impacto" no que não toca. Decisão estrutural em qualquer eixo → vira ADR.

### 1. Tech stack
<Linguagens, frameworks, libs ou serviços novos que esta feature introduz. Versões.
Diverge do stack padrão do projeto (ver ADRs/`CLAUDE.md`)? Justifique.>

### 2. Arquitetura base
<Como encaixa nas camadas (domain/application/infra/interfaces) e nos bounded contexts.
Cria nova fronteira de contexto? Novos agregados/portas? Padrão de integração usado.>

### 3. Infra
<Recursos novos (fila, cache, bucket, banco), impacto em ambientes, IaC, custo.
Plano de deploy, feature flag, migração de dados e **como reverter com segurança**.>

### 4. Qualidade
<Estratégia de teste (unidade/integração/aceite) e o que cobre os critérios de aceite.
Gates específicos: cobertura, contrato/contract test, performance, segurança.>

### 5. Observabilidade
<Métricas, logs estruturados, tracing e alertas que provam saúde em produção.
SLO/SLI afetados ou novos. Como saberemos, por telemetria, que a feature funciona?>

## Alternativas consideradas
> A seção mais valiosa do doc. Mostra que o trade-off foi pensado.

| Alternativa      | Prós | Contras | Por que (não) escolhida |
|------------------|------|---------|-------------------------|
| A (escolhida)    |      |         |                         |
| B                |      |         |                         |

## Trade-offs e consequências
<O que ganhamos e o que aceitamos perder. Dívida técnica assumida conscientemente.>

## Riscos e mitigação
| Risco | Probabilidade | Impacto | Mitigação |
|-------|---------------|---------|-----------|

## Questões em aberto
- [ ] <decisão pendente de quem responde>

> Decisões difíceis de reverter tomadas aqui → registre como ADR em `docs/architecture/adr/`.
