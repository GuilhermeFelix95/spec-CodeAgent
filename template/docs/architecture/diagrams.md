---
name: diagrams
description: Diagramas de arquitetura de alto nÃ­vel (Mermaid). Puxe ao desenhar ou rever a arquitetura. Gerado por /diagramar.
alwaysApply: false
---

# Diagramas de arquitetura

> Alto nÃ­vel (C4 L1â€“L2 + mapa de bounded contexts). Gerado/atualizado por `/diagramar`.
> Renderiza no GitHub e no agent. Mantenha em sincronia com `context-map.md` e os `design.md`.
> RÃ³tulos na linguagem ubÃ­qua do `glossary.md`.

## 1. Contexto do sistema (C4 L1)
> O sistema no centro, com personas e sistemas externos. Sem detalhe interno.

```mermaid
flowchart LR
  user([Persona]) --> sys[Sistema]
  sys --> ext[Sistema externo]
```

## 2. Containers (C4 L2)
> As peÃ§as que rodam (UI, serviÃ§os, dados, filas) e como conversam.

```mermaid
flowchart LR
  UI[App / UI] --> API[API / ServiÃ§o]
  API --> DB[(Banco)]
  API --> Q[[Fila]]
  API --> EXT[Sistema externo]
```

## 3. Mapa de bounded contexts (DDD)
> Os contextos do sistema e o padrÃ£o de relaÃ§Ã£o entre eles.

```mermaid
flowchart TB
  A[Contexto A - core] -->|ACL| B[Contexto B]
  A -->|Customer/Supplier| C[Contexto C]
```

<!-- (opcional) 4. Fluxo-chave: uma jornada crÃ­tica em sequenceDiagram. -->


