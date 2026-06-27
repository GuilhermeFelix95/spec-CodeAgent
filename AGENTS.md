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
- antes de montar o plano, validar `stack.md` e, quando houver dependencia externa, pesquisar documentacao oficial, seguranca e versoes atuais
- o plano final deve explicitar objetivos, arquivos afetados, validacao, riscos e rollback em passos pequenos e verificaveis

O plano deve ser suficiente para orientar a execucao sem exagerar no texto nem perder o foco tecnico.
