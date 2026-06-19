# Spec — <nome da feature>

> **Fonte da verdade.** Status: rascunho | em review | aprovado | implementado
> Os critérios de aceite são (a) o contrato com o negócio, (b) o oráculo de teste,
> (c) o prompt para o agente de IA implementar. Escreva-os para serem executáveis.

## Resumo
<Uma frase: o que o sistema passará a fazer.>

## Critérios de aceite
> Formato Given/When/Then. Cada critério deve ser testável e não-ambíguo.
> **Cada `AC-N` é um ID rastreável:** ele reaparece em `tasks.md` (coluna "Cobre AC"), no teste
> de aceite que o valida e na mensagem de commit. Não renumere ACs já implementados.

### AC-1: <título do cenário>
- **Dado** <estado/pré-condição>
- **Quando** <ação/evento>
- **Então** <resultado observável e verificável>

### AC-2: <título>
- **Dado** …
- **Quando** …
- **Então** …

## Casos de borda e erros
- <entrada inválida → comportamento esperado>
- <concorrência, timeout, falha de dependência → comportamento esperado>

## Fora de escopo
> Vinculante. Não implemente nada aqui.
- <…>

## Rastreabilidade
- Product: `./product.md`
- Design: `./design.md` (se tier arquitetural)
- Domínio: `./domain.md`
- ADRs relacionados: <links>
