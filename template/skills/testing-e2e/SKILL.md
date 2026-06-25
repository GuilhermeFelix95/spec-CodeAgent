---
name: testing-e2e
description: Use to validate critical user journeys, smoke tests, and end-to-end flows.
---

# Skill: Testing E2E

Use when you need to verify the system from the user's perspective or through integrated flows.

## When to use

- Critical user journeys.
- Smoke coverage for releases.
- Integration across frontend, backend, and external services.
- Regression checks for high-risk flows.

## Checklist

- Choose a small set of high-value journeys.
- Prefer stable, deterministic test data.
- Separate smoke from regression coverage.
- Reduce flakiness and timing dependence.
- Keep assertions aligned to user outcomes.

## Guardrails

- Do not use E2E for every assertion.
- Do not build tests around brittle selectors or unstable timing.
- Do not let E2E duplicate lower-level coverage.

