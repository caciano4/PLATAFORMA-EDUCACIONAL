// =============================================
// AULA 4 — FUNÇÕES
// Rode com: node exemplos.js
// =============================================

// ---------- PARTE 1: declarar e chamar ----------
console.log("===== declarar e chamar =====");

function saudar() {
  console.log("Olá, turma!");
}

saudar();      // só roda quando chamamos
saudar();


// ---------- PARTE 2: parâmetros ----------
console.log("\n===== parâmetros =====");

function saudarPessoa(nome) {
  console.log(`Olá, ${nome}!`);
}
saudarPessoa("Ana");
saudarPessoa("Caio");

function apresentar(nome, idade) {
  console.log(`${nome} tem ${idade} anos`);
}
apresentar("Bia", 20);


// ---------- PARTE 3: return ----------
console.log("\n===== return =====");

function somar(a, b) {
  return a + b;
}
const resultado = somar(3, 5);
console.log(resultado);           // 8
console.log(somar(10, 20) * 2);   // 60

// return x console.log
function dobroMostra(n) {
  console.log(n * 2);
}
function dobroDevolve(n) {
  return n * 2;
}
const x = dobroMostra(5);         // mostra 10
const y = dobroDevolve(5);        // não mostra nada
console.log("x =", x);            // undefined
console.log("y =", y);            // 10

// return encerra a função
function testar() {
  return "fim";
  console.log("isso nunca aparece");
}
console.log(testar());


// ---------- PARTE 4: valor padrão ----------
console.log("\n===== valor padrão =====");

function aplicarDesconto(valor, porcentagem = 10) {
  return valor - valor * porcentagem / 100;
}
console.log(aplicarDesconto(100));       // 90
console.log(aplicarDesconto(100, 25));   // 75


// ---------- PARTE 5: arrow functions ----------
console.log("\n===== arrow functions =====");

const dobro = (n) => {
  return n * 2;
};
const triplo = (n) => n * 3;      // return automático
console.log(dobro(4), triplo(4)); // 8 12

const mostrar = (fruta) => console.log("fruta:", fruta);
["maçã", "uva"].forEach(mostrar); // o forEach chama a função para cada item


// ---------- PARTE 6: escopo ----------
console.log("\n===== escopo =====");

function calcular() {
  const segredo = 42;
  console.log("dentro:", segredo);
}
calcular();
// console.log(segredo);  // ERRO: segredo is not defined (tire o // para ver)


// ---------- PARTE 7: funções com if e laços ----------
console.log("\n===== if e laços dentro da função =====");

function situacao(nota) {
  if (nota >= 7) return "Aprovado";
  if (nota >= 5) return "Recuperação";
  return "Reprovado";
}
console.log(situacao(8), situacao(6), situacao(3));

function somarLista(lista) {
  let total = 0;
  for (const n of lista) {
    total += n;
  }
  return total;
}
console.log(somarLista([1, 2, 3, 4]));   // 10


// ---------- PARTE 8: tipos de função ----------
console.log("\n===== tipos de função =====");

function dobro1(n) { return n * 2; }                 // declaração
const dobro2 = function (n) { return n * 2; };       // expressão (anônima)
const dobro4 = (n) => n * 2;                         // arrow
console.log(dobro1(5), dobro2(5), dobro4(5));
[1, 2, 3].forEach((n) => console.log("callback:", dobro4(n)));   // callback

// hoisting: declaração pode ser chamada antes de aparecer
console.log("triplo antes de declarar:", triploDeclarado(3));
function triploDeclarado(n) { return n * 3; }


// ---------- PARTE 9: tipos dos parâmetros ----------
console.log("\n===== tipos =====");

function somarSemTipo(a, b) { return a + b; }
console.log(somarSemTipo(2, 3), somarSemTipo("2", 3));   // 5 e "23"

/**
 * Soma dois números.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function somarComTipo(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Erro: envie dois números";
  }
  return a + b;
}
console.log(somarComTipo(2, 3), "|", somarComTipo("2", 3));


// ---------- PARTE 10: funções revisando as aulas anteriores ----------
console.log("\n===== revisão com funções =====");

function classificarIMC(peso, altura) {             // operadores + else if
  const imc = peso / (altura ** 2);
  if (imc < 18.5) return "Abaixo do peso";
  else if (imc < 25) return "Peso normal";
  else if (imc < 30) return "Sobrepeso";
  return "Obesidade";
}
console.log(classificarIMC(70, 1.75));

function nomeDoDia(numero) {                        // switch
  switch (numero) {
    case 1: return "Domingo";
    case 7: return "Sábado";
    default: return "Dia útil";
  }
}
console.log(nomeDoDia(1), nomeDoDia(4));

function validarEmail(email) {                      // truthy/falsy + ternário
  return email ? `Cadastro com ${email}` : "Preencha o e-mail";
}
console.log(validarEmail(""), "|", validarEmail("ana@email.com"));

function contagemRegressiva(de) {                   // while
  let i = de;
  while (i >= 1) {
    console.log(i);
    i--;
  }
  console.log("Fogo!");
}
contagemRegressiva(3);

function tabuada(n) {                               // for
  for (let i = 1; i <= 3; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}
tabuada(7);

function calcularMedia(notas) {                     // array + for...of
  let soma = 0;
  for (const nota of notas) soma += nota;
  return soma / notas.length;
}
console.log("Média:", calcularMedia([8, 6.5, 9, 7]).toFixed(1));

function filtrarAprovados(notas) {                  // forEach + if + push
  const aprovados = [];
  notas.forEach((nota) => {
    if (nota >= 7) aprovados.push(nota);
  });
  return aprovados;
}
console.log("Aprovados:", filtrarAprovados([9, 4, 7, 5, 10]));
