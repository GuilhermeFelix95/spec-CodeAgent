---
name: camada-agentica
description: Use to define rules, agents, skills, hooks, and workflows that make the kit work for a specific stack or team process.
---

# Skill: Agent Layer

Use when the project needs a tailored agent layer. Propose only what is justified by the stack,
tools, process, or domain, and generate only what was approved.

## What to review

- Stack and quality gates in `AGENTS.md` and ADRs.
- Team tools and integrations in `docs/engineering/integrations.md`.
- Process and operating model in the product and engineering docs.
- Domain language in `docs/glossary.md` and `docs/architecture/context-map.md`.

## What to propose

- Rules: stack-specific guidance and guarded permissions.
- Agents: focused subagents for review, modeling, testing, or release support.
- Skills: reusable workflows for the project's recurring tasks.
- Hooks and workflows: only when they reduce friction or enforce a real gate.

## Rules

- Every proposal must cite the input that justifies it.
- Unapproved items become roadmap candidates.
- Do not add platform-specific assumptions unless the project actually uses them.


