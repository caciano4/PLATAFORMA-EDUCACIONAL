# Aula 4 — Funções

**Duração sugerida:** 3h
**Pré-requisito (Aulas 2 e 3):** condicionais, arrays e laços (`while`, `for`, `forEach`).

## Objetivos da aula

Ao final, o aluno deve conseguir:

1. Explicar para que serve uma função.
2. Criar (declarar) e usar (chamar) uma função.
3. Passar informações para a função com parâmetros.
4. Devolver um resultado com `return` e saber a diferença para `console.log`.
5. Usar valor padrão em parâmetros.
6. Escrever arrow functions (e entender o `forEach` da aula passada).
7. Entender o básico de escopo.
8. Conhecer os tipos de função (declaração, expressão, arrow, callback) e comparar com o PHP.
9. Usar funções junto com condicionais, laços e arrays.

## Roteiro

| Tempo | Bloco | Arquivo |
|---|---|---|
| 10 min | Revisão: laços e o `forEach` | — |
| 15 min | O que é uma função | `exemplos.js` (parte 1) |
| 15 min | Parâmetros e argumentos | `exemplos.js` (parte 2) |
| 25 min | `return` x `console.log` | `exemplos.js` (parte 3) |
| 10 min | Valor padrão | `exemplos.js` (parte 4) |
| 15 min | Arrow functions | `exemplos.js` (parte 5) |
| 10 min | Escopo | `exemplos.js` (parte 6) |
| 10 min | Funções com if e laços | `exemplos.js` (parte 7) |
| 15 min | Tipos de função e tipagem (paralelo com PHP) | `exemplos.js` (partes 8 e 9) |
| 15 min | Funções revisando as aulas anteriores | `exemplos.js` (parte 10) |
| 40 min | Exercícios | `exercicios.js` |
| — | Correção | `gabarito.js` |

Para rodar: `node exemplos.js`

---

## 1. O que é uma função?

Uma função é um **bloco de código com nome**, que você escreve **uma vez** e usa **quantas vezes quiser**.

Analogia para a turma: *uma função é como uma receita de bolo. Você escreve a receita uma vez (declara) e, toda vez que quiser um bolo, segue a receita (chama).*

```js
// 1. Declarar: escrever a receita
function saudar() {
  console.log("Olá, turma!");
}

// 2. Chamar: usar a receita
saudar();
saudar();
```

⚠️ Declarar **não executa** nada. O código só roda quando você **chama** a função, com os parênteses: `saudar()`.

Já usamos funções prontas desde a Aula 1 sem perceber: `console.log()`, `Math.floor()`, `frutas.push()`.

## 2. Parâmetros e argumentos

Parâmetros são as **informações que a função recebe** para trabalhar. Funcionam como variáveis que só existem dentro dela.

```js
function saudar(nome) {          // nome = parâmetro
  console.log(`Olá, ${nome}!`);
}

saudar("Ana");                   // "Ana" = argumento
saudar("Caio");
```

| Termo | Onde aparece | No exemplo |
|---|---|---|
| Parâmetro | na **declaração**, entre parênteses | `nome` |
| Argumento | na **chamada**, o valor que você manda | `"Ana"` |

Com vários parâmetros, a ordem importa:

```js
function apresentar(nome, idade) {
  console.log(`${nome} tem ${idade} anos`);
}
apresentar("Bia", 20);
```

## 3. `return`: a função devolve um resultado

Até aqui as funções **mostravam** algo na tela. Com `return`, a função **devolve** um valor para quem chamou, e esse valor pode ser guardado numa variável, usado numa conta ou mostrado depois.

```js
function somar(a, b) {
  return a + b;
}

const resultado = somar(3, 5);   // resultado = 8
console.log(resultado);          // 8
console.log(somar(10, 20) * 2);  // 60
```

### `return` x `console.log` (a dúvida mais comum!)

| | `console.log` | `return` |
|---|---|---|
| O que faz | **mostra** na tela | **devolve** o valor para quem chamou |
| Dá para guardar numa variável? | não (a função devolve `undefined`) | sim |
| Dá para usar numa conta? | não | sim |

```js
function dobroMostra(n) { console.log(n * 2); }
function dobroDevolve(n) { return n * 2; }

const a = dobroMostra(5);    // mostra 10, mas a = undefined
const b = dobroDevolve(5);   // não mostra nada, mas b = 10
console.log(b + 1);          // 11
```

⚠️ O `return` **encerra a função** na hora: nada depois dele roda.

## 4. Valor padrão

Se o argumento não for enviado, o parâmetro usa o valor padrão:

```js
function aplicarDesconto(valor, porcentagem = 10) {
  return valor - valor * porcentagem / 100;
}
aplicarDesconto(100);       // 90  (usou 10%)
aplicarDesconto(100, 25);   // 75
```

## 5. Arrow functions (funções de seta)

Outra forma de escrever função, mais curta, guardada numa variável:

```js
// forma tradicional
function dobro(n) {
  return n * 2;
}

// arrow function
const dobro2 = (n) => {
  return n * 2;
};

// arrow function curta: uma linha só, o return é automático
const dobro3 = (n) => n * 2;
```

💡 Lembra do `forEach` da Aula 3? Aquele `(fruta) => { ... }` é uma arrow function! A gente entrega uma função para o `forEach`, e ele chama essa função uma vez para cada item.

```js
const mostrar = (fruta) => console.log(fruta);
["maçã", "uva"].forEach(mostrar);
```

## 6. Escopo: onde a variável existe

Uma variável criada **dentro** da função só existe **dentro** dela.

```js
function calcular() {
  const segredo = 42;
  console.log(segredo);     // 42
}
calcular();
console.log(segredo);       // ERRO: segredo is not defined
```

Já uma variável criada **fora** pode ser lida dentro da função. Mesmo assim, prefira passar valores por parâmetro: fica mais claro de onde vem cada coisa.

## 7. Funções com `if` e laços

Dentro de uma função cabe tudo o que já aprendemos:

```js
function situacao(nota) {
  if (nota >= 7) return "Aprovado";
  if (nota >= 5) return "Recuperação";
  return "Reprovado";
}

function somarLista(lista) {
  let total = 0;
  for (const n of lista) total += n;
  return total;
}

console.log(situacao(6));               // Recuperação
console.log(somarLista([1, 2, 3, 4]));  // 10
```

### Boas práticas de nome

- Use **verbos**: `calcularMedia`, `mostrarMenu`, `ehPar`.
- Uma função = **uma tarefa**. Se ficou grande, divida em duas.

## 8. Tipos de função (e o paralelo com o PHP)

O JavaScript tem quatro jeitos de criar e usar funções. Quem conhece PHP vai reconhecer todos:

| Tipo | JavaScript | PHP |
|---|---|---|
| Declaração (com nome) | `function somar(a, b) { return a + b; }` | `function somar($a, $b) { return $a + $b; }` |
| Expressão (anônima numa variável) | `const somar = function (a, b) { return a + b; };` | `$somar = function ($a, $b) { return $a + $b; };` |
| Arrow function | `const somar = (a, b) => a + b;` | `$somar = fn($a, $b) => $a + $b;` |
| Callback (função passada para outra) | `lista.forEach((n) => console.log(n));` | `array_map(fn($n) => $n * 2, $lista);` |

```js
// 1. Declaração
function dobro1(n) { return n * 2; }

// 2. Expressão (função anônima guardada numa variável)
const dobro2 = function (n) { return n * 2; };

// 3. Arrow function
const dobro3 = (n) => n * 2;

// 4. Callback: a função é entregue para outra função usar
[1, 2, 3].forEach((n) => console.log(dobro3(n)));
```

⚠️ **Diferença importante:** a **declaração** pode ser chamada **antes** de aparecer no código (o JavaScript "levanta" ela para o topo — isso se chama *hoisting*). Expressão e arrow function **não**: só existem depois da linha onde foram criadas.

```js
console.log(triplo(3));          // 9  -> funciona
function triplo(n) { return n * 3; }

console.log(quadrado(3));        // ERRO: Cannot access 'quadrado' before initialization
const quadrado = (n) => n * n;
```

## 9. E os tipos dos parâmetros, como no PHP?

No PHP dá para escrever `function somar(int $a, int $b): int` e o PHP **confere** os tipos. **O JavaScript não tem isso**: um parâmetro aceita qualquer valor, e o resultado pode surpreender:

```js
function somar(a, b) { return a + b; }
somar(2, 3);      // 5
somar("2", 3);    // "23"  -> ninguém reclamou!
```

Três formas de chegar perto:

**1. Comentário JSDoc** — documenta os tipos, e o VS Code mostra a dica quando você usa a função (mas não impede o erro):

```js
/**
 * Soma dois números.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function somar(a, b) {
  return a + b;
}
```

**2. Conferir com `typeof`** — você mesmo verifica dentro da função:

```js
function somar(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Erro: envie dois números";
  }
  return a + b;
}
```

**3. TypeScript** — é o "JavaScript com tipos", bem parecido com o PHP: `function somar(a: number, b: number): number`. É o próximo passo natural depois do JavaScript, e muito usado no mercado.

## 10. Funções usando o que já aprendemos

Funções são a "caixa" onde a gente guarda tudo o que viu nas aulas anteriores. Cada exemplo abaixo revisa um assunto:

```js
// Operadores + condicionais (Aula 2): else if
function classificarIMC(peso, altura) {
  const imc = peso / (altura ** 2);
  if (imc < 18.5) return "Abaixo do peso";
  else if (imc < 25) return "Peso normal";
  else if (imc < 30) return "Sobrepeso";
  return "Obesidade";
}

// switch (Aula 2)
function nomeDoDia(numero) {
  switch (numero) {
    case 1: return "Domingo";
    case 7: return "Sábado";
    default: return "Dia útil";
  }
}

// Truthy/falsy + ternário (Aula 2)
function validarEmail(email) {
  return email ? `Cadastro com ${email}` : "Preencha o e-mail";
}

// while (Aula 3)
function contagemRegressiva(de) {
  let i = de;
  while (i >= 1) {
    console.log(i);
    i--;
  }
  console.log("Fogo!");
}

// for (Aula 3)
function tabuada(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}

// array + for...of (Aula 3)
function calcularMedia(notas) {
  let soma = 0;
  for (const nota of notas) soma += nota;
  return soma / notas.length;
}

// array + forEach + if + push (Aula 3)
function filtrarAprovados(notas) {
  const aprovados = [];
  notas.forEach((nota) => {
    if (nota >= 7) aprovados.push(nota);
  });
  return aprovados;
}
```

---

## Exercícios

Estão em `exercicios.js` (12 exercícios, do fácil ao desafio). O gabarito comentado está em `gabarito.js`, para entregar só depois da correção.
