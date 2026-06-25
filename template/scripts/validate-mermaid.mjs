#!/usr/bin/env node
// Validador estrutural de blocos Mermaid em arquivos .md.
// Zero-dep (nÃ£o renderiza): pega os erros que mais quebram o render e que o agente mais comete â€”
//   â€¢ bloco vazio                              (fatal)
//   â€¢ tipo de diagrama ausente/desconhecido    (fatal)
//   â€¢ aspas duplas desbalanceadas              (fatal)
//   â€¢ (), [] ou {} desbalanceados              (aviso â€” shapes assimÃ©tricos `>...]` dÃ£o falso-positivo)
// Uso: node scripts/validate-mermaid.mjs [dir]   (default: ".")
// Sai com cÃ³digo 1 se houver erro fatal. Serve de gate na CI e no /diagramar.

import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, resolve, extname, relative } from "node:path";

const ROOT = resolve(process.argv[2] || ".");
// Mesmas pastas que o audit ignora: derivadas/sistema, nÃ£o a fonte canÃ´nica.
const IGNORE_DIRS = new Set([
  "node_modules", ".git", ".spec-driven",
  ".agents", ".cursor", ".gemini", ".windsurf",
]);

// Tipos de diagrama reconhecidos pelo Mermaid (primeira palavra do bloco).
const TYPES = new Set([
  "flowchart", "graph", "sequenceDiagram", "classDiagram", "classDiagram-v2",
  "stateDiagram", "stateDiagram-v2", "erDiagram", "journey", "gantt", "pie",
  "mindmap", "timeline", "gitGraph", "quadrantChart", "requirementDiagram",
  "C4Context", "C4Container", "C4Component", "C4Dynamic", "C4Deployment",
  "sankey-beta", "xychart-beta", "block-beta", "packet-beta", "architecture-beta",
  "kanban", "radar", "zenuml",
]);

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    if (IGNORE_DIRS.has(name) || name.startsWith(".tmp")) continue;
    const full = join(dir, name);
    if (statSync(full).isDirectory()) out.push(...walk(full));
    else if (extname(full) === ".md") out.push(full);
  }
  return out;
}

// Extrai cada bloco ```mermaid â€¦ ``` com a linha (1-based) onde a cerca abre.
function mermaidBlocks(text) {
  const lines = text.split(/\r?\n/);
  const blocks = [];
  let cur = null;
  for (let i = 0; i < lines.length; i++) {
    if (cur === null) {
      if (/^\s*```\s*mermaid\s*$/i.test(lines[i])) cur = { start: i + 1, body: [] };
    } else if (/^\s*```\s*$/.test(lines[i])) {
      blocks.push(cur); cur = null;
    } else {
      cur.body.push(lines[i]);
    }
  }
  return blocks;
}

// Tira comentÃ¡rios/diretivas (%% atÃ© o fim da linha) â€” tambÃ©m derruba `%%{init:â€¦}%%`.
const stripComments = (body) =>
  body.map((l) => { const i = l.indexOf("%%"); return i === -1 ? l : l.slice(0, i); }).join("\n");

const errors = [];
const warns = [];

for (const f of walk(ROOT)) {
  const rel = relative(ROOT, f) || f;
  let blocks;
  try { blocks = mermaidBlocks(readFileSync(f, "utf8")); } catch { continue; }

  blocks.forEach((b, n) => {
    const where = `${rel} (bloco mermaid #${n + 1}, linha ${b.start})`;

    // 1) Tipo de diagrama: 1Âª linha significativa (pula vazias, comentÃ¡rios e frontmatter ---â€¦---).
    let i = 0;
    while (i < b.body.length && b.body[i].trim() === "") i++;
    if (i < b.body.length && b.body[i].trim() === "---") {           // frontmatter YAML interno
      i++;
      while (i < b.body.length && b.body[i].trim() !== "---") i++;
      i++;
    }
    while (i < b.body.length && (b.body[i].trim() === "" || b.body[i].trim().startsWith("%%"))) i++;
    const first = i < b.body.length ? b.body[i].trim() : "";
    if (!first) { errors.push(`${where}: bloco mermaid vazio`); return; }
    const kw = (first.match(/^([A-Za-z][\w-]*)/) || [])[1] || "";
    if (!TYPES.has(kw)) errors.push(`${where}: tipo de diagrama ausente/desconhecido ("${first.slice(0, 30)}")`);

    // 2) Aspas duplas balanceadas (fatal).
    const stripped = stripComments(b.body);
    const quotes = (stripped.match(/"/g) || []).length;
    if (quotes % 2 !== 0) errors.push(`${where}: aspas duplas desbalanceadas (${quotes})`);

    // 3) Delimitadores (aviso) â€” ignora o que estÃ¡ entre aspas.
    let outside = "", inQ = false;
    for (const ch of stripped) {
      if (ch === '"') inQ = !inQ;
      else if (!inQ) outside += ch;
    }
    for (const [op, cl, label] of [["(", ")", "()"], ["[", "]", "[]"], ["{", "}", "{}"]]) {
      const o = outside.split(op).length - 1;
      const c = outside.split(cl).length - 1;
      if (o !== c) warns.push(`${where}: ${label} possivelmente desbalanceado (${o} aberto / ${c} fechado)`);
    }
  });
}

if (warns.length) {
  console.log(`\nâš  Avisos Mermaid (${warns.length}) â€” confira (shapes assimÃ©tricos \`>â€¦]\` podem ser falso-positivo):`);
  for (const w of warns) console.log(`  â€¢ ${w}`);
}
if (errors.length) {
  console.error(`\nâœ— ValidaÃ§Ã£o Mermaid: ${errors.length} erro(s)\n`);
  for (const e of errors) console.error(`  â€¢ ${e}`);
  console.error("");
  process.exit(1);
}
console.log(`âœ“ ValidaÃ§Ã£o Mermaid: blocos OK (tipo, aspas, delimitadores).`);



