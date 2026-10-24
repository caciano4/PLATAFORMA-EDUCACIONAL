# Aula Bônus — Formulários

**Pré-requisitos:** Aula 5 (DOM) e Aula 1 (objetos e arrays)
**Playground dos alunos:** https://site-alunos-nu.vercel.app/aula-bonus-formularios/
**Apostila:** `apostila-aula-bonus-formularios.pdf` (também para download no site)
**Duração:** 2h

## Objetivos

1. Entender o evento `submit` e por que o `preventDefault()` é a primeira linha.
2. Ler cada tipo de campo: texto, número (`Number()`), checkbox (`.checked`), radio e select.
3. Validar os dados antes de usar e mostrar mensagens de erro.
4. Reagir em tempo real com os eventos `input` e `change`.
5. Transformar o formulário num objeto (`FormData`) e num cadastro em lista.

## Roteiro

| Tempo | Bloco | No playground |
|---|---|---|
| 20 min | O submit e o preventDefault | exemplos 01 e 02 |
| 20 min | Lendo os campos | exemplos 03 e 04 |
| 20 min | Validação (JS e HTML) | exemplos 05 e 06 |
| 15 min | Eventos input e change, reset | exemplos 07 e 08 |
| 15 min | FormData e cadastro que vira lista | exemplos 09 e 10 |
| 30 min | Exercícios | exercícios 01 a 10 |

O playground tem a **prévia da página**: o aluno preenche e envia o formulário de verdade. Se faltar o `preventDefault`, aparece uma faixa vermelha simulando o recarregamento (e o campo é apagado). A correção automática preenche e envia o formulário sozinha.

## Exemplos

| # | Exemplo | Bloco |
|---|---|---|
| 01 | O formulário e o evento submit | O submit |
| 02 | preventDefault: o JavaScript assume o controle | O submit |
| 03 | Lendo o que foi digitado | Lendo os campos |
| 04 | Checkbox, radio e select | Lendo os campos |
| 05 | Validando antes de aceitar | Validação |
| 06 | required, type e a validação do navegador | Validação |
| 07 | O evento input: reagindo enquanto digita | Em tempo real |
| 08 | change, reset e o estado do botão | Em tempo real |
| 09 | Dos campos para um objeto (FormData) | Juntando tudo |
| 10 | Cadastro que vira lista | Juntando tudo |
| 11 | Área livre | Livre |

## Exercícios

| # | Exercício | Objetivo |
|---|---|---|
| 01 | Enviar sem recarregar | Fazer o submit mostrar uma mensagem sem recarregar a página. |
| 02 | Saudação | Ler o nome digitado e cumprimentar ao enviar. |
| 03 | Campo obrigatório | Não aceitar o envio com o nome vazio. |
| 04 | Contador de caracteres | Mostrar quantos caracteres foram digitados, em tempo real. |
| 05 | Aceite dos termos | Só confirmar se o checkbox estiver marcado. |
| 06 | Select de curso | Mostrar uma mensagem diferente conforme a opção escolhida. |
| 07 | Calculadora | Somar dois números digitados (de verdade, não juntar textos). |
| 08 | Objeto com FormData | Transformar o formulário num objeto e mostrar como JSON. |
| 09 | Lista de tarefas | Adicionar cada tarefa digitada na lista, sem aceitar vazio, e limpar o campo. |
| 10 | Desafio: validação completa | Validar nome, e-mail e idade com mensagens específicas, e só cadastrar se tudo estiver certo. |

O gabarito está em `gabarito.md`.
