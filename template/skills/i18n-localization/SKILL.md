---
name: i18n-localization
description: Use to handle language, timezone, currency, regional formatting, and localized content.
---

# Skill: i18n & Localization

Use when a product must work across languages, regions, or locale-specific rules.

## When to use

- Multiple languages or markets.
- Dates, timezones, money, or region-specific formats.
- User-facing copy that may be translated.
- Locale-sensitive validation or display rules.

## Checklist

- Separate static text from translatable content.
- Handle timezone, date, time, and currency deliberately.
- Check pluralization and gender where relevant.
- Avoid hardcoded user-facing strings in core flows.
- Test with both short and long translations.

## Guardrails

- Do not assume one locale is representative.
- Do not mix formatting rules across regions.
- Do not bury localization in ad hoc code paths.

