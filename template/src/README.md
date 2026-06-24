---
name: src
description: Regra de camadas DDD. Puxe ao estruturar ou implementar cÃ³digo.
alwaysApply: false
---

# src/ â€” Estrutura em camadas (DDD tÃ¡tico)

AgnÃ³stico de linguagem. Crie subpastas/mÃ³dulos equivalentes na sua stack, mas
**preserve a regra de dependÃªncia**: as setas apontam sÃ³ para dentro.

```
interfaces â”€â”€â–º application â”€â”€â–º domain â—„â”€â”€ infrastructure
```

| Camada            | Responsabilidade                                   | Pode depender de         |
|-------------------|----------------------------------------------------|--------------------------|
| `domain/`         | Entidades, value objects, eventos, regras/invariantes | **nada** (sem framework/IO) |
| `application/`    | Casos de uso, orquestraÃ§Ã£o, portas (interfaces)    | `domain/`                |
| `infrastructure/` | Repos, adapters, integraÃ§Ãµes (implementa as portas)| `domain/`, `application/`|
| `interfaces/`     | Borda: API, CLI, UI, controllers                   | `application/`           |

## Por que essa regra
- O domÃ­nio Ã© a parte mais valiosa e mais estÃ¡vel â€” nÃ£o pode depender de detalhes
  volÃ¡teis (banco, HTTP, SDKs). Detalhes dependem do domÃ­nio, nunca o contrÃ¡rio.
- Permite testar regras de negÃ³cio sem subir infraestrutura.
- Trocar banco/framework vira mudanÃ§a sÃ³ em `infrastructure/`.

> InversÃ£o de dependÃªncia: a porta (interface) Ã© declarada em `application/` ou `domain/`;
> a implementaÃ§Ã£o concreta vive em `infrastructure/`.




