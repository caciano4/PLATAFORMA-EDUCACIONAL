// =============================================
// AULA 3 — GABARITO DOS EXERCÍCIOS
// (Entregar aos alunos só depois da correção)
// =============================================

// EXERCÍCIO 1 — Contagem
console.log("--- Ex 1 ---");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// EXERCÍCIO 2 — Tabuada do 7
console.log("--- Ex 2 ---");
for (let n = 1; n <= 10; n++) {
  console.log(`7 x ${n} = ${7 * n}`);
}

// EXERCÍCIO 3 — Soma de 1 a 100
console.log("--- Ex 3 ---");
let soma = 0;
for (let n = 1; n <= 100; n++) {
  soma += n;
}
console.log(`A soma é ${soma}`);        // 5050

// EXERCÍCIO 4 — Só os pares
console.log("--- Ex 4 ---");
for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}
// mesma coisa com if:
// for (let i = 0; i <= 20; i++) { if (i % 2 === 0) console.log(i); }

// EXERCÍCIO 5 — Contagem regressiva
console.log("--- Ex 5 ---");
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
console.log("Fogo!");

// EXERCÍCIO 6 — Média das notas
console.log("--- Ex 6 ---");
const notas = [8, 6.5, 9, 7];
let somaNotas = 0;
for (const nota of notas) {
  somaNotas += nota;
}
console.log(`Média: ${(somaNotas / notas.length).toFixed(1)}`);   // 7.6

// EXERCÍCIO 7 — Lista numerada com forEach
console.log("--- Ex 7 ---");
const frutas = ["maçã", "banana", "uva"];
frutas.forEach((fruta, i) => {
  console.log(`${i + 1}. ${fruta}`);
});

// EXERCÍCIO 8 — Contando letras
console.log("--- Ex 8 ---");
const palavra = "programação";
let quantidade = 0;
for (const letra of palavra) {
  if (letra === "a") {
    quantidade++;
  }
}
console.log(`A letra a aparece ${quantidade} vezes`);   // 2

// EXERCÍCIO 9 — Procurando com break
console.log("--- Ex 9 ---");
const numeros = [4, 9, 7, 2, 7];
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] === 7) {
    console.log(`Achei o 7 na posição ${i}`);   // posição 2
    break;
  }
}

// EXERCÍCIO 10 — Pulando com continue
console.log("--- Ex 10 ---");
const valores = [5, -2, 8, -1, 3];
let somaPositivos = 0;
for (const v of valores) {
  if (v < 0) continue;
  somaPositivos += v;
}
console.log(`Soma dos positivos: ${somaPositivos}`);   // 16

// EXERCÍCIO 11 — O maior da lista
console.log("--- Ex 11 ---");
const lista = [12, 45, 7, 89, 23];
let maior = lista[0];
for (const n of lista) {
  if (n > maior) {
    maior = n;
  }
}
console.log(`O maior é ${maior}`);   // 89

// EXERCÍCIO 12 — Pirâmide de estrelas (desafio)
console.log("--- Ex 12 ---");
for (let linha = 1; linha <= 5; linha++) {
  let texto = "";
  for (let coluna = 1; coluna <= linha; coluna++) {
    texto += "*";
  }
  console.log(texto);
}

// EXERCÍCIO 13 — Cofrinho
console.log("--- Ex 13 ---");
let total = 0;
let semanas = 0;
while (total < 100) {
  total += 15;
  semanas++;
}
console.log(`Em ${semanas} semanas você terá R$ ${total}`);   // 7 semanas, R$ 105

// EXERCÍCIO 14 — Dobrando
console.log("--- Ex 14 ---");
let numero = 1;
while (numero < 1000) {
  console.log(numero);
  numero *= 2;
}
