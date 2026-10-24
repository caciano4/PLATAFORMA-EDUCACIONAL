// =============================================
// AULA 2 — CONDICIONAIS E WHILE EM JAVASCRIPT
// Rode com: node exemplos.js
// =============================================

// ---------- PARTE 1: if ----------
console.log("===== if =====");

const idade = 20;

if (idade >= 18) {
  console.log("Maior de idade");
}

const temperatura = 35;
if (temperatura > 30) {
  console.log("Tá calor! Bebe água.");
}


// ---------- PARTE 2: if / else ----------
console.log("\n===== if / else =====");

const saldo = 50;
const preco = 80;

if (saldo >= preco) {
  console.log("Compra aprovada");
} else {
  console.log("Saldo insuficiente");   // <- este roda
}


// ---------- PARTE 3: else if ----------
console.log("\n===== else if =====");

const nota = 6;

if (nota >= 7) {
  console.log("Aprovado");
} else if (nota >= 5) {
  console.log("Recuperação");   // <- este roda
} else {
  console.log("Reprovado");
}

// A ORDEM IMPORTA! (versão errada, para mostrar em aula)
const nota2 = 9;
if (nota2 >= 5) {
  console.log("Recuperação  <- ERRADO! parou na primeira condição verdadeira");
} else if (nota2 >= 7) {
  console.log("Aprovado");
}


// ---------- PARTE 4: CONDIÇÕES COMBINADAS ----------
console.log("\n===== && e || no if =====");

const temCNH = true;

if (idade >= 18 && temCNH) {
  console.log("Pode dirigir");
} else {
  console.log("Não pode dirigir");
}

const dia = "sábado";
if (dia === "sábado" || dia === "domingo") {
  console.log("Fim de semana!");
} else {
  console.log("Dia útil");
}

const logado = false;
if (!logado) {
  console.log("Faça login para continuar");
}


// ---------- PARTE 5: TERNÁRIO ----------
console.log("\n===== ternário =====");

const status = idade >= 18 ? "Maior" : "Menor";
console.log("Status:", status);

const numero = 7;
console.log(`${numero} é ${numero % 2 === 0 ? "par" : "ímpar"}`);


// ---------- PARTE 6: switch ----------
console.log("\n===== switch =====");

const diaSemana = 2;

switch (diaSemana) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda");
    break;
  case 3:
    console.log("Terça");
    break;
  default:
    console.log("Outro dia");
}

// Vários case com o mesmo resultado
const fruta = "banana";
switch (fruta) {
  case "maçã":
  case "pera":
    console.log("R$ 5,00 o kg");
    break;
  case "banana":
    console.log("R$ 3,50 o kg");
    break;
  default:
    console.log("Fruta não cadastrada");
}


// ---------- PARTE 7: TRUTHY E FALSY ----------
console.log("\n===== truthy e falsy =====");

const nome = "";
if (nome) {
  console.log(`Olá, ${nome}`);
} else {
  console.log("Nome não informado");   // <- "" é falsy
}

// Falsy: false, 0, "", null, undefined, NaN
if (0) console.log("não aparece");
if ("0") console.log('"0" é truthy! (é um texto com algo dentro)');


// ---------- PARTE 8: while ----------
console.log("\n===== while =====");

let contador = 1;

while (contador <= 3) {
  console.log("Volta " + contador);
  contador++;   // sem isso, o loop nunca termina!
}
console.log("Fim!");

// while com condição que depende de um cálculo
let saldoConta = 100;
let saques = 0;
while (saldoConta >= 30) {
  saldoConta -= 30;
  saques++;
}
console.log(`Deu para sacar ${saques} vezes. Sobrou R$ ${saldoConta}`);

// Se a condição já começa false, o bloco nunca roda
let n = 10;
while (n < 5) {
  console.log("não aparece");
}
