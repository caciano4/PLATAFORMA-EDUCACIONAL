// =============================================
// AULA 1 — VARIÁVEIS, OBJETOS E MÉTODOS DE ARRAY
// Rode com: node exemplos.js
// =============================================

// ---------- PARTE 1: O que é uma variável ----------
console.log("\n===== O que é uma variável =====");
{
  let idade = 20;            // let: o valor pode mudar
  const escola = "Greenn";   // const: o valor fica fixo

  console.log(idade, escola);

  idade = 21;                // trocou o conteúdo da caixa
  idade++;                   // 22
  console.log("Agora:", idade);
}

// ---------- PARTE 2: let, const e var ----------
console.log("\n===== let, const e var =====");
{
  if (true) {
    let dentroLet = "só existe aqui";
    var dentroVar = "vaza do bloco";
  }

  console.log(dentroVar);           // var escapou do bloco!
  console.log(typeof dentroLet);    // "undefined": let respeitou o bloco
}

// ---------- PARTE 3: Tipos de dados e typeof ----------
console.log("\n===== Tipos de dados e typeof =====");
{
  console.log(typeof "Ana");          // string
  console.log(typeof 42);             // number
  console.log(typeof true);           // boolean
  console.log(typeof undefined);      // undefined
  console.log(typeof null);           // object (bug histórico!)
  console.log(typeof [1, 2]);         // object
  console.log(Array.isArray([1, 2])); // true

  let semValor;
  console.log(semValor);              // undefined: criada, mas vazia
}

// ---------- PARTE 4: Nomes de variáveis e o const que muda ----------
console.log("\n===== Nomes de variáveis e o const que muda =====");
{
  const nomeCompleto = "Ana Souza";   // camelCase
  const idade2 = 30;                  // número no fim pode

  const frutas = ["maçã"];
  frutas.push("uva");                 // pode: mexeu DENTRO da caixa
  console.log(frutas);

  const aluno = { nome: "Ana" };
  aluno.nome = "Bia";                 // pode: alterou uma propriedade
  console.log(aluno);
}

// ---------- PARTE 5: Criando um objeto ----------
console.log("\n===== Criando um objeto =====");
{
  const aluno = {
    nome: "Ana",
    idade: 20,
    aprovado: true,
    notas: [8, 9, 10],
  };

  console.log(aluno.nome);
  console.log(aluno["idade"]);
  console.log(aluno.notas[1]);
  console.log(`${aluno.nome} tem ${aluno.idade} anos`);
}

// ---------- PARTE 6: Alterar, adicionar e remover ----------
console.log("\n===== Alterar, adicionar e remover =====");
{
  const produto = { nome: "Caderno", preco: 15 };

  produto.preco = 18;          // altera
  produto.estoque = 3;         // adiciona
  delete produto.estoque;      // remove
  console.log(produto);

  const campo = "nome";
  console.log(produto[campo]); // colchetes com variável

  console.log("preco" in produto);  // true: a chave existe?
}

// ---------- PARTE 7: Métodos: funções dentro do objeto ----------
console.log("\n===== Métodos: funções dentro do objeto =====");
{
  const conta = {
    titular: "Ana",
    saldo: 100,
    depositar(valor) {
      this.saldo += valor;
    },
    extrato() {
      return `${this.titular}: R$ ${this.saldo}`;
    },
  };

  conta.depositar(50);
  console.log(conta.extrato());
}

// ---------- PARTE 8: Percorrendo um objeto ----------
console.log("\n===== Percorrendo um objeto =====");
{
  const pessoa = { nome: "Ana", idade: 20, cidade: "Recife" };

  console.log(Object.keys(pessoa));
  console.log(Object.values(pessoa));

  for (const chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
  }
}

// ---------- PARTE 9: Lista de objetos ----------
console.log("\n===== Lista de objetos =====");
{
  const alunos = [
    { nome: "Ana", nota: 9 },
    { nome: "Caio", nota: 5 },
    { nome: "Bia", nota: 7 },
  ];

  console.log(alunos[0].nome);
  console.log(alunos.length);

  for (const aluno of alunos) {
    console.log(`${aluno.nome}: ${aluno.nota}`);
  }
}

// ---------- PARTE 10: map: transformar cada item ----------
console.log("\n===== map: transformar cada item =====");
{
  const alunos = [
    { nome: "Ana", nota: 9 },
    { nome: "Caio", nota: 5 },
    { nome: "Bia", nota: 7 },
  ];

  const nomes = alunos.map((aluno) => aluno.nome);
  console.log(nomes);

  const dobro = [1, 2, 3].map((n) => n * 2);
  console.log(dobro);
}

// ---------- PARTE 11: filter: escolher alguns itens ----------
console.log("\n===== filter: escolher alguns itens =====");
{
  const alunos = [
    { nome: "Ana", nota: 9 },
    { nome: "Caio", nota: 5 },
    { nome: "Bia", nota: 7 },
  ];

  const aprovados = alunos.filter((aluno) => aluno.nota >= 7);
  console.log(aprovados);
  console.log(aprovados.length);
}

// ---------- PARTE 12: find, some e every ----------
console.log("\n===== find, some e every =====");
{
  const alunos = [
    { nome: "Ana", nota: 9 },
    { nome: "Caio", nota: 5 },
    { nome: "Bia", nota: 7 },
  ];

  const caio = alunos.find((a) => a.nome === "Caio");
  console.log(caio);

  console.log(alunos.some((a) => a.nota < 6));   // alguém abaixo de 6?
  console.log(alunos.every((a) => a.nota > 4));  // todos acima de 4?
}

// ---------- PARTE 13: reduce: juntar tudo num valor só ----------
console.log("\n===== reduce: juntar tudo num valor só =====");
{
  const carrinho = [
    { produto: "Caderno", preco: 20, qtd: 2 },
    { produto: "Caneta", preco: 3.5, qtd: 3 },
  ];

  const total = carrinho.reduce((soma, item) => soma + item.preco * item.qtd, 0);
  console.log(`Total: R$ ${total}`);

  // o mesmo com for...of, para comparar:
  let total2 = 0;
  for (const item of carrinho) total2 += item.preco * item.qtd;
  console.log(total2);
}

// ---------- PARTE 14: includes, join, sort e encadeamento ----------
console.log("\n===== includes, join, sort e encadeamento =====");
{
  const cores = ["azul", "verde"];
  console.log(cores.includes("verde"));
  console.log(cores.join(" e "));

  const alunos = [
    { nome: "Ana", nota: 9 },
    { nome: "Caio", nota: 5 },
    { nome: "Bia", nota: 7 },
  ];

  const ranking = [...alunos].sort((a, b) => a.nota - b.nota);
  console.log(ranking.map((a) => a.nome).join(", "));

  const texto = alunos
    .filter((a) => a.nota >= 7)
    .map((a) => a.nome)
    .join(", ");
  console.log("Aprovados:", texto);
}

// ---------- PARTE 15: Desestruturação ----------
console.log("\n===== Desestruturação =====");
{
  const aluno = { nome: "Ana", nota: 9, cidade: "Recife" };

  const { nome, nota } = aluno;
  console.log(nome, nota);

  const [primeiro, segundo] = ["ouro", "prata", "bronze"];
  console.log(primeiro, segundo);

  // também nos parâmetros de uma função:
  function apresentar({ nome, cidade }) {
    return `${nome} mora em ${cidade}`;
  }
  console.log(apresentar(aluno));
}

// ---------- PARTE 16: Spread: copiar e juntar ----------
console.log("\n===== Spread: copiar e juntar =====");
{
  const lista = [1, 2, 3];
  const copia = [...lista, 4];
  console.log(lista, copia);

  const juntos = [...["a", "b"], ...["c"]];
  console.log(juntos);

  const aluno = { nome: "Ana", nota: 9 };
  const atualizado = { ...aluno, nota: 10 };
  console.log(aluno.nota, atualizado.nota);
}

// ---------- PARTE 17: JSON: objetos viram texto ----------
console.log("\n===== JSON: objetos viram texto =====");
{
  const aluno = { nome: "Ana", notas: [8, 9] };

  const texto = JSON.stringify(aluno);
  console.log(texto);
  console.log(typeof texto);

  const deVolta = JSON.parse(texto);
  console.log(deVolta.notas[1]);
}

// ---------- PARTE 18: ?. e ??: evitando erros com dados que faltam ----------
console.log("\n===== ?. e ??: evitando erros com dados que faltam =====");
{
  const aluno = { nome: "Ana", endereco: null };

  console.log(aluno.endereco?.cidade);              // undefined, sem erro
  console.log(aluno.endereco?.cidade ?? "Sem cidade"); // valor padrão

  const config = { volume: 0 };
  console.log(config.volume ?? 50);   // 0 (?? só troca null/undefined)
  console.log(config.volume || 50);   // 50 (|| troca qualquer falsy!)
}
