---
name: metrics
description: MÃ©tricas de entrega â€” Lead Time, Throughput, maturidade de Continuous Delivery/Deployment e qualidade de cÃ³digo (cobertura, anÃ¡lise estÃ¡tica). Puxe ao revisar o fluxo ou planejar. Atualizado por /metricas.
alwaysApply: false
---

# MÃ©tricas de entrega

> SaÃºde do fluxo: **Lead Time**, **Throughput** e **Continuous Delivery/Deployment**.
> Atualizado por `/metricas`. Use para **achar gargalo**, nÃ£o para ranquear pessoas.

**PerÃ­odo:** <ciclo / datas> Â· **Atualizado em:** <YYYY-MM-DD>

## Lead Time â€” tempo atÃ© produÃ§Ã£o
> Do inÃ­cio (spec / issue / 1Âº commit) ao deploy em prod. Reporte **mediana** e **p85**.

| Item                | InÃ­cio       | Em prod      | Lead time |
|---------------------|--------------|--------------|-----------|
| <feature / issue>   | <data>       | <data>       | <Xd Yh>   |

- **Mediana:** <â€¦> Â· **p85:** <â€¦> Â· **TendÃªncia:** <â†‘ / â†’ / â†“>

## Throughput â€” itens concluÃ­dos no ciclo
> Quantos itens chegaram a "pronto"/prod no perÃ­odo.

| Tipo       | ConcluÃ­dos |
|------------|------------|
| HistÃ³rias  | <n>        |
| Bugs       | <n>        |
| Tarefas    | <n>        |
| **Total**  | **<n>**    |

- **TendÃªncia vs ciclo anterior:** <â†‘ / â†’ / â†“>

## Continuous Delivery / Deployment
| PrÃ¡tica                                    | Estado atual         | Gap para avanÃ§ar |
|--------------------------------------------|----------------------|------------------|
| Continuous Delivery (deployÃ¡vel sempre)    | sim / parcial / nÃ£o  | <â€¦>              |
| Continuous Deployment (deploy automÃ¡tico)  | sim / parcial / nÃ£o  | <â€¦>              |

- **Deployment Frequency:** <nÂº de deploys no perÃ­odo>.
- PrÃ³ximo passo de automaÃ§Ã£o: `/setup-ci`.

## Qualidade de cÃ³digo
> EvidÃªncia rastreÃ¡vel do **resultado**: cobertura e anÃ¡lise estÃ¡tica. TendÃªncia, nÃ£o nÃºmero isolado.
> Fonte: artefatos da CI (ver `/setup-ci`). Bloqueante barra o merge (ver `engineering/TESTING.md`).

### Cobertura
| Escopo            | Atual | MÃ­nimo | TendÃªncia   |
|-------------------|-------|--------|-------------|
| Global            | <X%>  | <Y%>   | <â†‘ / â†’ / â†“> |
| <mÃ³dulo / camada> | <X%>  | â€”      | <â†‘ / â†’ / â†“> |

### AnÃ¡lise estÃ¡tica
| Categoria                 | Findings | Bloqueantes | TendÃªncia   |
|---------------------------|----------|-------------|-------------|
| Type-check                | <n>      | <n>         | <â†‘ / â†’ / â†“> |
| Complexidade / smells     | <n>      | <n>         | <â†‘ / â†’ / â†“> |
| SeguranÃ§a (SAST)          | <n>      | <n>         | <â†‘ / â†’ / â†“> |
| DuplicaÃ§Ã£o                | <n>      | â€”           | <â†‘ / â†’ / â†“> |



