---
name: spec
description: Contrato da feature (critÃ©rios de aceite). Base enquanto a feature estÃ¡ ativa.
alwaysApply: true
---

# Spec â€” <nome da feature>

> **Fonte da verdade.** Status: rascunho | em review | aprovado | implementado
> Os critÃ©rios de aceite sÃ£o (a) o contrato com o negÃ³cio, (b) o orÃ¡culo de teste,
> (c) o prompt para o agente de IA implementar. Escreva-os para serem executÃ¡veis.

## Resumo
<Uma frase: o que o sistema passarÃ¡ a fazer.>

## CritÃ©rios de aceite
> Formato Given/When/Then. Cada critÃ©rio deve ser testÃ¡vel e nÃ£o-ambÃ­guo.
> **Cada `AC-N` Ã© um ID rastreÃ¡vel:** ele reaparece em `tasks.md` (coluna "Cobre AC"), no teste
> de aceite que o valida e na mensagem de commit. NÃ£o renumere ACs jÃ¡ implementados.

### AC-1: <tÃ­tulo do cenÃ¡rio>
- **Dado** <estado/prÃ©-condiÃ§Ã£o>
- **Quando** <aÃ§Ã£o/evento>
- **EntÃ£o** <resultado observÃ¡vel e verificÃ¡vel>

### AC-2: <tÃ­tulo>
- **Dado** â€¦
- **Quando** â€¦
- **EntÃ£o** â€¦

## Matriz de decisÃ£o (opcional)
> Use **quando a regra combina vÃ¡rios fatores** (flags, estados, papÃ©is, modos). Uma tabela-verdade
> Ã© mais densa, menos ambÃ­gua e mais barata em tokens que a mesma regra em prosa â€” e **cada linha
> vira um caso de teste**. Os fatores sÃ£o colunas; a Ãºltima coluna Ã© o resultado observÃ¡vel.
> Ligue cada linha ao `AC-N` que ela detalha (a coluna "AC" mantÃ©m a rastreabilidade).
> Nem tudo cabe numa matriz: fluxo temporal e sequÃªncia ficam melhor em Given/When/Then acima.

| Fator A | Fator B | â€¦ | Resultado esperado | AC |
|---------|---------|---|--------------------|------|
| <valor> | <valor> | â€¦ | <aÃ§Ã£o observÃ¡vel>  | AC-1 |
| <valor> | <valor> | â€¦ | <aÃ§Ã£o observÃ¡vel>  | AC-2 |

> Cubra **todas as combinaÃ§Ãµes relevantes** (inclusive as "impossÃ­veis" que devem ser rejeitadas).
> `â€”` = fator irrelevante naquela linha. Linha sem `AC` â†’ provavelmente falta um critÃ©rio de aceite.

## Casos de borda e erros
- <entrada invÃ¡lida â†’ comportamento esperado>
- <concorrÃªncia, timeout, falha de dependÃªncia â†’ comportamento esperado>

## Fora de escopo
> Vinculante. NÃ£o implemente nada aqui.
- <â€¦>

## Rastreabilidade
- Product: `./product.md`
- Design: `./design.md` (se tier arquitetural)
- DomÃ­nio: `./domain.md`
- ADRs relacionados: <links>



