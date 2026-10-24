// =============================================
// AULA 4 — GABARITO DOS EXERCÍCIOS
// (Entregar aos alunos só depois da correção)
// =============================================

// EXERCÍCIO 1 — Saudação
console.log("--- Ex 1 ---");
function saudar(nome) {
  console.log(`Olá, ${nome}!`);
}
saudar("Ana");

// EXERCÍCIO 2 — Dobro
console.log("--- Ex 2 ---");
function dobro(n) {
  return n * 2;
}
console.log(dobro(7));               // 14

// EXERCÍCIO 3 — Soma
console.log("--- Ex 3 ---");
function somar(a, b) {
  return a + b;
}
console.log(somar(3, 5));            // 8

// EXERCÍCIO 4 — Área do retângulo
console.log("--- Ex 4 ---");
function area(largura, altura) {
  return largura * altura;
}
console.log(`Área: ${area(5, 3)}`);  // Área: 15

// EXERCÍCIO 5 — É par?
console.log("--- Ex 5 ---");
function ehPar(n) {
  return n % 2 === 0;                // a comparação já é true ou false
}
console.log(ehPar(4), ehPar(7));     // true false

// EXERCÍCIO 6 — Maior de dois
console.log("--- Ex 6 ---");
function maior(a, b) {
  if (a > b) return a;
  return b;
}
console.log(maior(12, 30));          // 30

// EXERCÍCIO 7 — Conversor de temperatura
console.log("--- Ex 7 ---");
function celsiusParaFahrenheit(c) {
  return c * 9 / 5 + 32;
}
console.log(`25°C = ${celsiusParaFahrenheit(25)}°F`);   // 77

// EXERCÍCIO 8 — Situação do aluno
console.log("--- Ex 8 ---");
function situacao(nota) {
  if (nota >= 7) return "Aprovado";
  if (nota >= 5) return "Recuperação";
  return "Reprovado";
}
console.log(situacao(8));
console.log(situacao(6));
console.log(situacao(3));

// EXERCÍCIO 9 — Desconto com valor padrão
console.log("--- Ex 9 ---");
function aplicarDesconto(valor, porcentagem = 10) {
  return valor - valor * porcentagem / 100;
}
console.log(aplicarDesconto(100));       // 90
console.log(aplicarDesconto(100, 25));   // 75

// EXERCÍCIO 10 — Arrow function
console.log("--- Ex 10 ---");
const triplo = (n) => n * 3;
console.log(triplo(5));                  // 15

// EXERCÍCIO 11 — Somar lista
console.log("--- Ex 11 ---");
function somarLista(lista) {
  let total = 0;
  for (const n of lista) {
    total += n;
  }
  return total;
}
console.log(somarLista([1, 2, 3, 4]));   // 10

// EXERCÍCIO 12 — Contar vogais (desafio)
console.log("--- Ex 12 ---");
function contarVogais(texto) {
  let quantidade = 0;
  for (const letra of texto) {
    if ("aeiou".includes(letra)) {
      quantidade++;
    }
  }
  return quantidade;
}
console.log(contarVogais("javascript"));  // 3
