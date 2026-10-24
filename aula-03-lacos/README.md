# Aula 3 — Arrays e laços de repetição: while, for, for...of e forEach

**Duração sugerida:** 2h30
**Pré-requisito (Aula 2):** condicionais (`if`, `else`, `switch`) e operadores de comparação.

## Objetivos da aula

Ao final, o aluno deve conseguir:

1. Explicar o que é um array e acessar seus itens pelo índice.
2. Repetir um bloco com `while` e evitar o loop infinito.
3. Escrever um `for` e entender suas três partes.
4. Escolher entre `for` e `while` conforme a situação.
5. Percorrer um array com `for` (índice), `for...of` e `forEach`.
6. Interromper ou pular voltas com `break` e `continue`.
7. Combinar dois `for` (laço aninhado).

## Roteiro

| Tempo | Bloco | Arquivo |
|---|---|---|
| 5 min | Revisão: condicionais (Aula 2) | — |
| 15 min | O que é um array | `exemplos.js` (parte 1) |
| 20 min | `while`: repetir enquanto for true | `exemplos.js` (parte 2) |
| 20 min | O `for` e suas três partes | `exemplos.js` (parte 3) |
| 10 min | `for` x `while` | `exemplos.js` (parte 4) |
| 15 min | Percorrendo arrays com `for` e `for...of` | `exemplos.js` (partes 5 e 6) |
| 15 min | `forEach` e comparação das 3 formas | `exemplos.js` (parte 7) |
| 10 min | `break` e `continue` | `exemplos.js` (parte 8) |
| 10 min | `for` aninhado | `exemplos.js` (parte 9) |
| 30 min | Exercícios | `exercicios.js` |
| — | Correção | `gabarito.js` |

Para rodar: `node exemplos.js`

---

## 1. O que é um array?

Até agora cada variável guardava **um** valor. Um **array** é uma variável que guarda uma **lista** de valores, em ordem.

Analogia para a turma: *um array é como uma fileira de gavetas numeradas. Cada gaveta guarda um valor, e o número da gaveta é o **índice**.*

```js
const frutas = ["maçã", "banana", "uva"];
//   índice:      0        1        2
```

| O que você quer | Como escrever | Resultado |
|---|---|---|
| Pegar o primeiro item | `frutas[0]` | `"maçã"` |
| Pegar o terceiro item | `frutas[2]` | `"uva"` |
| Saber quantos itens tem | `frutas.length` | `3` |
| Pegar o último item | `frutas[frutas.length - 1]` | `"uva"` |
| Trocar um item | `frutas[1] = "manga"` | `["maçã", "manga", "uva"]` |
| Adicionar no fim | `frutas.push("kiwi")` | 4 itens |

⚠️ **A contagem começa no zero.** O primeiro item é o `[0]` e o último é o `[length - 1]`. Um índice que não existe (`frutas[10]`) devolve `undefined`.

Um array pode guardar qualquer tipo: `[8, 6.5, 9]`, `["Ana", "Bia"]`, `[true, false]`.

## 2. `while`: repetir enquanto for verdade

O `while` funciona **como um `if` que se repete**: testa uma condição e, enquanto ela for `true`, roda o bloco e **volta para testar de novo**.

Analogia para a turma: *"Enquanto tiver louça na pia, continuo lavando."*

```js
let contador = 1;

while (contador <= 3) {
  console.log("Volta " + contador);
  contador++;
}
console.log("Fim!");
// Volta 1, Volta 2, Volta 3, Fim!
```

Passo a passo (vale fazer o **teste de mesa** no quadro, anotando o valor de `contador` a cada volta):

1. Testa a condição.
2. Se for `true`, roda o bloco e volta ao passo 1.
3. Se for `false`, sai do laço e segue o programa.

| | `if` | `while` |
|---|---|---|
| Testa a condição | uma vez | antes de cada volta |
| Roda o bloco | no máximo 1 vez | enquanto a condição for `true` |
| Condição começa false | pula o bloco | pula o bloco |

O `while` brilha quando **não sabemos** quantas voltas serão, porque a parada depende de um cálculo:

```js
let saldo = 100;
let saques = 0;
while (saldo >= 30) {
  saldo -= 30;
  saques++;
}
console.log(`Deu para sacar ${saques} vezes`);   // 3
```

⚠️ **Loop infinito:** se a condição **nunca** virar `false`, o programa não para. Sempre altere a variável da condição dentro do bloco. Se travar no terminal, use `Ctrl + C`.

```js
let i = 1;
while (i <= 3) {
  console.log(i);
  // esqueceu o i++  ->  1, 1, 1, 1... para sempre
}
```

## 3. Por que existe o `for`?

Repare que, no `while`, a gente precisa lembrar de três coisas espalhadas pelo código:

```js
let i = 1;          // criar o contador
while (i <= 5) {    // testar
  console.log(i);
  i++;              // atualizar (esquecer disso = loop infinito)
}
```

O `for` junta as três coisas **na mesma linha**: é um `while` compacto. Por isso é o laço mais usado quando sabemos quantas voltas queremos dar.

## 4. O `for` e suas três partes

```js
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

| Parte | No exemplo | O que faz |
|---|---|---|
| Inicialização | `let i = 1` | roda **uma vez**, antes de tudo |
| Condição | `i <= 5` | testada **antes de cada volta**; se for false, o laço acaba |
| Atualização | `i++` | roda **no fim de cada volta** |

Leia em voz alta com a turma: *"começando em 1, enquanto i for menor ou igual a 5, aumente 1 a cada volta."*

Variações úteis: `i += 2` (de 2 em 2), `i--` (contagem regressiva).

## 5. `for` x `while`

| | `for` | `while` |
|---|---|---|
| Melhor quando | você **sabe** quantas voltas (1 a 10, itens de uma lista) | a repetição depende de algo que **muda** (enquanto tiver saldo) |
| Contador | dentro dos parênteses | espalhado pelo código |

## 6. Percorrendo um array com `for`

Como o índice começa em 0 e vai até `length - 1`, o `for` de array é sempre assim (repare no `<`, e não `<=`):

```js
for (let i = 0; i < frutas.length; i++) {
  console.log(`${i + 1}. ${frutas[i]}`);
}
```

## 7. `for...of`: um item de cada vez, sem índice

O `for...of` lê assim: *"para cada `fruta` **de** `frutas`, faça..."*. A cada volta, a variável `fruta` recebe o **próximo item** da lista. Não tem contador, não tem índice, não tem como errar o `<` ou `<=`.

```js
for (const fruta of frutas) {
  console.log(fruta);
}
// 1ª volta: fruta = "maçã"
// 2ª volta: fruta = "banana"
// 3ª volta: fruta = "uva"   -> acabou a lista, acabou o laço
```

Também funciona com texto, letra por letra:

```js
for (const letra of "JS") {
  console.log(letra);   // J   depois   S
}
```

## 8. `forEach`: o array percorre a si mesmo

O `forEach` é um **método do array**: em vez de escrever um laço, você pede para o próprio array executar um bloco de código **para cada item**.

```js
frutas.forEach((fruta) => {
  console.log(fruta);
});
```

Leia assim: *"frutas, para cada item (que vou chamar de `fruta`), faça isto."*

A parte `(fruta) => { ... }` é uma **função** (a gente vai estudar funções em detalhe mais pra frente). Por enquanto, trate como uma receita: entre parênteses vai o nome que você quer dar ao item, depois `=>`, depois o bloco.

O `forEach` também entrega a **posição** como segundo valor:

```js
frutas.forEach((fruta, i) => {
  console.log(`${i + 1}. ${fruta}`);
});
```

### As 3 formas lado a lado

| | `for` com índice | `for...of` | `forEach` |
|---|---|---|---|
| Sintaxe | `for (let i = 0; i < lista.length; i++)` | `for (const item of lista)` | `lista.forEach((item, i) => { })` |
| Tem a posição? | sim, `i` | não | sim, 2º parâmetro |
| Aceita `break`/`continue`? | sim | sim | **não** |
| Funciona com texto? | sim | sim | não (só array) |
| Quando usar | precisa do índice ou de controle total | só precisa dos valores | percorrer a lista inteira de um jeito curto |

⚠️ `break` e `continue` **não funcionam** dentro do `forEach`: ele sempre passa pela lista inteira. Se precisar parar no meio, use `for` ou `for...of`.

## 9. `break` e `continue`

- **`break`** sai do laço na hora.
- **`continue`** pula o resto da volta e vai para a próxima.

```js
for (const n of [4, 9, 7, 2]) {
  if (n === 7) {
    console.log("Achei o 7!");
    break;            // não olha o resto
  }
}

for (let i = 1; i <= 5; i++) {
  if (i % 2 !== 0) continue;   // pula os ímpares
  console.log(i);              // 2, 4
}
```

## 10. `for` aninhado

Um `for` dentro do outro: o de dentro roda **inteiro** a cada volta do de fora.

```js
for (let linha = 1; linha <= 3; linha++) {
  let texto = "";
  for (let coluna = 1; coluna <= linha; coluna++) {
    texto += "*";
  }
  console.log(texto);   //  *   **   ***
}
```

---

## Exercícios

Estão em `exercicios.js` (14 exercícios: 12 de for/arrays e 2 de while no final). O gabarito comentado está em `gabarito.js`, para entregar só depois da correção.
