---
name: domain
description: Modelo DDD da feature. Puxe ao modelar agregados e linguagem.
alwaysApply: false
---

# Domain Model (DDD) â€” Cota de uso por organizaÃ§Ã£o

## Bounded Context
**Usage Metering** â€” subdomÃ­nio **supporting** (necessÃ¡rio para proteger a plataforma,
mas nÃ£o Ã© o diferencial competitivo do produto).

## Linguagem ubÃ­qua
| Termo            | DefiniÃ§Ã£o                                                | NÃƒO confundir com |
|------------------|----------------------------------------------------------|-------------------|
| Quota            | Limite mÃ¡ximo de requisiÃ§Ãµes de uma org por janela        | Rate limit (borda/IP) |
| Window (janela)  | Intervalo de tempo fixo em que o uso Ã© contado e zerado   | SessÃ£o            |
| Usage            | Contagem de requisiÃ§Ãµes de uma org na janela atual        | Billing/cobranÃ§a  |
| Exceeded         | Estado em que `usage â‰¥ quota`                             | Erro de sistema   |

## Agregados, entidades e value objects
- **Agregado `OrganizationUsage`** (raiz: `OrganizationUsage`)
  - Identidade: `OrganizationId`
  - Value objects: `Quota`, `Window`, `UsageCount`
  - **Invariantes:**
    - `UsageCount â‰¥ 0`
    - `Quota > 0`
    - request Ã© aceita â‡” `UsageCount < Quota` no momento da checagem
  - Fronteira de consistÃªncia: a contagem de uma org muda atomicamente (INCR).

## Eventos de domÃ­nio
| Evento                 | Disparado quando        | Quem reage                          |
|------------------------|-------------------------|-------------------------------------|
| `QuotaExceeded`        | `usage` atinge `quota`  | observabilidade (mÃ©trica), notificaÃ§Ã£o opcional |
| `WindowReset`          | janela expira           | reinicia `UsageCount` para a org    |

## RelaÃ§Ãµes com outros contextos
- **Inference** (downstream): consome a decisÃ£o via `CheckQuota`. PadrÃ£o Customer/Supplier â€”
  Inference Ã© cliente, Usage Metering Ã© fornecedor do veredito.
- Nenhum acoplamento de modelo: a borda sÃ³ recebe um booleano + metadados de cota.


