# Aula 5 — DOM: manipulando a página

**Material de apoio:** slides `Aula 12 - JS.pdf` (Green School · DOM)
**Playground dos alunos:** https://site-alunos-nu.vercel.app/aula-05/
**Duração:** 2h

## Roteiro (segue os blocos dos slides)

| Tempo | Bloco | No playground |
|---|---|---|
| 20 min | 1. Introdução: o que é o DOM, árvore, nós, `document` | exemplo 01 |
| 30 min | 2. Selecionar: `getElementById`, por classe/tag, `querySelector(All)`, seletores CSS | exemplos 02 a 05 |
| 30 min | 3. Modificar: `textContent`, `innerHTML`, `value`, `classList`, `style`, atributos | exemplos 06 a 09 |
| 20 min | 4. Navegar: `parentElement`, `children`, irmãos | exemplo 10 |
| 20 min | 5. Eventos: `addEventListener` e o fluxo selecionar → acessar → modificar → reagir | exemplos 11 a 13 |
| — | Exercícios (mão na massa) | exercícios 01 a 12 |

O playground desta aula é diferente: ao lado do código há uma **prévia da página**. O código do aluno roda dentro dela, então ele vê a página mudar e pode clicar e digitar. A correção automática testa os eventos sozinha (clica e digita numa cópia escondida da página).

## Exercícios

Adaptados dos 8 desafios dos slides, com mais 4 para revisar arrays, condicionais e funções.

| # | Exercício | Treina | Desafio dos slides |
|---|---|---|---|
| 01 | Ler e trocar o título | `getElementById`, `textContent` | 01 |
| 02 | Listar os itens | `querySelectorAll`, `forEach` | 02 |
| 03 | Mudar o estilo | `style` (camelCase, unidade) | — |
| 04 | Classes | `classList.add` / `remove` | — |
| 05 | Atributos do link | `getAttribute`, `setAttribute` | — |
| 06 | Navegando pelos irmãos | `previous/nextElementSibling`, `parentElement` | 06 |
| 07 | Primeiro clique | `addEventListener` | — |
| 08 | Contador | `Number()` + `textContent` | 07 |
| 09 | Lendo o input | `.value` + evento | 03 |
| 10 | Card ativo | `classList.toggle` | 04 |
| 11 | Cor de fundo | `document.body.style` + array + índice | 05 |
| 12 | Desafio: lista de compras | `createElement`, `appendChild`, if | 08 |

O gabarito está em `gabarito.md`.
