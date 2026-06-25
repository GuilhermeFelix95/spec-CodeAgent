---
name: data-modeling
description: Use to model entities, relationships, cardinality, normalization, and persistence trade-offs.
---

# Skill: Data Modeling

Use when a change affects the shape of data or how it is stored, queried, and evolved.

## When to use

- New entities or relationships.
- Schema redesign or denormalization.
- Query patterns that depend on data shape.
- Historical data, auditability, or retention concerns.

## Checklist

- Define entities, attributes, and relationships.
- Separate identity, state, and history.
- Check cardinality, nullability, and integrity.
- Choose normalization or denormalization intentionally.
- Prefer read patterns that match the model.

## Guardrails

- Do not model for the current query only if it creates long-term friction.
- Do not add fields without a durable reason.
- Do not hide ownership or lifecycle in ambiguous tables.

