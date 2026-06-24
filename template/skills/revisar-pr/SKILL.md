---
name: revisar-pr
description: Use para revisar um PR/MR no padrão SDD - verifica conformidade de processo: spec aprovada para a mudança, cada AC-N com teste verde, nenhum SPEC_DEVIATION aberto, ADRs para decisões irreversíveis, glossário/context-map atualizados e DoD cumprido. Posta o resultado como comentário no PR/MR via GitHub/GitLab MCP (se conectado). Complementa o /code-review do harness (que caça bugs). Acione com /revisar-pr.
---

# Skill: Revisar PR/MR (gate de conformidade SDD)

Checa o **processo**, nÃ£o os bugs. Para bugs/qualidade, use o `/code-review` do harness â€” esta
skill verifica se a mudanÃ§a respeita a esteira SDD antes do merge. As duas se complementam.

## Identifique o alvo
- O PR/MR (nÃºmero/branch) e a feature `specs/NNNN-<nome>/` correspondente.
- Se GitHub/GitLab MCP estiver conectado (conta validada â€” ver `/integracoes`), leia o diff e os
  metadados pelo MCP. **Se nÃ£o houver MCP do git host**, ofereÃ§a rodar `/integracoes` para conectar
  (habilita ler metadados e postar o veredito no PR/MR); se recusar, siga com o diff local
  (`git diff <base>...HEAD`).

## Checklist de conformidade SDD
- [ ] **Spec existe e estÃ¡ aprovada** para o escopo da mudanÃ§a (tier correto para o tamanho/risco).
- [ ] **Rastreabilidade:** todo `AC-N` tocado tem teste; o diff inclui os testes que cobrem os ACs.
- [ ] **Gates verdes:** os comandos de `docs/engineering/TESTING.md` passam (ou a CI estÃ¡ verde).
- [ ] **Sem `SPEC_DEVIATION`** aberto sem resoluÃ§Ã£o.
- [ ] **ADRs** registrados para decisÃµes difÃ­ceis de reverter introduzidas no PR.
- [ ] **Docs vivas:** glossÃ¡rio/context-map atualizados se a linguagem/fronteira mudou.
- [ ] **Escopo:** nada do "Fora de escopo" da spec foi implementado; mudanÃ§a coesa (um propÃ³sito).
- [ ] **STATE.md** atualizado, se o prÃ³ximo passo mudou.

## Veredito
- Resultado claro: **aprovar** ou **mudanÃ§as requeridas** (lista do que falta, com link p/ spec/AC).
- Se GitHub/GitLab MCP estiver conectado e validado, **ofereÃ§a postar** como comentÃ¡rio no PR/MR
  (outward-facing â€” confirme antes; reconfirme conta/workspace, ver `/integracoes`).
- Sugira rodar `/code-review` (harness) para a camada de bugs/qualidade.


