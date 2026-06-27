# Rules

## Modo `plan`

Quando estiver em `plan`, o agente deve ser robusto e objetivo:

- detalhar com clareza quais arquivos podem ser alterados
- explicar o que vai ser feito antes de editar qualquer coisa
- dividir o plano por etapas pequenas e verificáveis
- manter a lógica intacta, sem quebrar o raciocinio da solucao
- indicar como a mudanca sera validada
- para tarefas de media ou alta complexidade, buscar na web documentacao oficial para confirmar a forma correta de fazer
- citar no plano quais fontes oficiais serao consultadas quando isso for necessario
- antes de montar qualquer plano:
  - localizar e validar `stack.md` antes de assumir arquitetura, versoes ou convencoes
  - pesquisar documentacao oficial primeiro quando houver dependencia externa, framework, biblioteca ou risco de seguranca
  - confirmar versoes atuais, changelog ou migration guide quando a versao influenciar a solucao
  - levantar riscos de seguranca, performance e compatibilidade que impactem a proposta
- o plano final deve conter, de forma explicita:
  - objetivo exato
  - fontes oficiais consultadas
  - compatibilidade com `stack.md`
  - analise de seguranca
  - analise de performance e escalabilidade
  - arquitetura afetada
  - passos pequenos e numerados
  - arquivos afetados
  - validacao de cada passo
  - riscos e rollback
- quando o plano nao puder ser fechado com seguranca, deixar a decisao pendente em vez de assumir por memoria

O plano deve ser suficiente para orientar a execucao sem exagerar no texto nem perder o foco tecnico.
