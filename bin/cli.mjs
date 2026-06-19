#!/usr/bin/env node
// @igoruehara/spec-driven — scaffolda a esteira Spec-Driven Development num projeto.
// Uso: npx @igoruehara/spec-driven [diretório-alvo] [--force] [--yes]
//   diretório-alvo  destino (padrão: diretório atual ".")
//   --force         sobrescreve arquivos existentes
//   --yes, -y       não pergunta (assume sim)

import { cpSync, existsSync, mkdirSync, readdirSync, statSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createInterface } from "node:readline/promises";
import { stdin, stdout } from "node:process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const TEMPLATE_DIR = resolve(__dirname, "..", "template");

const args = process.argv.slice(2);
const force = args.includes("--force");
const yes = args.includes("--yes") || args.includes("-y");
const targetArg = args.find((a) => !a.startsWith("-")) || ".";
const targetDir = resolve(process.cwd(), targetArg);

const c = {
  bold: (s) => `\x1b[1m${s}\x1b[0m`,
  green: (s) => `\x1b[32m${s}\x1b[0m`,
  yellow: (s) => `\x1b[33m${s}\x1b[0m`,
  cyan: (s) => `\x1b[36m${s}\x1b[0m`,
  dim: (s) => `\x1b[2m${s}\x1b[0m`,
};

// Lista recursivamente os caminhos relativos de arquivos do template.
function listFiles(dir, base = dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) out.push(...listFiles(full, base));
    else out.push(relative(base, full));
  }
  return out;
}

async function main() {
  if (!existsSync(TEMPLATE_DIR)) {
    console.error(c.yellow("Template não encontrado. Pacote corrompido?"));
    process.exit(1);
  }

  console.log(c.bold("\n  spec-driven") + c.dim("  — Spec-Driven Development scaffold\n"));
  console.log(`  Destino: ${c.cyan(targetDir)}\n`);

  const files = listFiles(TEMPLATE_DIR);
  const collisions = files.filter((f) => existsSync(join(targetDir, f)));

  if (collisions.length && !force) {
    console.log(c.yellow(`  ${collisions.length} arquivo(s) já existem no destino:`));
    for (const f of collisions.slice(0, 10)) console.log(c.dim(`    • ${f}`));
    if (collisions.length > 10) console.log(c.dim(`    … e mais ${collisions.length - 10}`));
    console.log(c.dim("\n  Existentes serão MANTIDOS (use --force para sobrescrever).\n"));
  }

  if (!yes) {
    const rl = createInterface({ input: stdin, output: stdout });
    const ans = (await rl.question(`  Scaffoldar ${files.length} arquivos em ${c.cyan(relative(process.cwd(), targetDir) || ".")}? ${c.dim("(s/N) ")}`)).trim().toLowerCase();
    rl.close();
    if (ans !== "s" && ans !== "sim" && ans !== "y" && ans !== "yes") {
      console.log(c.dim("\n  Cancelado.\n"));
      process.exit(0);
    }
  }

  mkdirSync(targetDir, { recursive: true });
  let written = 0;
  let skipped = 0;
  for (const f of files) {
    const dest = join(targetDir, f);
    if (existsSync(dest) && !force) {
      skipped++;
      continue;
    }
    mkdirSync(dirname(dest), { recursive: true });
    cpSync(join(TEMPLATE_DIR, f), dest);
    written++;
  }

  console.log(c.green(`\n  ✓ ${written} arquivos criados`) + (skipped ? c.dim(`  (${skipped} mantidos)`) : "") + "\n");
  console.log(c.bold("  Próximos passos:"));
  console.log(`    1. ${c.dim("cd " + (relative(process.cwd(), targetDir) || "."))}`);
  console.log(`    2. ${c.dim("git init")} ${c.dim("(se ainda não for um repo)")}`);
  console.log(`    3. No Claude Code, rode ${c.cyan("/integracoes")} (se já souber as ferramentas) e depois ${c.cyan("/kickoff")}`);
  console.log(c.dim("\n  Leia o README.md gerado para a esteira completa.\n"));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
