# Aula 2 — Operadores em JavaScript

**Duração sugerida:** 1h30 a 2h
**Pré-requisito (Aula 1):** variáveis (`let`, `const`), tipos básicos (number, string, boolean) e `console.log`.

## Objetivos da aula

Ao final, o aluno deve conseguir:

1. Fazer contas com operadores aritméticos (incluindo resto `%`).
2. Atualizar variáveis com operadores de atribuição (`+=`, `++`…).
3. Comparar valores e entender a diferença entre `==` e `===`.
4. Combinar condições com `&&`, `||` e `!`.
5. Juntar textos com `+` e com template string.

## Roteiro

| Tempo | Bloco | Arquivo |
|---|---|---|
| 10 min | Revisão da Aula 1 + o que é um operador | — |
| 20 min | Operadores aritméticos | `exemplos.js` (parte 1) |
| 15 min | Operadores de atribuição | `exemplos.js` (parte 2) |
| 20 min | Operadores de comparação | `exemplos.js` (parte 3) |
| 20 min | Operadores lógicos | `exemplos.js` (parte 4) |
| 10 min | Strings: concatenação e template string | `exemplos.js` (parte 5) |
| 25 min | Exercícios práticos | `exercicios.js` |
| — | Correção | `gabarito.js` |

Para rodar: `node exemplos.js`

---

## 1. O que é um operador?

É um símbolo que faz uma **operação** com um ou mais valores e **devolve um resultado**.

```js
5 + 3   // operador +, operandos 5 e 3, resultado 8
```

## 2. Aritméticos

| Operador | Nome | Exemplo | Resultado |
|---|---|---|---|
| `+` | Soma | `10 + 3` | `13` |
| `-` | Subtração | `10 - 3` | `7` |
| `*` | Multiplicação | `10 * 3` | `30` |
| `/` | Divisão | `10 / 3` | `3.333...` |
| `%` | Resto da divisão | `10 % 3` | `1` |
| `**` | Potência | `2 ** 3` | `8` |

**Dica para a turma:** `%` é muito usado para saber se um número é par: `numero % 2 === 0`.

**Precedência:** igual à matemática — `**` primeiro, depois `* / %`, depois `+ -`. Use parênteses para deixar claro.

```js
2 + 3 * 4     // 14
(2 + 3) * 4   // 20
```

## 3. Atribuição

| Operador | Equivale a |
|---|---|
| `x = 5` | guarda 5 em x |
| `x += 2` | `x = x + 2` |
| `x -= 2` | `x = x - 2` |
| `x *= 2` | `x = x * 2` |
| `x /= 2` | `x = x / 2` |
| `x %= 2` | `x = x % 2` |
| `x++` | `x = x + 1` |
| `x--` | `x = x - 1` |

⚠️ Só funciona com `let`. Com `const` dá erro — bom momento para relembrar a Aula 1.

## 4. Comparação (sempre devolvem `true` ou `false`)

| Operador | Significado | Exemplo | Resultado |
|---|---|---|---|
| `>` | maior que | `5 > 3` | `true` |
| `<` | menor que | `5 < 3` | `false` |
| `>=` | maior ou igual | `5 >= 5` | `true` |
| `<=` | menor ou igual | `4 <= 3` | `false` |
| `===` | igual (valor **e** tipo) | `5 === "5"` | `false` |
| `!==` | diferente (valor ou tipo) | `5 !== "5"` | `true` |
| `==` | igual (só valor, converte tipo) | `5 == "5"` | `true` |
| `!=` | diferente (só valor) | `5 != "5"` | `false` |

**Regra da casa:** use sempre `===` e `!==`. O `==` faz conversões escondidas e gera bugs.

## 5. Lógicos

| Operador | Nome | Quando é `true` |
|---|---|---|
| `&&` | E | quando **as duas** condições são verdadeiras |
| `\|\|` | OU | quando **pelo menos uma** é verdadeira |
| `!` | NÃO | inverte o valor |

Tabela verdade rápida:

| A | B | A && B | A \|\| B |
|---|---|---|---|
| true | true | true | true |
| true | false | false | true |
| false | true | false | true |
| false | false | false | false |

Exemplo do mundo real: *"pode dirigir se tem 18 anos **e** tem CNH"*.

## 6. Strings

```js
const nome = "Ana";
console.log("Olá, " + nome + "!");   // concatenação
console.log(`Olá, ${nome}!`);        // template string (crase)
```

Pegadinha para mostrar: `"5" + 3` dá `"53"` (vira texto), mas `"5" - 3` dá `2`.

## 7. Bônus: `typeof`

```js
typeof 10       // "number"
typeof "10"     // "string"
typeof true     // "boolean"
```

---

## Exercícios

Estão em `exercicios.js` (10 exercícios, do fácil ao desafio). O gabarito comentado está em `gabarito.js` — entregue só depois da correção.
