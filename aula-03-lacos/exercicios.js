// =============================================
// AULA 3 — EXERCÍCIOS DE ARRAYS, while, for, for...of e forEach
// Resolva cada exercício abaixo do enunciado.
// Rode com: node exercicios.js
// =============================================


// ---------- NÍVEL 1: O for ----------

// EXERCÍCIO 1 — Contagem
// Use um for para mostrar os números de 1 até 5, um por linha.



// EXERCÍCIO 2 — Tabuada do 7
// Use um for de 1 a 10 e mostre: "7 x 1 = 7", "7 x 2 = 14" ... até "7 x 10 = 70".



// EXERCÍCIO 3 — Soma de 1 a 100
// Crie let soma = 0, use um for de 1 a 100 somando cada número
// e mostre no final: "A soma é 5050".



// EXERCÍCIO 4 — Só os pares
// Mostre os números pares de 0 até 20, um por linha.
// Faça de duas formas: com i += 2, e com if dentro do for.



// EXERCÍCIO 5 — Contagem regressiva
// Use um for para contar de 10 até 1 e depois mostre "Fogo!".



// ---------- NÍVEL 2: arrays e for...of ----------

// EXERCÍCIO 6 — Média das notas
// const notas = [8, 6.5, 9, 7];
// Some todas com um laço e mostre: "Média: 7.6"  (use .toFixed(1))



// EXERCÍCIO 7 — Lista numerada com forEach
// const frutas = ["maçã", "banana", "uva"];
// Usando frutas.forEach((fruta, i) => { ... }), mostre:
// "1. maçã", "2. banana", "3. uva".
// Dica: o índice começa em 0, então mostre i + 1.



// EXERCÍCIO 8 — Contando letras
// Use for...of para contar quantas vezes a letra "a" aparece em "programação".
// Mostre: "A letra a aparece 2 vezes".



// ---------- NÍVEL 3: break e continue ----------

// EXERCÍCIO 9 — Procurando com break
// const numeros = [4, 9, 7, 2, 7];
// Percorra com for e pare no primeiro 7 encontrado.
// Mostre: "Achei o 7 na posição 2" (a posição é o índice).



// EXERCÍCIO 10 — Pulando com continue
// const valores = [5, -2, 8, -1, 3];
// Some só os positivos (use continue para pular os negativos).
// Mostre: "Soma dos positivos: 16".



// EXERCÍCIO 11 — O maior da lista
// const numeros = [12, 45, 7, 89, 23];
// Descubra o maior valor usando um laço (sem Math.max).
// Mostre: "O maior é 89".
// Dica: guarde o primeiro item em let maior e compare com os outros.



// ---------- DESAFIO ----------

// EXERCÍCIO 12 — Pirâmide de estrelas
// Usando dois for (um dentro do outro), mostre:
// *
// **
// ***
// ****
// *****



// ---------- while ----------

// EXERCÍCIO 13 — Cofrinho
// Você guarda R$ 15 por semana num cofrinho que começa vazio.
// Usando while, descubra em quantas semanas o total chega a pelo menos R$ 100.
// Mostre: "Em 7 semanas você terá R$ 105"
// Dica: repita enquanto total < 100, somando 15 no total e 1 nas semanas.



// EXERCÍCIO 14 — Dobrando
// Comece com let numero = 1.
// Enquanto numero for menor que 1000, mostre o número e depois dobre ele (numero *= 2).
// Saída esperada: 1, 2, 4, 8, 16, 32, 64, 128, 256, 512 (um por linha)
