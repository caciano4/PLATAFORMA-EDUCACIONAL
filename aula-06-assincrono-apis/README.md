# AULA 6 — JAVASCRIPT ASSÍNCRONO E APIs

**Duração sugerida:** 2h30
**Playground dos alunos:** https://site-alunos-nu.vercel.app/aula-06/
**Apostila:** `apostila-aula-06.pdf` (também para download no site)

## Objetivos da aula

1. Entender a diferença entre código síncrono e assíncrono.
2. Agendar tarefas com `setTimeout` e `setInterval` (e pará-las).
3. Entender callbacks e o problema do "callback hell".
4. Criar e consumir Promises com `then`, `catch` e `finally`.
5. Escrever código assíncrono legível com `async/await` e `try/catch`.
6. Buscar dados de uma API com `fetch` e JSON.

## Roteiro

| Tempo | Bloco | No playground |
|---|---|---|
| 15 min | Síncrono x assíncrono, setTimeout e setInterval | exemplos 01 a 03 |
| 10 min | Callbacks e callback hell | exemplo 04 |
| 25 min | Promises: criar, then, catch, finally, encadear | exemplos 05 a 07 |
| 20 min | async/await, try/catch e Promise.all | exemplos 08 a 10 |
| 20 min | fetch: buscando dados de uma API real | exemplos 11 e 12 |
| 5 min | Quiz: em que ordem aparece? (event loop) | exemplo 13 |
| 30 min | Exercícios | exercícios 01 a 10 |

A teoria completa, com exemplos e tabelas, está na apostila em PDF. Os exemplos também estão em `exemplos.js` (rode com `node exemplos.js`).

## Exercícios

Estão em `exercicios.js` e no site (com correção automática). O gabarito comentado está em `gabarito.js`.

| # | Exercício | Objetivo |
|---|---|---|
| 01 | setTimeout | Fazer uma mensagem aparecer depois das outras, usando um timer. |
| 02 | setInterval | Fazer uma contagem regressiva com intervalo e parar no fim. |
| 03 | Callback | Completar uma função que recebe um callback e chamá-la. |
| 04 | Criando uma Promise | Criar uma Promise que pode dar certo ou errado e tratar os dois casos. |
| 05 | then e catch | Consumir a API de alunos com then e catch. |
| 06 | async/await | Reescrever o exercício anterior com async/await e try/catch. |
| 07 | Função esperar | Criar a função esperar(ms) que devolve uma Promise, para usar com await. |
| 08 | Uma etapa depois da outra | Buscar o aluno e, com o nome dele, buscar as notas e calcular a média. |
| 09 | Promise.all | Buscar 3 preços ao mesmo tempo e somar. |
| 10 | Desafio: consumindo uma API | Usar o padrão do fetch (resposta, ok, json) para listar os aprovados e tratar o erro 404. |
| 11 | CEP de verdade (ViaCEP) | Consumir uma API pública: buscar um CEP e mostrar o endereço. |
| 12 | CEP que não existe | Tratar a resposta de erro de uma API. |
| 13 | Usuários de uma API | Consumir uma API que devolve uma lista de objetos. |
| 14 | Feriados do ano (BrasilAPI) | Consumir uma API e formatar os dados antes de mostrar. |
| 15 | Dois Pokémon ao mesmo tempo | Usar Promise.all com uma API de verdade e ler dados aninhados. |
| 16 | Banco pelo código | Tratar o 404 de uma API de verdade. |
