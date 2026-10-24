<?php
// LARAVEL 1 — PHP: O BÁSICO
// Exemplos da aula. Rode no site: https://site-alunos-nu.vercel.app/php-01/
// Para rodar no computador (se tiver PHP): php exemplos.php

// ===== 01. O que é PHP e onde ele roda (O básico) =====
echo "Olá, mundo!\n";
echo "PHP rodando no navegador.\n";
echo "Versão: " . PHP_VERSION;

// ===== 02. Variáveis: toda variável começa com $ (O básico) =====
$nome = "Ana";       // string
$idade = 20;         // int
$altura = 1.68;      // float
$ativa = true;       // bool

echo $nome, "\n";
var_dump($idade);
var_dump($altura);
var_dump($ativa);

$idade = $idade + 1; // pode mudar, como o let
echo $idade;

// ===== 03. dd(): espiando valores do jeito do Laravel (O básico) =====
$aluno = [
  "nome" => "Ana",
  "idade" => 20,
  "notas" => [8, 9.5, 7],
  "ativa" => true,
];

dump("Começando…");      // mostra e continua
dd($aluno);               // mostra e PARA aqui

echo "Esta linha nunca roda, porque o dd parou tudo.";

// ===== 04. Strings: ponto, aspas e funções (O básico) =====
$nome = "ana souza";

echo "Olá, $nome!\n";              // aspas duplas: substitui a variável
echo 'Olá, $nome!' . "\n";         // aspas simples: não substitui
echo "Tamanho: " . strlen($nome) . "\n";
echo strtoupper($nome) . "\n";
echo ucfirst($nome) . "\n";
echo str_replace("souza", "Silva", $nome) . "\n";
echo trim("   com espaços   ") . "|\n";

// ===== 05. Números e operadores (O básico) =====
$preco = 49.9;
$quantidade = 3;
$total = $preco * $quantidade;

echo $total, "\n";
echo 10 / 3, "\n";
echo intdiv(10, 3), "\n";
echo 10 % 3, "\n";
echo 2 ** 10, "\n";
echo round(10 / 3, 2), "\n";
echo "Total: R$ " . number_format($total, 2, ",", ".") . "\n";

// ===== 06. if, elseif e else (Decisões e repetição) =====
$media = 6.5;

if ($media >= 7) {
  echo "Aprovado\n";
} elseif ($media >= 5) {
  echo "Recuperação\n";
} else {
  echo "Reprovado\n";
}

$situacao = $media >= 7 ? "passou" : "não passou";
echo $situacao, "\n";

var_dump("7" == 7);   // true: compara o valor
var_dump("7" === 7);  // false: tipo diferente

$dia = 6;
echo match (true) {
  $dia == 6, $dia == 7 => "fim de semana",
  default => "dia útil",
}, "\n";

// ===== 07. Arrays: a lista (Decisões e repetição) =====
$frutas = ["banana", "maçã", "uva"];
$frutas[] = "manga";            // push

echo count($frutas), " frutas\n";
echo $frutas[0], "\n";        // índice começa em 0

foreach ($frutas as $fruta) {
  echo "- $fruta\n";
}

echo implode(", ", $frutas), "\n";
var_dump(in_array("uva", $frutas));

$notas = [8, 7.5, 9];
echo "Soma: " . array_sum($notas) . "\n";

// ===== 08. Arrays associativos: o "objeto" do PHP (Decisões e repetição) =====
$aluno = [
  "nome" => "Ana",
  "idade" => 20,
  "curso" => "Laravel",
];

echo $aluno["nome"], "\n";
$aluno["idade"] = 21;            // alterar
$aluno["ativa"] = true;          // adicionar

foreach ($aluno as $chave => $valor) {
  echo "$chave: $valor\n";
}

// lista de "objetos": o formato que vem do banco
$turma = [
  ["nome" => "Ana", "nota" => 9],
  ["nome" => "Caio", "nota" => 7],
];
foreach ($turma as $a) {
  echo $a["nome"] . " tirou " . $a["nota"] . "\n";
}
echo json_encode($turma), "\n";   // vira JSON, como no JS

// ===== 09. for, while, break e continue (Decisões e repetição) =====
for ($i = 1; $i <= 5; $i++) {
  echo "7 x $i = " . (7 * $i) . "\n";
}

$n = 1;
while ($n <= 10) {
  if ($n == 4) { $n++; continue; }   // pula o 4
  if ($n > 6) break;                  // para no 6
  echo $n, " ";
  $n++;
}
echo "\n";

// ===== 10. Funções com tipos (Funções) =====
function saudacao(string $nome, string $inicio = "Olá"): string {
  return "$inicio, $nome!";
}

function media(array $notas): float {
  return array_sum($notas) / count($notas);
}

echo saudacao("Ana"), "\n";
echo saudacao("Caio", "Boa tarde"), "\n";
echo media([8, 9, 7]), "\n";

$dobro = fn($x) => $x * 2;
echo $dobro(21), "\n";

$notas = [4, 8, 6, 9];
$aprovadas = array_filter($notas, fn($n) => $n >= 6);   // filter
$dobradas = array_map(fn($n) => $n * 2, $notas);         // map
echo implode(", ", $aprovadas), "\n";
echo implode(", ", $dobradas), "\n";

// ===== 11. PHP gerando HTML (Funções) =====
$titulo = "Cursos da Greenn School";
$cursos = ["HTML", "CSS", "JavaScript", "Laravel"];
?>
<h1><?php echo $titulo; ?></h1>
<p>Temos <?= count($cursos) ?> cursos:</p>
<ul>
<?php foreach ($cursos as $curso): ?>
  <li><?= $curso ?></li>
<?php endforeach; ?>
</ul>

// ===== 12. Área livre (Livre) =====
$x = 10;
echo $x;

