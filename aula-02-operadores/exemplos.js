// =============================================
// AULA 2 — OPERADORES EM JAVASCRIPT
// Rode com: node exemplos.js
// =============================================

// ---------- PARTE 1: ARITMÉTICOS ----------
console.log("===== ARITMÉTICOS =====");

const a = 10;
const b = 3;

console.log("Soma:", a + b);            // 13
console.log("Subtração:", a - b);       // 7
console.log("Multiplicação:", a * b);   // 30
console.log("Divisão:", a / b);         // 3.3333333333333335
console.log("Resto:", a % b);           // 1
console.log("Potência:", a ** 2);       // 100

// Precedência
console.log("2 + 3 * 4 =", 2 + 3 * 4);       // 14
console.log("(2 + 3) * 4 =", (2 + 3) * 4);   // 20

// Par ou ímpar com %
console.log("7 é par?", 7 % 2 === 0);  // false
console.log("8 é par?", 8 % 2 === 0);  // true


// ---------- PARTE 2: ATRIBUIÇÃO ----------
console.log("\n===== ATRIBUIÇÃO =====");

let pontos = 10;
console.log("Início:", pontos);   // 10

pontos += 5;
console.log("+= 5:", pontos);     // 15

pontos -= 3;
console.log("-= 3:", pontos);     // 12

pontos *= 2;
console.log("*= 2:", pontos);     // 24

pontos /= 4;
console.log("/= 4:", pontos);     // 6

pontos++;
console.log("++:", pontos);       // 7

pontos--;
console.log("--:", pontos);       // 6


// ---------- PARTE 3: COMPARAÇÃO ----------
console.log("\n===== COMPARAÇÃO =====");

const idade = 18;

console.log("idade > 17:", idade > 17);     // true
console.log("idade < 18:", idade < 18);     // false
console.log("idade >= 18:", idade >= 18);   // true
console.log("idade <= 10:", idade <= 10);   // false

// == x ===  (mostrar com calma!)
console.log('5 == "5":', 5 == "5");     // true  -> converte o tipo
console.log('5 === "5":', 5 === "5");   // false -> tipos diferentes
console.log('5 != "5":', 5 != "5");     // false
console.log('5 !== "5":', 5 !== "5");   // true


// ---------- PARTE 4: LÓGICOS ----------
console.log("\n===== LÓGICOS =====");

const temIdade = idade >= 18;
const temCNH = false;

console.log("Pode dirigir (&&):", temIdade && temCNH);        // false
console.log("Tem idade OU CNH (||):", temIdade || temCNH);    // true
console.log("NÃO tem CNH (!):", !temCNH);                     // true

// Exemplo combinado: desconto para estudante OU idoso
const ehEstudante = true;
const ehIdoso = false;
console.log("Tem desconto?", ehEstudante || ehIdoso);  // true


// ---------- PARTE 5: STRINGS ----------
console.log("\n===== STRINGS =====");

const nome = "Ana";
const curso = "JavaScript";

console.log("Olá, " + nome + "! Bem-vinda ao curso de " + curso + ".");
console.log(`Olá, ${nome}! Bem-vinda ao curso de ${curso}.`);

// Pegadinhas
console.log('"5" + 3 =', "5" + 3);   // "53"  (vira texto)
console.log('"5" - 3 =', "5" - 3);   // 2     (vira número)


// ---------- BÔNUS: typeof ----------
console.log("\n===== typeof =====");
console.log(typeof 10);       // number
console.log(typeof "10");     // string
console.log(typeof true);     // boolean
console.log(typeof ("5" + 3)); // string
