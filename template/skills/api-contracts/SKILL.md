---
name: api-contracts
description: Use to define HTTP contracts, payloads, errors, versioning, and compatibility.
---

# Skill: API Contracts

Use when the boundary between systems must be explicit and stable.

## When to use

- Public or internal HTTP APIs.
- RPC or event payloads that other systems consume.
- Breaking-change risk or version negotiation.
- Contract-first implementation.

## Checklist

- Specify request, response, and error shapes.
- Mark required, optional, and default fields.
- Preserve compatibility for existing consumers.
- Add examples for success and failure paths.
- Treat versioning as a deliberate decision.

## Guardrails

- Do not change a contract casually.
- Do not expose implementation details in the payload.
- Do not leave error behavior ambiguous.

