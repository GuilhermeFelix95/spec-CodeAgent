---
name: handoff
description: Use ao PAUSAR/encerrar uma sessÃ£o de trabalho (grava o estado atual em docs/STATE.md para retomar depois) ou ao RETOMAR (lÃª docs/STATE.md e a spec ativa e recompÃµe o contexto, propondo o prÃ³ximo passo). MantÃ©m a continuidade entre sessÃµes de humanos e agentes. Acione com /handoff.
---

# Skill: Handoff de sessÃ£o (pause / resume)

MantÃ©m a continuidade do projeto via `docs/STATE.md` â€” a memÃ³ria de trabalho volÃ¡til
(diferente do ADR, que Ã© decisÃ£o durÃ¡vel). Detecte a intenÃ§Ã£o pelo pedido ou pergunte.

## Modo PAUSE (pausar / encerrar)
Atualize `docs/STATE.md` com o estado real desta sessÃ£o:
1. **Em andamento / prÃ³ximo passo** â€” a feature/spec ativa e a **prÃ³xima aÃ§Ã£o concreta**
   (especÃ­fica: "implementar AC-3 no adapter X", nÃ£o "continuar a feature").
2. **DecisÃµes recentes** â€” o que foi decidido. Se for difÃ­cil de reverter, **crie/atualize o ADR**
   e linke; o STATE sÃ³ resume.
3. **Bloqueios** â€” o que trava e quem/como destrava.
4. **Ideias adiadas / todos** â€” o que ficou de fora de propÃ³sito, com o gatilho para reconsiderar.
5. Marque a data e o autor. Se houver `SPEC_DEVIATION` aberto, registre como bloqueio.
6. OfereÃ§a um commit (`docs: handoff â€” atualiza STATE`) se for repositÃ³rio git.

> Seja conciso e acionÃ¡vel. O STATE Ã© para alguÃ©m (ou um agente) retomar frio amanhÃ£.

## Modo RESUME (retomar)
1. Leia `docs/STATE.md` e a `spec.md`/`tasks.md` da feature ativa citada nele.
2. Se houver MCP conectado e relevante (Jira/Confluence), e a trava de conta estiver validada,
   atualize o contexto com o que mudou lÃ¡ fora.
3. **Resuma onde paramos** em poucas linhas: feature ativa, Ãºltimo passo, bloqueios abertos.
4. **Proponha o prÃ³ximo passo** (o "Em andamento / prÃ³ximo passo" do STATE) e confirme com o
   usuÃ¡rio antes de executar.

## Regras
- STATE.md Ã© **volÃ¡til**; ADR Ã© **durÃ¡vel**. NÃ£o escreva decisÃ£o estrutural sÃ³ no STATE.
- NÃ£o invente progresso: relate fielmente o que foi feito, o que falta e o que estÃ¡ bloqueado.



