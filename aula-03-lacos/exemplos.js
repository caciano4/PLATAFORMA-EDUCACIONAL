// =============================================
// AULA 3 — ARRAYS E LAÇOS: while, for, for...of e forEach
// Rode com: node exemplos.js
// =============================================

// ---------- PARTE 1: O QUE É UM ARRAY ----------
console.log("===== array =====");

const frutas = ["maçã", "banana", "uva"];
//   índice:      0        1        2

console.log("Primeira:", frutas[0]);             // começa no ZERO
console.log("Terceira:", frutas[2]);
console.log("Quantas:", frutas.length);          // 3
console.log("Última:", frutas[frutas.length - 1]);
console.log("Não existe:", frutas[10]);          // undefined

frutas[1] = "manga";                             // troca um item
frutas.push("kiwi");                             // adiciona no fim
console.log(frutas);


// ---------- PARTE 2: while ----------
console.log("\n===== while =====");

let contador = 1;
while (contador <= 3) {
  console.log("Volta " + contador);
  contador++;          // sem isso, o loop nunca termina!
}
console.log("Fim!");

// while quando não sabemos quantas voltas serão
let saldo = 100;
let saques = 0;
while (saldo >= 30) {
  saldo -= 30;
  saques++;
}
console.log(`Deu para sacar ${saques} vezes. Sobrou R$ ${saldo}`);

// Se a condição já começa false, o bloco nunca roda
let n = 10;
while (n < 5) {
  console.log("não aparece");
}


// ---------- PARTE 3: O for ----------
console.log("\n===== for =====");

for (let i = 1; i <= 5; i++) {
  console.log("Volta " + i);
}

for (let i = 0; i <= 10; i += 2) {
  console.log("Par:", i);
}

for (let i = 3; i >= 1; i--) {
  console.log(i);
}
console.log("Fogo!");


// ---------- PARTE 4: for x while ----------
console.log("\n===== for x while =====");

let k = 1;
while (k <= 3) {
  console.log("while:", k);
  k++;
}

for (let j = 1; j <= 3; j++) {
  console.log("for:", j);
}


// ---------- PARTE 5: percorrendo array com for ----------
console.log("\n===== for com índice =====");

const cores = ["azul", "verde", "roxo"];

for (let i = 0; i < cores.length; i++) {
  console.log(`${i + 1}. ${cores[i]}`);
}


// ---------- PARTE 6: for...of ----------
console.log("\n===== for...of =====");

for (const cor of cores) {
  console.log("Eu gosto de " + cor);
}

for (const letra of "JS") {
  console.log(letra);
}

const notas = [8, 6.5, 9, 7];
let soma = 0;
for (const nota of notas) {
  soma += nota;
}
console.log("Média:", (soma / notas.length).toFixed(1));


// ---------- PARTE 7: forEach ----------
console.log("\n===== forEach =====");

cores.forEach((cor) => {
  console.log("Cor:", cor);
});

// com a posição (2º valor)
cores.forEach((cor, i) => {
  console.log(`${i + 1}. ${cor}`);
});

// As 3 formas fazendo a mesma coisa
const nomes = ["Ana", "Bia", "Caio"];

for (let i = 0; i < nomes.length; i++) console.log("for:", nomes[i]);
for (const nome of nomes) console.log("for...of:", nome);
nomes.forEach((nome) => console.log("forEach:", nome));


// ---------- PARTE 8: break e continue ----------
console.log("\n===== break e continue =====");

for (const n of [4, 9, 7, 2]) {
  console.log("olhando", n);
  if (n === 7) {
    console.log("Achei o 7! Pode parar.");
    break;          // no forEach isso NÃO funciona
  }
}

for (let i = 1; i <= 5; i++) {
  if (i % 2 !== 0) continue;
  console.log("par:", i);
}


// ---------- PARTE 9: for aninhado ----------
console.log("\n===== for aninhado =====");

for (let linha = 1; linha <= 3; linha++) {
  let texto = "";
  for (let coluna = 1; coluna <= linha; coluna++) {
    texto += "*";
  }
  console.log(texto);
}
