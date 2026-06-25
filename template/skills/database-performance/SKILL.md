---
name: database-performance
description: Use to optimize queries, indexes, latency, locks, and data access cost.
---

# Skill: Database Performance

Use when the bottleneck is the database, a query, or data access patterns.

## When to use

- Slow queries or excessive load on the database.
- Missing or ineffective indexes.
- Lock contention or transaction bottlenecks.
- N+1 access patterns or repeated reads.

## Checklist

- Measure before optimizing.
- Identify the slow query, missing index, or lock source.
- Review execution plans and cardinality.
- Remove repeated work and unnecessary round trips.
- Focus on high-impact, low-risk changes first.

## Guardrails

- Do not optimize without evidence.
- Do not trade correctness for speed.
- Do not add indexes blindly.

