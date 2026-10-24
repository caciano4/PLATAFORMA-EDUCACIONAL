<?php
// LARAVEL 1 — PHP: O BÁSICO — EXERCÍCIOS
// Resolva no site (correção automática): https://site-alunos-nu.vercel.app/php-01/

// ===== Exercício 01: Apresentação =====
// Objetivo: Criar variáveis e mostrar com echo e aspas duplas.
// 1. Crie $nome = "Ana" e $idade = 20.
// 2. Mostre Olá, eu sou Ana e, na linha de baixo, Tenho 20 anos (lembre do \n).
// Saída esperada:
//   Olá, eu sou Ana
//   Tenho 20 anos
// crie as variáveis e mostre as duas frases

// ===== Exercício 02: Conta do restaurante =====
// Objetivo: Fazer contas e formatar dinheiro.
// 1. $conta = 120; a gorjeta é 10% da conta.
// 2. Mostre Gorjeta: R$ 12,00 e Total: R$ 132,00 usando number_format($v, 2, ",", ".").
// Saída esperada:
//   Gorjeta: R$ 12,00
//   Total: R$ 132,00
$conta = 120;

// ===== Exercício 03: Par ou ímpar =====
// Objetivo: Usar if/else com o operador %.
// 1. $n = 7.
// 2. Se o resto da divisão por 2 for 0, mostre 7 é par; senão, 7 é ímpar.
// Saída esperada:
//   7 é ímpar
$n = 7;

// ===== Exercício 04: Situação do aluno =====
// Objetivo: Usar if, elseif e else.
// 1. $media = 6.5.
// 2. Maior ou igual a 7: Aprovado; maior ou igual a 5: Recuperação; senão Reprovado.
// 3. Mostre no formato Média 6.5: Recuperação.
// Saída esperada:
//   Média 6.5: Recuperação
$media = 6.5;

// ===== Exercício 05: Lista de compras =====
// Objetivo: Percorrer um array com foreach e usar count.
// 1. $compras = ["Pão", "Leite", "Ovos"].
// 2. Mostre cada item como - Pão (um por linha) e no fim 3 itens.
// Saída esperada:
//   - Pão
//   - Leite
//   - Ovos
//   3 itens
$compras = ["Pão", "Leite", "Ovos"];

// ===== Exercício 06: Média da turma =====
// Objetivo: Somar um array e arredondar.
// 1. $notas = [8, 7.5, 9, 6].
// 2. Calcule a média com array_sum e count, arredonde com round($media, 1).
// 3. Mostre Média da turma: 7.6.
// Saída esperada:
//   Média da turma: 7.6
$notas = [8, 7.5, 9, 6];

// ===== Exercício 07: Ficha do aluno =====
// Objetivo: Criar e percorrer um array associativo.
// 1. $aluno com as chaves nome (Ana), idade (20) e curso (Laravel).
// 2. Com um foreach ($aluno as $chave => $valor), mostre nome: Ana, idade: 20, curso: Laravel.
// Saída esperada:
//   nome: Ana
//   idade: 20
//   curso: Laravel
$aluno = [
  // chave => valor
];

// ===== Exercício 08: Tabuada do 7 =====
// Objetivo: Usar o for para repetir.
// 1. Um for de 1 a 10.
// 2. Cada linha no formato 7 x 1 = 7.
// Saída esperada:
//   7 x 1 = 7
//   7 x 2 = 14
//   7 x 5 = 35
//   7 x 10 = 70


// ===== Exercício 09: Função de saudação =====
// Objetivo: Declarar uma função com tipos e valor padrão.
// 1. function saudacao(string $nome, string $inicio = "Olá"): string que devolve Olá, Ana! (o início, uma vírgula, o nome e uma exclamação).
// 2. Chame saudacao("Ana") e saudacao("Caio", "Boa noite") e mostre com echo.
// Saída esperada:
//   Olá, Ana!
//   Boa noite, Caio!
// declare a função aqui

echo saudacao("Ana"), "\n";
echo saudacao("Caio", "Boa noite"), "\n";

// ===== Exercício 10: Lista em HTML =====
// Objetivo: Gerar HTML a partir de um array (o que o Blade faz).
// 1. $cursos = ["HTML", "CSS", "JavaScript"].
// 2. Mostre , um HTML por curso e , cada tag em uma linha.
// 3. Clique em 🌐 ver como página para ver a lista renderizada.
// Saída esperada:
//   <ul>
//   <li>HTML</li>
//   <li>CSS</li>
//   <li>JavaScript</li>
//   </ul>
$cursos = ["HTML", "CSS", "JavaScript"];

