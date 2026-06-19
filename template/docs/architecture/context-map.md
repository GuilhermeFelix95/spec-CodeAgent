# Context Map

> Visão DDD estratégica: os bounded contexts do sistema e como se relacionam.
> Atualize quando uma feature cria/move fronteiras. Combine com diagramas C4 se útil.

## Bounded Contexts
| Contexto   | Subdomínio (core/supporting/generic) | Responsabilidade        | Dono |
|------------|--------------------------------------|-------------------------|------|
| <Contexto> | core                                 | <o que ele decide>      | <time>|

## Relações entre contextos
> Padrões de integração DDD: Customer/Supplier, Conformist, Anti-Corruption Layer (ACL),
> Shared Kernel, Open Host Service, Published Language.

```
[Contexto A] ──(ACL)──► [Contexto B]
     │
     └──(Customer/Supplier)──► [Contexto C]
```

| Upstream   | Downstream | Padrão              | Por quê |
|------------|------------|---------------------|---------|
| <A>        | <B>        | Anti-Corruption Layer | <protege o modelo de B> |

## Diagrama de contexto (C4 nível 1)
<Cole/linke o diagrama de contexto do sistema: atores externos + sistema + sistemas vizinhos.>
