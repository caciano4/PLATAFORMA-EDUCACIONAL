# Aula 2 — Condicionais e while em JavaScript

**Duração sugerida:** 2h
**Pré-requisito:** operadores de comparação (`===`, `>`, `<=`…) e lógicos (`&&`, `||`, `!`).

## Objetivos da aula

Ao final, o aluno deve conseguir:

1. Fazer o programa tomar decisões com `if` e `else`.
2. Tratar várias possibilidades com `else if`.
3. Combinar condições com `&&` e `||` dentro do `if`.
4. Escrever decisões curtas com o operador ternário.
5. Usar `switch` quando há muitos valores fixos.
6. Saber o que é *truthy* e *falsy*.
7. Repetir um bloco com `while` enquanto uma condição for verdadeira.

## Roteiro

| Tempo | Bloco | Arquivo |
|---|---|---|
| 10 min | Revisão: operadores de comparação e lógicos | — |
| 15 min | `if` | `exemplos.js` (parte 1) |
| 15 min | `if / else` | `exemplos.js` (parte 2) |
| 15 min | `else if` | `exemplos.js` (parte 3) |
| 10 min | Condições combinadas | `exemplos.js` (parte 4) |
| 10 min | Ternário | `exemplos.js` (parte 5) |
| 10 min | `switch` | `exemplos.js` (parte 6) |
| 5 min | Truthy e falsy | `exemplos.js` (parte 7) |
| 15 min | `while` | `exemplos.js` (parte 8) |
| 25 min | Exercícios práticos | `exercicios.js` |
| — | Correção | `gabarito.js` |

Para rodar: `node exemplos.js`

---

## 1. O que é uma condicional?

É um jeito de dizer ao programa: **"se isso for verdade, faça aquilo"**.
Toda condição é uma expressão que vira `true` ou `false`, exatamente o que os operadores de comparação e lógicos devolvem.

Analogia para a turma: *"Se estiver chovendo, levo guarda-chuva. Senão, vou de boné."*

## 2. `if`

```js
const idade = 20;

if (idade >= 18) {
  console.log("Maior de idade");
}
```

O bloco entre `{ }` só roda se a condição for `true`.

## 3. `if / else`

```js
if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}
```

Sempre **um** dos dois caminhos roda, nunca os dois.

## 4. `else if`

```js
const nota = 6;

if (nota >= 7) {
  console.log("Aprovado");
} else if (nota >= 5) {
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}
```

⚠️ A ordem importa: o JS testa de cima para baixo e para na **primeira** condição verdadeira.
Pergunta para a turma: o que acontece se colocarmos `nota >= 5` antes de `nota >= 7`?

## 5. Condições combinadas

```js
if (idade >= 18 && temCNH) {
  console.log("Pode dirigir");
}

if (diaDaSemana === "sábado" || diaDaSemana === "domingo") {
  console.log("Fim de semana!");
}
```

## 6. Operador ternário

Um `if/else` em uma linha, bom para **escolher um valor**:

```js
const status = idade >= 18 ? "Maior" : "Menor";
```

Leia assim: *condição* **?** valor se verdadeiro **:** valor se falso.

## 7. `switch`

Útil quando comparamos **uma variável** com **vários valores fixos**:

```js
switch (dia) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda");
    break;
  default:
    console.log("Dia inválido");
}
```

⚠️ Sem o `break`, o código continua executando os próximos `case`. Vale mostrar esse erro ao vivo.

## 8. Truthy e falsy

No `if`, qualquer valor vira `true` ou `false`. Os **falsy** são só estes:

`false`, `0`, `""` (texto vazio), `null`, `undefined`, `NaN`

Todo o resto é **truthy**, incluindo `"0"`, `"false"` e `" "`.

```js
const nome = "";
if (nome) {
  console.log(`Olá, ${nome}`);
} else {
  console.log("Nome não informado");
}
```

## 9. `while`: um `if` que se repete

O `while` é uma estrutura de repetição, mas funciona **como um `if`**: testa uma condição.
A diferença é que, enquanto a condição for `true`, ele **volta e roda o bloco de novo**.

Analogia para a turma: *"Enquanto tiver louça na pia, continuo lavando."*

```js
let contador = 1;

while (contador <= 3) {
  console.log("Volta " + contador);
  contador++;
}
console.log("Fim!");
```

Saída: `Volta 1`, `Volta 2`, `Volta 3`, `Fim!`

| | `if` | `while` |
|---|---|---|
| Testa a condição | uma vez | antes de cada volta |
| Roda o bloco | no máximo 1 vez | enquanto a condição for `true` |

⚠️ **Loop infinito:** se a condição nunca virar `false`, o programa não para. Sempre altere a variável da condição dentro do bloco (o `contador++` acima). Se travar, use `Ctrl + C` no terminal.

---

## Exercícios

Estão em `exercicios.js` (12 exercícios: 10 de condicionais e 2 de while). O gabarito comentado está em `gabarito.js`, para entregar só depois da correção.
