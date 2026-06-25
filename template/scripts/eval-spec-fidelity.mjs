#!/usr/bin/env node
// Eval de fidelidade specâ†’implementaÃ§Ã£o.
// Para cada specs/NNNN-*/: extrai os AC da spec, checa cobertura por task (tasks.md) e
// referÃªncia em cÃ³digo/teste (token AC-N), e conta SPEC_DEVIATION abertos.
// Falha (exit 1) se algum AC nÃ£o Ã© coberto por NENHUMA task (rastreabilidade quebrada).
// ReferÃªncia em teste Ã© AVISO atÃ© a feature ser implementada.
// Uso: node scripts/eval-spec-fidelity.mjs [dir]

import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, resolve, extname } from "node:path";

const ROOT = resolve(process.argv[2] || ".");
const SKIP = new Set(["node_modules", ".git", ".agent", "specs", "docs", "scripts"]);
const CODE_EXT = new Set([".js",".mjs",".cjs",".ts",".tsx",".jsx",".py",".go",".java",".rb",".php",".cs",".rs",".kt",".swift",".sql",".feature",".test"]);

function walkCode(dir) {
  const out = [];
  for (const n of readdirSync(dir)) {
    if (SKIP.has(n) || n.startsWith(".tmp")) continue;
    const f = join(dir, n);
    if (statSync(f).isDirectory()) out.push(...walkCode(f));
    else if (CODE_EXT.has(extname(f))) out.push(f);
  }
  return out;
}

const acTokens = (s) => new Set(s.match(/AC-\d+/g) || []);

const specsDir = join(ROOT, "specs");
if (!existsSync(specsDir)) { console.log("Sem specs/ â€” nada a avaliar."); process.exit(0); }

let codeBlob = "";
try { for (const f of walkCode(ROOT)) codeBlob += "\n" + readFileSync(f, "utf8"); } catch {}
const codeACs = acTokens(codeBlob);
const deviations = (codeBlob.match(/SPEC_DEVIATION/g) || []).length;

let hardFail = 0;
const rows = [];
for (const name of readdirSync(specsDir)) {
  if (!/^\d{4}-/.test(name)) continue;
  const dir = join(specsDir, name);
  if (!existsSync(join(dir, "spec.md"))) continue;
  const acs = [...acTokens(readFileSync(join(dir, "spec.md"), "utf8"))].sort();
  if (!acs.length) continue;
  const taskACs = existsSync(join(dir, "tasks.md")) ? acTokens(readFileSync(join(dir, "tasks.md"), "utf8")) : new Set();
  const uncovered = acs.filter((ac) => !taskACs.has(ac));
  const noTest = acs.filter((ac) => !codeACs.has(ac));
  hardFail += uncovered.length;
  rows.push({ name, acs, byTask: acs.length - uncovered.length, byTest: acs.length - noTest.length, uncovered, noTest });
}

console.log("\nEval de fidelidade specâ†’implementaÃ§Ã£o\n");
for (const r of rows) {
  console.log(`  ${r.name}`);
  console.log(`    AC: ${r.acs.length} Â· por task: ${r.byTask}/${r.acs.length} Â· em cÃ³digo/teste: ${r.byTest}/${r.acs.length}`);
  if (r.uncovered.length) console.log(`    âœ— AC sem task (rastreabilidade): ${r.uncovered.join(", ")}`);
  if (r.noTest.length) console.log(`    âš  AC sem referÃªncia em teste: ${r.noTest.join(", ")}`);
}
console.log(`\n  SPEC_DEVIATION abertos no cÃ³digo: ${deviations}`);

if (hardFail) {
  console.error(`\nâœ— ${hardFail} AC sem cobertura de task â€” rastreabilidade quebrada.\n`);
  process.exit(1);
}
console.log(`\nâœ“ Rastreabilidade specâ†’task OK (referÃªncia em teste Ã© aviso atÃ© implementar).\n`);




