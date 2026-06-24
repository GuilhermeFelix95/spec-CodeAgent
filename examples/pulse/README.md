---
name: pulse-example
description: Golden example â€” produto fictÃ­cio levado pela esteira ponta a ponta (prova do fluxo).
alwaysApply: false
---

# Exemplo golden â€” Pulse

Produto fictÃ­cio (widget de feedback in-app) construÃ­do **com a prÃ³pria esteira** para provar o
fluxo ponta a ponta: **discovery** (vision/features) â†’ **spec** (critÃ©rios de aceite) â†’ **tasks**
â†’ **implementaÃ§Ã£o** â†’ **testes** â†’ **eval**.

Rode da raiz do repositÃ³rio:

```bash
node template/scripts/audit-esteira.mjs examples/pulse        # conformidade estrutural
node template/scripts/eval-spec-fidelity.mjs examples/pulse   # fidelidade specâ†’cÃ³digo
node --test examples/pulse/src/                               # os testes passam
```

O **eval** mostra os 3 AC **cobertos por task e por teste (3/3)** e os testes passam de verdade â€”
o loop fechado, nÃ£o sÃ³ artefatos soltos.



