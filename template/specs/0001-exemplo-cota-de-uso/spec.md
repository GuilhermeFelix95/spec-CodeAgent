# Spec — Cota de uso por organização

> **Fonte da verdade.** Status: aprovado.

## Resumo
Cada organização tem uma cota de requisições por janela de tempo. Ao estourar, a API
responde 429 com headers de cota até a janela reiniciar.

## Critérios de aceite

### AC-1: requisição dentro da cota é aceita
- **Dado** uma org com cota de 1000/min e uso atual de 999
- **Quando** ela faz 1 requisição
- **Então** a requisição é encaminhada para inferência
- **E** a resposta inclui `X-Quota-Remaining: 0`

### AC-2: requisição acima da cota é recusada
- **Dado** uma org com cota de 1000/min e uso atual de 1000
- **Quando** ela faz 1 requisição
- **Então** a API responde `429 Too Many Requests`
- **E** inclui `Retry-After` com os segundos até o reset da janela
- **E** emite o evento `QuotaExceeded`

### AC-3: janela reinicia a contagem
- **Dado** uma org que estourou a cota na janela anterior
- **Quando** uma nova janela começa
- **Então** o uso volta a 0 e novas requisições são aceitas

### AC-4: indisponibilidade do contador faz fail-open
- **Dado** que o contador de uso (Redis) está indisponível
- **Quando** uma org faz uma requisição
- **Então** a requisição é aceita (fail-open)
- **E** um alerta de degradação é emitido

## Casos de borda e erros
- Cota configurada como 0 ou negativa → rejeitada na validação do domínio (config inválida).
- Flag `usage_quota_enabled=false` para a org → checagem é pulada, sempre aceita.
- Modo shadow → conta o uso e emite métricas, mas nunca bloqueia.

## Fora de escopo
- Cobrança por excedente.
- Cota por usuário individual.

## Rastreabilidade
- Product: `./product.md` · Design: `./design.md` · Domínio: `./domain.md`
- ADR a criar: ADR-0002 (janela fixa vs deslizante)
