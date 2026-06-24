---
name: spec
description: Contrato da feature (critÃ©rios de aceite). Base enquanto a feature estÃ¡ ativa.
alwaysApply: true
---

# Spec â€” Cota de uso por organizaÃ§Ã£o

> **Fonte da verdade.** Status: aprovado.

## Resumo
Cada organizaÃ§Ã£o tem uma cota de requisiÃ§Ãµes por janela de tempo. Ao estourar, a API
responde 429 com headers de cota atÃ© a janela reiniciar.

## CritÃ©rios de aceite

### AC-1: requisiÃ§Ã£o dentro da cota Ã© aceita
- **Dado** uma org com cota de 1000/min e uso atual de 999
- **Quando** ela faz 1 requisiÃ§Ã£o
- **EntÃ£o** a requisiÃ§Ã£o Ã© encaminhada para inferÃªncia
- **E** a resposta inclui `X-Quota-Remaining: 0`

### AC-2: requisiÃ§Ã£o acima da cota Ã© recusada
- **Dado** uma org com cota de 1000/min e uso atual de 1000
- **Quando** ela faz 1 requisiÃ§Ã£o
- **EntÃ£o** a API responde `429 Too Many Requests`
- **E** inclui `Retry-After` com os segundos atÃ© o reset da janela
- **E** emite o evento `QuotaExceeded`

### AC-3: janela reinicia a contagem
- **Dado** uma org que estourou a cota na janela anterior
- **Quando** uma nova janela comeÃ§a
- **EntÃ£o** o uso volta a 0 e novas requisiÃ§Ãµes sÃ£o aceitas

### AC-4: indisponibilidade do contador faz fail-open
- **Dado** que o contador de uso (Redis) estÃ¡ indisponÃ­vel
- **Quando** uma org faz uma requisiÃ§Ã£o
- **EntÃ£o** a requisiÃ§Ã£o Ã© aceita (fail-open)
- **E** um alerta de degradaÃ§Ã£o Ã© emitido

## Matriz de decisÃ£o
> Como a checagem combina flag + modo + estado do contador, a tabela-verdade resolve a
> combinatÃ³ria sem prosa. Cada linha Ã© um caso de teste; AC-3 (reinÃ­cio da janela) Ã© temporal
> e fica nos critÃ©rios acima.

| `usage_quota_enabled` | Modo | Uso vs cota | Contador (Redis) | Resultado | AC |
|---|---|---|---|---|---|
| `false` | â€” | â€” | â€” | Aceita; checagem pulada | borda |
| `true` | shadow | estourou | ok | Aceita + emite mÃ©trica; **nÃ£o** bloqueia | borda |
| `true` | normal | dentro | ok | Aceita + `X-Quota-Remaining` | AC-1 |
| `true` | normal | estourou | ok | `429` + `Retry-After` + evento `QuotaExceeded` | AC-2 |
| `true` | normal | â€” | indisponÃ­vel | Aceita (fail-open) + alerta de degradaÃ§Ã£o | AC-4 |

## Casos de borda e erros
- Cota configurada como 0 ou negativa â†’ rejeitada na validaÃ§Ã£o do domÃ­nio (config invÃ¡lida).
- Demais combinaÃ§Ãµes de flag/modo/contador: ver a **matriz de decisÃ£o** acima.

## Fora de escopo
- CobranÃ§a por excedente.
- Cota por usuÃ¡rio individual.

## Rastreabilidade
- Product: `./product.md` Â· Design: `./design.md` Â· DomÃ­nio: `./domain.md`
- ADR a criar: ADR-0002 (janela fixa vs deslizante)


