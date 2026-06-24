---
name: context-map
description: Bounded contexts e relaÃ§Ãµes. Puxe ao modelar ou cruzar contextos.
alwaysApply: false
---

# Context Map

> VisÃ£o DDD estratÃ©gica: os bounded contexts do sistema e como se relacionam.
> Atualize quando uma feature cria/move fronteiras. Combine com diagramas C4 se Ãºtil.

## Bounded Contexts
| Contexto   | SubdomÃ­nio (core/supporting/generic) | Responsabilidade        | Dono |
|------------|--------------------------------------|-------------------------|------|
| <Contexto> | core                                 | <o que ele decide>      | <time>|

## RelaÃ§Ãµes entre contextos
> PadrÃµes de integraÃ§Ã£o DDD: Customer/Supplier, Conformist, Anti-Corruption Layer (ACL),
> Shared Kernel, Open Host Service, Published Language.

```
[Contexto A] â”€â”€(ACL)â”€â”€â–º [Contexto B]
     â”‚
     â””â”€â”€(Customer/Supplier)â”€â”€â–º [Contexto C]
```

| Upstream   | Downstream | PadrÃ£o              | Por quÃª |
|------------|------------|---------------------|---------|
| <A>        | <B>        | Anti-Corruption Layer | <protege o modelo de B> |

## Diagramas
Os diagramas de arquitetura de alto nÃ­vel (contexto C4, containers, mapa de contextos) ficam em
[`diagrams.md`](./diagrams.md) â€” gere/atualize com a skill `/diagramar`.


