// Adapters de cliente de IA: materializam a base canÃ´nica `AGENTS.md`
// para formatos especÃ­ficos de cada ferramenta.

export function stripFrontmatter(text) {
  if (!text.startsWith("---")) return text;
  const end = text.indexOf("\n---", 3);
  if (end === -1) return text;
  return text.slice(end + 4).replace(/^\s*\n/, "");
}

export function parseSkill(text) {
  const out = { name: "", description: "", body: text };
  if (!text.startsWith("---")) return out;
  const end = text.indexOf("\n---", 3);
  if (end === -1) return out;
  const fm = text.slice(3, end);
  out.body = text.slice(end + 4).replace(/^\s*\n/, "");
  const n = fm.match(/^\s*name\s*:\s*(.+)$/m);
  const d = fm.match(/^\s*description\s*:\s*(.+)$/m);
  if (n) out.name = n[1].trim();
  if (d) out.description = d[1].trim();
  return out;
}

const skillAsIs = (raw) => raw;
const skillAsToml = (raw) => {
  const { name, description, body } = parseSkill(raw);
  const desc = (description || name).replace(/\\/g, "\\\\").replace(/"/g, '\\"');
  const prompt = body.replace(/\\/g, "\\\\").replace(/"""/g, '\\"\\"\\"');
  return `description = "${desc}"\nprompt = """\n${prompt}\n"""\n`;
};

export const ADAPTERS = {
  codex: {
    id: "codex",
    label: "OpenAI Codex",
    instructions: { to: "AGENTS.md", frontmatter: "strip" },
    skills: { dir: ".agents/skills", layout: "skill-dir" },
  },
  cursor: {
    id: "cursor",
    label: "Cursor",
    instructions: { to: ".cursor/rules/sdd.mdc", frontmatter: "keep" },
    skills: { dir: ".cursor/commands", layout: "flat", ext: "md", transform: skillAsIs },
  },
  copilot: {
    id: "copilot",
    label: "GitHub Copilot",
    instructions: { to: ".github/copilot-instructions.md", frontmatter: "strip" },
    skills: { dir: ".github/prompts", layout: "flat", ext: "prompt.md", transform: skillAsIs },
  },
  gemini: {
    id: "gemini",
    label: "Gemini CLI",
    instructions: { to: "GEMINI.md", frontmatter: "strip" },
    skills: { dir: ".gemini/commands", layout: "flat", ext: "toml", transform: skillAsToml },
  },
  windsurf: {
    id: "windsurf",
    label: "Windsurf",
    instructions: { to: ".windsurf/rules/sdd.md", frontmatter: "strip" },
    skills: { dir: ".windsurf/workflows", layout: "flat", ext: "md", transform: skillAsIs },
  },
};

export const ALL_AGENTS = Object.values(ADAPTERS);
export const EXTRA_AGENTS = ALL_AGENTS;
export const isValidAgent = (id) => Object.prototype.hasOwnProperty.call(ADAPTERS, id);

export function emitInstructions(adapter, baseMd) {
  let body = adapter.instructions.frontmatter === "strip" ? stripFrontmatter(baseMd) : baseMd;
  return body.split("skills/").join(`${adapter.skills.dir}/`);
}

export function emitFor(adapter, baseMd, skills) {
  const out = [{ rel: adapter.instructions.to, content: emitInstructions(adapter, baseMd) }];
  for (const { name, raw } of skills) {
    if (adapter.skills.layout === "skill-dir") {
      out.push({ rel: `${adapter.skills.dir}/${name}/SKILL.md`, content: raw });
    } else {
      out.push({ rel: `${adapter.skills.dir}/${name}.${adapter.skills.ext}`, content: adapter.skills.transform(raw) });
    }
  }
  return out;
}

