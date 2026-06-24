---
name: deployment-ops
description: Use to plan rollout, rollback, environments, flags, cutover, and production changes.
---

# Skill: Deployment Ops

Use when a change affects release flow, environment promotion, or live operation.

## When to use

- Deploying new versions.
- Planning canary or gradual rollout.
- Managing cutover or migration windows.
- Defining rollback or recovery behavior.

## Checklist

- Define the rollout strategy.
- Plan rollback and data reversal where needed.
- Consider flags, canary, and progressive delivery.
- Validate external dependencies and operational windows.
- Align observability with the release.

## Guardrails

- Do not deploy without a recovery path.
- Do not mix release mechanics with business logic.
- Do not assume the same rollout works for every environment.
