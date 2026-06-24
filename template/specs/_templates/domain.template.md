---
name: domain
description: Modelo DDD da feature. Puxe ao modelar agregados e linguagem.
alwaysApply: false
---

# Domain Model (DDD) â€” <nome da feature>

> Responde: qual a **linguagem** e o **modelo** do negÃ³cio.
> DDD tÃ¡tico dentro do bounded context. Termos aqui devem aparecer iguais no cÃ³digo.

## Bounded Context
<Nome do contexto. Qual subdomÃ­nio: **core** (vantagem competitiva) /
**supporting** (necessÃ¡rio, nÃ£o diferencia) / **generic** (compra-se pronto)?>

## Linguagem ubÃ­qua
> Mesmo vocabulÃ¡rio entre negÃ³cio, spec e cÃ³digo. Promova ao `docs/glossary.md` global.

| Termo        | DefiniÃ§Ã£o                                   | NÃƒO confundir com |
|--------------|---------------------------------------------|-------------------|
| <Termo>      | <significado preciso no domÃ­nio>            | <termo parecido>  |

## Agregados, entidades e value objects
- **Agregado `<Nome>`** (raiz: `<Entidade>`)
  - Entidades: <â€¦>
  - Value objects: <â€¦>
  - **Invariantes** (regras sempre verdadeiras): <â€¦>
  - Fronteira de consistÃªncia: <o que muda junto numa transaÃ§Ã£o>

## Eventos de domÃ­nio
| Evento (passado)     | Disparado quando            | Quem reage          |
|----------------------|-----------------------------|---------------------|
| `<Algo>Aconteceu`    | <condiÃ§Ã£o>                  | <contexto/handler>  |

## RelaÃ§Ãµes com outros contextos
<Como este contexto fala com os outros: Customer/Supplier, Conformist,
Anti-Corruption Layer, Shared Kernel? Atualize `docs/architecture/context-map.md`.>



