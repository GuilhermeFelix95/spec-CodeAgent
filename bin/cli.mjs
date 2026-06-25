#!/usr/bin/env node
import { cpSync, existsSync, mkdirSync, readdirSync, statSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createInterface } from "node:readline/promises";
import { stdin, stdout } from "node:process";
import { ADAPTERS, ALL_AGENTS, isValidAgent, emitFor } from "./adapters.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const TEMPLATE_DIR = resolve(__dirname, "..", "template");
const VERSION = JSON.parse(readFileSync(resolve(__dirname, "..", "package.json"), "utf8")).version;
const MANIFEST = ".spec-driven/manifest.json";

const args = process.argv.slice(2);
const flags = args.filter((a) => a.startsWith("-"));
const positional = args.filter((a) => !a.startsWith("-"));
const cmd = positional[0] === "update" ? "update" : "init";
const targetArg = (cmd === "update" ? positional[1] : positional[0]) || ".";
const targetDir = resolve(process.cwd(), targetArg);
const force = flags.includes("--force");
const yes = flags.includes("--yes") || flags.includes("-y");
const all = flags.includes("--all");
const agentFlag = flags.find((f) => f.startsWith("--agent="));

const c = {
  bold: (s) => `\x1b[1m${s}\x1b[0m`,
  green: (s) => `\x1b[32m${s}\x1b[0m`,
  yellow: (s) => `\x1b[33m${s}\x1b[0m`,
  cyan: (s) => `\x1b[36m${s}\x1b[0m`,
  dim: (s) => `\x1b[2m${s}\x1b[0m`,
};

function listFiles(dir, base = dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) out.push(...listFiles(full, base));
    else out.push(relative(base, full));
  }
  return out;
}

function readSkills() {
  const base = join(TEMPLATE_DIR, "skills");
  if (!existsSync(base)) return [];
  return readdirSync(base)
    .filter((name) => existsSync(join(base, name, "SKILL.md")))
    .map((name) => ({ name, raw: readFileSync(join(base, name, "SKILL.md"), "utf8") }));
}

function extraEmissions(agents) {
  const baseMd = readFileSync(join(TEMPLATE_DIR, "AGENTS.md"), "utf8");
  const skills = readSkills();
  const out = [];
  for (const id of agents) out.push(...emitFor(ADAPTERS[id], baseMd, skills));
  return out;
}

function isBaseLayout(rel) {
  const r = rel.replace(/\\/g, "/");
  return r === "AGENTS.md" || r.startsWith("skills/");
}

function isManaged(rel) {
  const r = rel.replace(/\\/g, "/");
  return (
    r === "AGENTS.md" ||
    r.startsWith("skills/") ||
    r.startsWith(".github/workflows/") ||
    r.startsWith("scripts/") ||
    r.includes("/_templates/")
  );
}

const sameFile = (templateRel, dest) =>
  existsSync(dest) && readFileSync(join(TEMPLATE_DIR, templateRel), "utf8") === readFileSync(dest, "utf8");
const sameContent = (content, dest) => existsSync(dest) && readFileSync(dest, "utf8") === content;

const confirm = async (q) => {
  if (yes) return true;
  const rl = createInterface({ input: stdin, output: stdout });
  const ans = (await rl.question(`  ${q} ${c.dim("(s/N) ")}`)).trim().toLowerCase();
  rl.close();
  return ["s", "sim", "y", "yes"].includes(ans);
};

const copyTemplate = (rel) => {
  const dest = join(targetDir, rel);
  mkdirSync(dirname(dest), { recursive: true });
  cpSync(join(TEMPLATE_DIR, rel), dest);
};
const writeOut = (rel, content) => {
  const dest = join(targetDir, rel);
  mkdirSync(dirname(dest), { recursive: true });
  writeFileSync(dest, content, "utf8");
};

const readManifest = () => {
  const f = join(targetDir, MANIFEST);
  if (existsSync(f)) {
    try { return JSON.parse(readFileSync(f, "utf8")); } catch { }
  }
  if (existsSync(join(targetDir, ".agent"))) return { version: "—", agents: ["codex"] };
  return null;
};
const writeManifest = (agents) =>
  writeOut(MANIFEST, JSON.stringify({ version: VERSION, agents }, null, 2) + "\n");

function agentsFromFlags() {
  if (all) return ALL_AGENTS.map((a) => a.id);
  if (agentFlag) {
    const ids = agentFlag.slice("--agent=".length).split(",").map((s) => s.trim()).filter(Boolean);
    const unknown = ids.filter((id) => !isValidAgent(id));
    if (unknown.length) console.log(c.yellow(`  Cliente(s) desconhecido(s) ignorado(s): ${unknown.join(", ")}`));
    return [...new Set(ids.filter(isValidAgent))];
  }
  return null;
}

async function resolveAgentsInit() {
  const flagged = agentsFromFlags();
  if (flagged) {
    if (!flagged.length) {
      console.log(c.yellow("\n  Nenhum cliente válido informado. Use --agent=codex,cursor (ou --all).\n"));
      process.exit(1);
    }
    return flagged;
  }
  if (yes) {
    console.log(c.yellow("\n  Modo não-interativo: informe os clientes com --agent=<ids> ou --all.\n"));
    process.exit(1);
  }
  return pickAgents();
}

async function pickAgents() {
  console.log(c.bold("  Clientes de IA a gerar") + c.dim("  (AGENTS.md é a base das views dos demais)\n"));
  ALL_AGENTS.forEach((a, i) => console.log(`    ${c.cyan(String(i + 1))}. ${a.label}`));
  console.log(c.dim(`\n  Digite os números separados por vírgula (ex.: 1,3) ou ${c.cyan("all")} p/ todos.`));
  const rl = createInterface({ input: stdin, output: stdout });
  try {
    for (;;) {
      const ans = (await rl.question("  > ")).trim().toLowerCase();
      if (ans === "all" || ans === "todos") return ALL_AGENTS.map((a) => a.id);
      const picked = new Set();
      for (const tok of ans.split(/[\s,]+/).filter(Boolean)) {
        const n = Number(tok);
        if (Number.isInteger(n) && n >= 1 && n <= ALL_AGENTS.length) picked.add(ALL_AGENTS[n - 1].id);
        else if (isValidAgent(tok)) picked.add(tok);
      }
      if (picked.size) return [...picked];
      console.log(c.yellow("  Escolha ao menos um cliente (ex.: 1 p/ Codex)."));
    }
  } finally {
    rl.close();
  }
}

async function init() {
  console.log(c.bold(`\n  CodeAgent`) + c.dim(`  v${VERSION}\n`));
  console.log(`  Destino: ${c.cyan(targetDir)}\n`);

  const agents = await resolveAgentsInit();
  const labels = agents.map((id) => ADAPTERS[id].label).join(", ");

  const templateFiles = listFiles(TEMPLATE_DIR).filter(isBaseLayout);
  const emissions = extraEmissions(agents);
  const totalFiles = templateFiles.length + emissions.length;
  const collisions =
    templateFiles.filter((f) => existsSync(join(targetDir, f))).length +
    emissions.filter((e) => existsSync(join(targetDir, e.rel))).length;
  if (collisions && !force) {
    console.log(c.yellow(`  ${collisions} arquivo(s) já existem — serão MANTIDOS (use --force).`));
    console.log(c.dim(`  Dica: para só atualizar a esteira, use ${c.cyan("update")}.\n`));
  }
  console.log(c.dim(`  Clientes: ${labels}\n`));
  if (!(await confirm(`Gerar ${totalFiles} arquivos em ${c.cyan(relative(process.cwd(), targetDir) || ".")}?`))) {
    return console.log(c.dim("\n  Cancelado.\n"));
  }

  mkdirSync(targetDir, { recursive: true });
  let written = 0, skipped = 0;
  for (const f of templateFiles) {
    if (existsSync(join(targetDir, f)) && !force) { skipped++; continue; }
    copyTemplate(f); written++;
  }
  for (const e of emissions) {
    if (existsSync(join(targetDir, e.rel)) && !force) { skipped++; continue; }
    writeOut(e.rel, e.content); written++;
  }
  writeManifest(agents);

  console.log(c.green(`\n  ✓ ${written} arquivos criados`) + (skipped ? c.dim(`  (${skipped} mantidos)`) : "") + "\n");
  console.log(c.dim(`  Views geradas: ${agents.map((id) => ADAPTERS[id].instructions.to).join(" · ")}\n`));
  console.log(c.bold("  Próximos passos:"));
  console.log(`    1. ${c.dim("git init")} ${c.dim("(se ainda não for um repo)")}`);
  console.log(`    2. No seu agente: ${c.cyan("/integracoes")} → ${c.cyan("/kickoff")} → ${c.cyan("/nova-feature")}`);
  console.log(c.dim("\n  Leia o README.md gerado para a esteira completa.\n"));
}

async function update() {
  const manifest = readManifest();
  if (!manifest) {
    console.log(c.yellow("\n  Não parece um projeto da esteira (sem manifest e sem .agent). Rode o init primeiro.\n"));
    process.exit(1);
  }

  const requested = agentsFromFlags() ?? [];
  const agents = [...new Set([...manifest.agents, ...requested])];

  console.log(c.bold("\n  spec-driven update") + c.dim(`  ${manifest.version || "—"} → v${VERSION}\n`));
  console.log(`  Alvo: ${c.cyan(targetDir)}`);
  console.log(c.dim(`  Clientes: ${agents.map((id) => ADAPTERS[id].label).join(", ")}\n`));

  const managedTemplate = listFiles(TEMPLATE_DIR).filter(isManaged).filter((f) => isBaseLayout(f));
  const managedExtra = extraEmissions(agents);

  const tplNew = managedTemplate.filter((f) => !existsSync(join(targetDir, f)));
  const tplChanged = managedTemplate.filter((f) => existsSync(join(targetDir, f)) && !sameFile(f, join(targetDir, f)));
  const extNew = managedExtra.filter((e) => !existsSync(join(targetDir, e.rel)));
  const extChanged = managedExtra.filter((e) => existsSync(join(targetDir, e.rel)) && !sameContent(e.content, join(targetDir, e.rel)));

  const news = [...tplNew.map((f) => f), ...extNew.map((e) => e.rel)];
  const changes = [...tplChanged.map((f) => f), ...extChanged.map((e) => e.rel)];
  if (!news.length && !changes.length) {
    writeManifest(agents);
    return console.log(c.green("  ✓ Esteira já está atualizada — nada a fazer.\n"));
  }
  console.log(c.bold("  Mudanças na maquinaria da esteira (seus docs/specs NÃO são tocados):"));
  for (const f of news) console.log(c.green(`    + ${f}`));
  for (const f of changes) console.log(c.yellow(`    ~ ${f}`));
  console.log("");
  if (!(await confirm(`Aplicar ${news.length + changes.length} atualização(ões)?`))) {
    return console.log(c.dim("\n  Cancelado.\n"));
  }
  for (const f of [...tplNew, ...tplChanged]) copyTemplate(f);
  for (const e of [...extNew, ...extChanged]) writeOut(e.rel, e.content);
  writeManifest(agents);
  console.log(c.green(`\n  ✓ Esteira atualizada para v${VERSION} (${news.length} novos, ${changes.length} atualizados).\n`));
  console.log(c.dim("  Rode /auditar e os testes para confirmar que tudo segue conforme.\n"));
}

(async () => {
  if (!existsSync(TEMPLATE_DIR)) {
    console.error(c.yellow("Template não encontrado. Pacote corrompido?"));
    process.exit(1);
  }
  await (cmd === "update" ? update() : init());
})().catch((e) => { console.error(e); process.exit(1); });


