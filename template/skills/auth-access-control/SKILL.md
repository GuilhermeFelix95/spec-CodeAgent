---
name: auth-access-control
description: Use to design login, sessions, roles, permissions, authorization, and protected resources.
---

# Skill: Auth & Access Control

Use when a task touches identity, sessions, authorization, or access to sensitive resources.

## When to use

- Login or sign-up flows.
- Session handling or token lifecycle.
- Role-based or policy-based access control.
- Protected endpoints, pages, or actions.

## Checklist

- Separate authentication from authorization.
- Define who can do what, and why.
- Apply least privilege.
- Consider expiration, revocation, and escalation paths.
- Verify sensitive routes and resource boundaries.

## Guardrails

- Do not blur frontend hiding with real authorization.
- Do not add privileged actions without explicit checks.
- Do not leak security assumptions into unrelated layers.

