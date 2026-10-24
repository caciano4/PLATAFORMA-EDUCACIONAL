// =============================================
// AULA 2 — GABARITO DOS EXERCÍCIOS
// (Entregar aos alunos só depois da correção)
// =============================================

// EXERCÍCIO 1 — Positivo ou negativo
console.log("--- Ex 1 ---");
const numero1 = -4;
if (numero1 > 0) {
  console.log("Positivo");
} else if (numero1 < 0) {
  console.log("Negativo");
} else {
  console.log("Zero");
}

// EXERCÍCIO 2 — Par ou ímpar
console.log("--- Ex 2 ---");
const numero2 = 7;
if (numero2 % 2 === 0) {
  console.log("Par");
} else {
  console.log("Ímpar");
}
console.log(numero2 % 2 === 0 ? "Par" : "Ímpar");

// EXERCÍCIO 3 — Maior de dois
console.log("--- Ex 3 ---");
const a = 12;
const b = 30;
if (a > b) {
  console.log(`O maior é ${a}`);
} else if (b > a) {
  console.log(`O maior é ${b}`);
} else {
  console.log("São iguais");
}

// EXERCÍCIO 4 — Boletim
console.log("--- Ex 4 ---");
const nota4 = 7.5;
if (nota4 >= 9) {
  console.log("A");
} else if (nota4 >= 7) {
  console.log("B");
} else if (nota4 >= 5) {
  console.log("C");
} else {
  console.log("Reprovado");
}

// EXERCÍCIO 5 — Aprovação completa
console.log("--- Ex 5 ---");
const nota5 = 6;
const frequencia = 80;
if (nota5 >= 7 && frequencia >= 75) {
  console.log("Aprovado");
} else if (nota5 >= 5 && frequencia >= 75) {
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}

// EXERCÍCIO 6 — Ingresso de cinema
console.log("--- Ex 6 ---");
const idade = 65;
let valor;
if (idade <= 12 || idade >= 60) {
  valor = 15;
} else {
  valor = 30;
}
console.log(`Valor do ingresso: R$ ${valor}`);

// EXERCÍCIO 7 — Frete grátis
console.log("--- Ex 7 ---");
const valorCompra = 150;
const ehAssinante = false;
const frete = valorCompra > 200 || ehAssinante ? 0 : 25;
console.log(`Total a pagar: R$ ${valorCompra + frete}`);

// EXERCÍCIO 8 — Dia da semana
console.log("--- Ex 8 ---");
const dia = 4;
switch (dia) {
  case 1: console.log("Domingo"); break;
  case 2: console.log("Segunda"); break;
  case 3: console.log("Terça"); break;
  case 4: console.log("Quarta"); break;
  case 5: console.log("Quinta"); break;
  case 6: console.log("Sexta"); break;
  case 7: console.log("Sábado"); break;
  default: console.log("Dia inválido");
}

// EXERCÍCIO 9 — Cadastro
console.log("--- Ex 9 ---");
const email = "";
if (email) {
  console.log(`Cadastro realizado com: ${email}`);
} else {
  console.log("Preencha o e-mail");   // "" é falsy
}

// EXERCÍCIO 10 — Calculadora de IMC (desafio)
console.log("--- Ex 10 ---");
const peso = 70;
const altura = 1.75;
const imc = peso / (altura ** 2);
let classificacao;
if (imc < 18.5) {
  classificacao = "Abaixo do peso";
} else if (imc < 25) {
  classificacao = "Peso normal";
} else if (imc < 30) {
  classificacao = "Sobrepeso";
} else {
  classificacao = "Obesidade";
}
console.log(`IMC: ${imc.toFixed(1)} - ${classificacao}`);

// EXERCÍCIO 11 — Contagem regressiva
console.log("--- Ex 11 ---");
let contagem = 10;
while (contagem >= 1) {
  console.log(contagem);
  contagem--;
}
console.log("Fogo!");

// EXERCÍCIO 12 — Soma de 1 a 100 (desafio)
console.log("--- Ex 12 ---");
let numeroAtual = 1;
let soma = 0;
let somaPares = 0;
while (numeroAtual <= 100) {
  soma += numeroAtual;
  if (numeroAtual % 2 === 0) {
    somaPares += numeroAtual;   // bônus
  }
  numeroAtual++;
}
console.log(`A soma é ${soma}`);             // 5050
console.log(`A soma dos pares é ${somaPares}`); // 2550
