<?php
// LARAVEL 1 — PHP: O BÁSICO — GABARITO
// Entregar só depois da correção.

// ===== Exercício 01: Apresentação =====
$nome = "Ana";
$idade = 20;
echo "Olá, eu sou $nome\n";
echo "Tenho $idade anos\n";

// ===== Exercício 02: Conta do restaurante =====
$conta = 120;
$gorjeta = $conta * 0.10;
$total = $conta + $gorjeta;
echo "Gorjeta: R$ " . number_format($gorjeta, 2, ",", ".") . "\n";
echo "Total: R$ " . number_format($total, 2, ",", ".") . "\n";

// ===== Exercício 03: Par ou ímpar =====
$n = 7;
if ($n % 2 == 0) {
  echo "$n é par\n";
} else {
  echo "$n é ímpar\n";
}

// ===== Exercício 04: Situação do aluno =====
$media = 6.5;
if ($media >= 7) {
  $situacao = "Aprovado";
} elseif ($media >= 5) {
  $situacao = "Recuperação";
} else {
  $situacao = "Reprovado";
}
echo "Média $media: $situacao\n";

// ===== Exercício 05: Lista de compras =====
$compras = ["Pão", "Leite", "Ovos"];
foreach ($compras as $item) {
  echo "- $item\n";
}
echo count($compras) . " itens\n";

// ===== Exercício 06: Média da turma =====
$notas = [8, 7.5, 9, 6];
$media = array_sum($notas) / count($notas);
echo "Média da turma: " . round($media, 1) . "\n";

// ===== Exercício 07: Ficha do aluno =====
$aluno = [
  "nome" => "Ana",
  "idade" => 20,
  "curso" => "Laravel",
];
foreach ($aluno as $chave => $valor) {
  echo "$chave: $valor\n";
}

// ===== Exercício 08: Tabuada do 7 =====
for ($i = 1; $i <= 10; $i++) {
  echo "7 x $i = " . (7 * $i) . "\n";
}

// ===== Exercício 09: Função de saudação =====
function saudacao(string $nome, string $inicio = "Olá"): string {
  return "$inicio, $nome!";
}

echo saudacao("Ana"), "\n";
echo saudacao("Caio", "Boa noite"), "\n";

// ===== Exercício 10: Lista em HTML =====
$cursos = ["HTML", "CSS", "JavaScript"];
echo "<ul>\n";
foreach ($cursos as $curso) {
  echo "<li>$curso</li>\n";
}
echo "</ul>\n";

