---
name: product
description: PRD-lite da feature (por quÃª e para quem). Puxe ao abrir feature arquitetural.
alwaysApply: false
---

# Product â€” Cota de uso por organizaÃ§Ã£o

> **Tier:** arquitetural Â· **Status:** aprovado Â· **Dono:** Igor
> *(Exemplo didÃ¡tico preenchido. Substitua por features reais.)*

## Problema
Algumas organizaÃ§Ãµes consomem volume desproporcional da API de inferÃªncia, degradando
latÃªncia para todas as outras. Hoje nÃ£o hÃ¡ limite por organizaÃ§Ã£o â€” picos de uma conta
viram incidente de plataforma. EvidÃªncia: 3 incidentes P2 no Ãºltimo trimestre originados
por uma Ãºnica org.

## Para quem
Todas as orgs do plano pago (~120 contas). Afeta diretamente as ~8 contas de alto volume
e indiretamente todas que dividem a infraestrutura.

## Resultado esperado / mÃ©trica de sucesso
- MÃ©trica: p95 de latÃªncia da API durante picos de uma org.
- Baseline: atÃ© 4s sob pico â†’ Alvo: â‰¤ 1,2s (isolamento por cota).
- MÃ©trica secundÃ¡ria: zero incidentes P2 por "org barulhenta".

## Goals
- Limitar requisiÃ§Ãµes por org a uma cota configurÃ¡vel por janela de tempo.
- Resposta clara (429 + headers) quando a cota estoura.

## Non-goals
- Billing/cobranÃ§a por excedente (feature separada).
- Cotas por usuÃ¡rio individual dentro da org.
- Rate limiting por IP (camada de borda jÃ¡ cobre).

## Riscos / premissas
- Premissa: cota por org (nÃ£o por usuÃ¡rio) Ã© granularidade suficiente. Se falsa,
  o modelo de domÃ­nio muda.



