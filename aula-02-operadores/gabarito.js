// =============================================
// AULA 2 — GABARITO DOS EXERCÍCIOS
// (Entregar aos alunos só depois da correção)
// =============================================

// EXERCÍCIO 1 — Calculadora
console.log("--- Ex 1 ---");
const num1 = 20;
const num2 = 6;
console.log("Soma:", num1 + num2);           // 26
console.log("Subtração:", num1 - num2);      // 14
console.log("Multiplicação:", num1 * num2);  // 120
console.log("Divisão:", num1 / num2);        // 3.3333333333333335
console.log("Resto:", num1 % num2);          // 2
console.log("Potência:", num1 ** 2);         // 400

// EXERCÍCIO 2 — Par ou ímpar
console.log("--- Ex 2 ---");
const numero = 42;
console.log("É par?", numero % 2 === 0);     // true

// EXERCÍCIO 3 — Carrinho de compras
console.log("--- Ex 3 ---");
let total = 0;
total += 50;
total += 30;
total += 20;
total *= 0.9;          // 10% de desconto = pagar 90%
console.log("Total:", total);                // 90

// EXERCÍCIO 4 — Adivinhe o resultado
console.log("--- Ex 4 ---");
console.log(10 > 5);        // true
console.log(10 === "10");   // false (tipos diferentes)
console.log(10 == "10");    // true  (== converte o tipo)
console.log(7 !== 7);       // false
console.log(3 >= 3);        // true
console.log(true && false); // false
console.log(true || false); // true
console.log(!true);         // false

// EXERCÍCIO 5 — Aprovado?
console.log("--- Ex 5 ---");
const nota = 7.5;
const frequencia = 80;
const aprovado = nota >= 7 && frequencia >= 75;
console.log("Aprovado:", aprovado);          // true

// EXERCÍCIO 6 — Entrada no cinema
console.log("--- Ex 6 ---");
const idade = 15;
const acompanhado = true;
const podeEntrar = idade >= 16 || acompanhado;
console.log("Pode entrar:", podeEntrar);     // true

// EXERCÍCIO 7 — Média
console.log("--- Ex 7 ---");
const n1 = 8;
const n2 = 6.5;
const n3 = 9;
const media = (n1 + n2 + n3) / 3;            // sem parênteses daria errado!
console.log("Média:", media);                // 7.833333333333333
console.log("Média >= 7:", media >= 7);      // true

// EXERCÍCIO 8 — Apresentação
console.log("--- Ex 8 ---");
const nome = "Walter";
const idadePessoa = 30;
const cidade = "São Paulo";
console.log("Meu nome é " + nome + ", tenho " + idadePessoa + " anos e moro em " + cidade + ".");
console.log(`Meu nome é ${nome}, tenho ${idadePessoa} anos e moro em ${cidade}.`);

// EXERCÍCIO 9 — Pegadinha
console.log("--- Ex 9 ---");
console.log("10" + 5);          // "105" -> + com texto junta (concatena)
console.log("10" - 5);          // 5     -> - só funciona com número, então converte
console.log("10" * "2");        // 20    -> * também converte para número
console.log(typeof ("10" + 5)); // "string"

// EXERCÍCIO 10 — Conversor de minutos (desafio)
console.log("--- Ex 10 ---");
const totalMinutos = 135;
const horas = Math.floor(totalMinutos / 60);  // 2
const minutos = totalMinutos % 60;            // 15
console.log(`${totalMinutos} minutos = ${horas}h e ${minutos}min`);
