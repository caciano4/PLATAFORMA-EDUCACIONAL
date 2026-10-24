// =============================================
// AULA 1 — VARIÁVEIS, OBJETOS E MÉTODOS DE ARRAY — EXERCÍCIOS
// Resolva cada exercício abaixo do enunciado.
// Também dá para resolver no site, com correção automática:
// https://site-alunos-nu.vercel.app/aula-01/
// =============================================


// EXERCÍCIO 1 — Variáveis
// Criar variáveis com let e const e atualizar uma delas.
//   1. Crie const nome = "Ana" e let idade = 20.
//   2. Aumente a idade em 1 com idade++.
//   3. Mostre `${nome} tem ${idade} anos`.
// Saída esperada:
//   Ana tem 21 anos
{
  // const nome = ...
  // let idade = ...

}


// EXERCÍCIO 2 — Tipos de dados
// Descobrir o tipo de cada valor com typeof.
//   1. Mostre typeof de cada valor da lista abaixo, um por linha.
//   2. Use Array.isArray(lista) para mostrar se lista é um array.
// Saída esperada:
//   string
//   number
//   boolean
//   undefined
//   true
{
  const texto = "10";
  const numero = 10;
  const ativo = false;
  let vazio;
  const lista = [1, 2];

  // seu código aqui

}


// EXERCÍCIO 3 — Primeiro objeto
// Criar um objeto de produto e mostrar seus dados.
//   1. Crie const produto com nome: "Caderno", preco: 15 e estoque: 3.
//   2. Mostre `${produto.nome} custa R$ ${produto.preco}`.
//   3. Mostre `Estoque: ${produto.estoque}`.
// Saída esperada:
//   Caderno custa R$ 15
//   Estoque: 3
{
  // const produto = {
  //   ...
  // };

}


// EXERCÍCIO 4 — Alterando o objeto
// Mudar o preço, adicionar uma categoria e remover o estoque.
//   1. Aumente o preço em 10%: produto.preco = produto.preco * 1.1.
//   2. Adicione produto.categoria = "papelaria".
//   3. Remova o estoque com delete.
//   4. Mostre `Preço: ${produto.preco.toFixed(2)}`, a categoria e "estoque" in produto.
// Saída esperada:
//   Preço: 16.50
//   Categoria: papelaria
//   false
{
  const produto = { nome: "Caderno", preco: 15, estoque: 3 };

  // seu código aqui

}


// EXERCÍCIO 5 — Método e this
// Criar uma conta bancária com métodos de depósito e saque.
//   1. No objeto conta, crie o método depositar(valor) que soma em this.saldo.
//   2. Crie sacar(valor): se tiver saldo, subtrai; senão mostra "Saldo insuficiente".
//   3. Deposite 50, tente sacar 500, saque 30 e mostre `Saldo: ${conta.saldo}`.
// Saída esperada:
//   Saldo insuficiente
//   Saldo: 120
{
  const conta = {
    saldo: 100,
    // depositar(valor) { ... },
    // sacar(valor) { ... },
  };

}


// EXERCÍCIO 6 — Percorrendo o objeto
// Mostrar cada campo de um objeto no formato chave: valor.
//   1. Use for (const chave in pessoa).
//   2. Mostre `${chave}: ${pessoa[chave]}` (colchetes, porque o nome está numa variável).
// Saída esperada:
//   nome: Ana
//   idade: 20
//   cidade: Recife
{
  const pessoa = { nome: "Ana", idade: 20, cidade: "Recife" };

  // seu código aqui

}


// EXERCÍCIO 7 — map
// Criar uma lista só com os nomes, em maiúsculas.
//   1. Use alunos.map((aluno) => ...) devolvendo aluno.nome.toUpperCase().
//   2. Mostre o resultado com .join(", ").
// Saída esperada:
//   ANA, CAIO, BIA
{
  const alunos = [
    { nome: "Ana", nota: 9 },
    { nome: "Caio", nota: 5 },
    { nome: "Bia", nota: 7 },
  ];

  // const nomes = alunos.map(...)

}


// EXERCÍCIO 8 — filter
// Mostrar só os alunos aprovados (nota 7 ou mais).
//   1. Use alunos.filter((aluno) => aluno.nota >= 7).
//   2. Percorra o resultado com forEach e mostre o nome de cada um.
//   3. No fim, mostre `Total: ${aprovados.length}`.
// Saída esperada:
//   Ana
//   Bia
//   Total: 2
{
  const alunos = [
    { nome: "Ana", nota: 9 },
    { nome: "Caio", nota: 5 },
    { nome: "Bia", nota: 7 },
  ];

  // const aprovados = ...

}


// EXERCÍCIO 9 — find
// Achar um aluno pelo nome.
//   1. Use alunos.find((a) => a.nome === "Caio").
//   2. Mostre `${caio.nome} tirou ${caio.nota}`.
//   3. Procure "Léo" e mostre o resultado com ?? "Não encontrado".
// Saída esperada:
//   Caio tirou 5
//   Não encontrado
{
  const alunos = [
    { nome: "Ana", nota: 9 },
    { nome: "Caio", nota: 5 },
    { nome: "Bia", nota: 7 },
  ];

  // seu código aqui

}


// EXERCÍCIO 10 — reduce
// Calcular o total de um carrinho de compras.
//   1. Use carrinho.reduce((soma, item) => soma + item.preco * item.qtd, 0).
//   2. Mostre `Total: R$ ${total.toFixed(2)}`.
// Saída esperada:
//   Total: R$ 140.40
{
  const carrinho = [
    { produto: "Caderno", preco: 20, qtd: 2 },
    { produto: "Caneta", preco: 3.5, qtd: 3 },
    { produto: "Mochila", preco: 89.9, qtd: 1 },
  ];

  // const total = ...

}


// EXERCÍCIO 11 — Desestruturação e spread
// Tirar dados de um objeto e criar uma cópia alterada sem mexer no original.
//   1. Desestruture: const { nome, cidade } = pessoa;
//   2. Mostre `${nome} mora em ${cidade}`.
//   3. Crie const mudou = { ...pessoa, cidade: "Salvador" }.
//   4. Mostre `Original: ${pessoa.cidade}` e `Cópia: ${mudou.cidade}`.
// Saída esperada:
//   Ana mora em Recife
//   Original: Recife
//   Cópia: Salvador
{
  const pessoa = { nome: "Ana", cidade: "Recife" };

  // seu código aqui

}


// EXERCÍCIO 12 — Desafio: relatório da turma
// Montar um relatório encadeando os métodos de array.
//   1. Calcule a média da turma com reduce e mostre `Média: ${media.toFixed(1)}`.
//   2. Encadeie filter (nota >= 7), map (`${a.nome} (${a.nota})`) e join(", ").
//   3. Mostre `Aprovados: ...`.
//   4. Use every para mostrar `Todos aprovados? ${...}`.
// Saída esperada:
//   Média: 7.0
//   Aprovados: Ana (9), Bia (7)
//   Todos aprovados? false
{
  const alunos = [
    { nome: "Ana", nota: 9 },
    { nome: "Caio", nota: 5 },
    { nome: "Bia", nota: 7 },
  ];

  // seu código aqui

}
