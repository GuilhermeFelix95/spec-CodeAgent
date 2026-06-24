#!/usr/bin/env node
// Hook SessionStart â€” injeta o contexto base SDD (docs alwaysApply: true) no inÃ­cio da sessÃ£o.
// O stdout deste script Ã© adicionado ao contexto do agent.
// Roda a partir da raiz do projeto; lÃª sÃ³ o que existe (no kit cru, sÃ³ o STATE).

import { readFileSync, existsSync } from "node:fs";

// Docs "alwaysApply: true" â€” o contexto base de toda sessÃ£o.
const BASE = [
  "AGENTS.md",
  "AGENTS.md",
  "docs/STATE.md",
  "docs/product/vision.md",
  "docs/product/roadmap.md",
];

let out = "# Contexto base SDD (carregado no SessionStart)\n";
out += "> Estes sÃ£o os docs `alwaysApply: true`. Os demais sÃ£o sob demanda â€” puxe pelo `description`.\n";

let any = false;
for (const f of BASE) {
  if (existsSync(f)) {
    out += `\n===== ${f} =====\n${readFileSync(f, "utf8").trim()}\n`;
    any = true;
  }
}

// Dica sobre a spec ativa (o STATE aponta qual Ã©; o agente a lÃª sob demanda).
out += "\n> Spec da feature ativa: veja \"Em andamento\" no STATE e leia `specs/NNNN-*/spec.md`.\n";

if (any) process.stdout.write(out);



