---
name: clarificar
description: Use para uma SABATINA â€” entrevista implacÃ¡vel que transforma intenÃ§Ã£o difusa em entendimento compartilhado antes de construir. Caminha pela Ã¡rvore de decisÃ£o UMA pergunta por vez, resolvendo dependÃªncias entre escolhas, sempre com uma resposta recomendada; explora o codebase/docs em vez de perguntar quando a resposta jÃ¡ existe. Ideal no gate da spec (AC testÃ¡veis / Definition of Ready) e do design (decisÃ£o difÃ­cil de reverter). Produz um resumo de entendimento que alimenta product.md/design.md/spec.md. Chamada por /nova-feature, /kickoff, /roadmap e /validar, ou acione direto com /clarificar.
---

# Skill: Clarificar (sabatina de plano/spec)

Entrevista implacÃ¡vel para **afiar um plano, uma spec ou um design** antes de construir. O alvo Ã©
**entendimento compartilhado**: nenhuma ambiguidade que vire retrabalho ou `SPEC_DEVIATION` depois.
Inspirada na tÃ©cnica de *grilling* â€” adaptada ao vocabulÃ¡rio da esteira (AC testÃ¡veis, tier,
decisÃ£o difÃ­cil de reverter â†’ ADR, linguagem ubÃ­qua).

> **Quando usar isto e nÃ£o "lotes curtos":** o resto da esteira pergunta em **lotes** (`AskUserQuestion`)
> para escolhas **independentes**. A sabatina Ã© o oposto e o complemento: para uma **Ã¡rvore de decisÃ£o
> com dependÃªncias**, onde a resposta 3 sÃ³ faz sentido depois das respostas 1 e 2. Use quando a
> ambiguidade Ã© **profunda e ramificada**, nÃ£o quando sÃ£o opÃ§Ãµes ortogonais.

## PrincÃ­pios (o motor)
- **Uma pergunta por vez.** FaÃ§a a pergunta, **espere a resposta**, e sÃ³ entÃ£o a prÃ³xima. VÃ¡rias
  perguntas de uma vez confundem e impedem que cada resposta refine a seguinte.
- **Caminhe pela Ã¡rvore.** Cada resposta abre/fecha ramos. Resolva **dependÃªncias em ordem**: nÃ£o
  pergunte o "como" antes do "se", nem o detalhe antes da fronteira.
- **Sempre proponha uma resposta recomendada.** NÃ£o interrogue no vÃ¡cuo â€” para cada pergunta dÃª sua
  recomendaÃ§Ã£o com o porquÃª (em `AskUserQuestion`, a primeira opÃ§Ã£o leva "(Recomendado)").
- **Explore antes de perguntar.** Se a resposta estÃ¡ no **codebase, nos docs (`specs/`, `docs/`,
  ADRs, glossÃ¡rio) ou num MCP de referÃªncia conectado**, descubra vocÃª mesmo â€” sÃ³ pergunte o que
  exige decisÃ£o humana. (Ã‰ a *VerificaÃ§Ã£o de conhecimento* do `AGENTS.md`.) Nunca invente: incerteza
  explÃ­cita > chute confiante.
- **Cave atÃ© o testÃ¡vel.** Uma resposta vaga ("rÃ¡pido", "seguro", "vÃ¡rios") **nÃ£o fecha o ramo** â€”
  refine atÃ© virar critÃ©rio verificÃ¡vel (nÃºmero, caso concreto, Given/When/Then).

## Processo
1. **Enquadre o alvo.** Diga em 1-2 linhas o que estÃ¡ sendo sabatinado (esta feature / este design /
   esta prioridade) e o que serÃ¡ considerado "entendido o bastante para seguir".
2. **Levante os ramos abertos.** A partir do material existente, liste mentalmente as decisÃµes em
   aberto e as ambiguidades. Priorize as de **maior impacto / mais difÃ­ceis de reverter**.
3. **Sabatine, um ramo por vez.** Para cada ponto: explore primeiro; se restar decisÃ£o, pergunte
   **uma** coisa com a recomendaÃ§Ã£o; integre a resposta; deixe-a abrir os prÃ³ximos ramos. Repita.
4. **Pare quando a Ã¡rvore fechar** â€” sem ramos abertos que mudem o que serÃ¡ construÃ­do. NÃ£o estenda
   por esporte; quando o usuÃ¡rio e vocÃª concordam no escopo, encerre.

## SaÃ­da â€” o entendimento vira artefato
A sabatina **nÃ£o termina em chat**: consolide o resultado para alimentar a esteira.
- **Resumo de entendimento:** decisÃµes fechadas, nÃ£o-objetivos que surgiram, premissas e riscos.
- **Direcione ao destino certo** conforme o que foi clarificado:
  - virou **critÃ©rio de aceite** â†’ `spec.md` (Given/When/Then; regra multifatorial â†’ Matriz de decisÃ£o);
  - virou **decisÃ£o difÃ­cil de reverter** â†’ vira **ADR** (`docs/architecture/adr/`);
  - virou **termo de negÃ³cio** â†’ `docs/glossary.md` / `domain.md`;
  - ficou **em aberto de propÃ³sito** â†’ `docs/STATE.md` (com o gatilho para reconsiderar).
- Aponte o prÃ³ximo passo de quem te chamou (preencher o gate, retomar `/nova-feature`, etc.).


