// =============================================
// AULA 1 — VARIÁVEIS, OBJETOS E MÉTODOS DE ARRAY — GABARITO
// (Entregar aos alunos só depois da correção)
// =============================================

// EXERCÍCIO 1 — Variáveis
console.log("--- Ex 1 ---");
{
  const nome = "Ana";
  let idade = 20;
  idade++;
  console.log(`${nome} tem ${idade} anos`);
}

// EXERCÍCIO 2 — Tipos de dados
console.log("--- Ex 2 ---");
{
  const texto = "10";
  const numero = 10;
  const ativo = false;
  let vazio;
  const lista = [1, 2];
  console.log(typeof texto);
  console.log(typeof numero);
  console.log(typeof ativo);
  console.log(typeof vazio);
  console.log(Array.isArray(lista));
}

// EXERCÍCIO 3 — Primeiro objeto
console.log("--- Ex 3 ---");
{
  const produto = { nome: "Caderno", preco: 15, estoque: 3 };
  console.log(`${produto.nome} custa R$ ${produto.preco}`);
  console.log(`Estoque: ${produto.estoque}`);
}

// EXERCÍCIO 4 — Alterando o objeto
console.log("--- Ex 4 ---");
{
  const produto = { nome: "Caderno", preco: 15, estoque: 3 };
  produto.preco = produto.preco * 1.1;
  produto.categoria = "papelaria";
  delete produto.estoque;
  console.log(`Preço: ${produto.preco.toFixed(2)}`);
  console.log(`Categoria: ${produto.categoria}`);
  console.log("estoque" in produto);
}

// EXERCÍCIO 5 — Método e this
console.log("--- Ex 5 ---");
{
  const conta = {
    saldo: 100,
    depositar(valor) {
      this.saldo += valor;
    },
    sacar(valor) {
      if (valor > this.saldo) {
        console.log("Saldo insuficiente");
        return;
      }
      this.saldo -= valor;
    },
  };
  conta.depositar(50);
  conta.sacar(500);
  conta.sacar(30);
  console.log(`Saldo: ${conta.saldo}`);
}

// EXERCÍCIO 6 — Percorrendo o objeto
console.log("--- Ex 6 ---");
{
  const pessoa = { nome: "Ana", idade: 20, cidade: "Recife" };
  for (const chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
  }
}

// EXERCÍCIO 7 — map
console.log("--- Ex 7 ---");
{
  const alunos = [
    { nome: "Ana", nota: 9 },
    { nome: "Caio", nota: 5 },
    { nome: "Bia", nota: 7 },
  ];
  const nomes = alunos.map((aluno) => aluno.nome.toUpperCase());
  console.log(nomes.join(", "));
}

// EXERCÍCIO 8 — filter
console.log("--- Ex 8 ---");
{
  const alunos = [
    { nome: "Ana", nota: 9 },
    { nome: "Caio", nota: 5 },
    { nome: "Bia", nota: 7 },
  ];
  const aprovados = alunos.filter((aluno) => aluno.nota >= 7);
  aprovados.forEach((aluno) => console.log(aluno.nome));
  console.log(`Total: ${aprovados.length}`);
}

// EXERCÍCIO 9 — find
console.log("--- Ex 9 ---");
{
  const alunos = [
    { nome: "Ana", nota: 9 },
    { nome: "Caio", nota: 5 },
    { nome: "Bia", nota: 7 },
  ];
  const caio = alunos.find((a) => a.nome === "Caio");
  console.log(`${caio.nome} tirou ${caio.nota}`);
  const leo = alunos.find((a) => a.nome === "Léo");
  console.log(leo ?? "Não encontrado");
}

// EXERCÍCIO 10 — reduce
console.log("--- Ex 10 ---");
{
  const carrinho = [
    { produto: "Caderno", preco: 20, qtd: 2 },
    { produto: "Caneta", preco: 3.5, qtd: 3 },
    { produto: "Mochila", preco: 89.9, qtd: 1 },
  ];
  const total = carrinho.reduce((soma, item) => soma + item.preco * item.qtd, 0);
  console.log(`Total: R$ ${total.toFixed(2)}`);
}

// EXERCÍCIO 11 — Desestruturação e spread
console.log("--- Ex 11 ---");
{
  const pessoa = { nome: "Ana", cidade: "Recife" };
  const { nome, cidade } = pessoa;
  console.log(`${nome} mora em ${cidade}`);
  const mudou = { ...pessoa, cidade: "Salvador" };
  console.log(`Original: ${pessoa.cidade}`);
  console.log(`Cópia: ${mudou.cidade}`);
}

// EXERCÍCIO 12 — Desafio: relatório da turma
console.log("--- Ex 12 ---");
{
  const alunos = [
    { nome: "Ana", nota: 9 },
    { nome: "Caio", nota: 5 },
    { nome: "Bia", nota: 7 },
  ];
  const media = alunos.reduce((s, a) => s + a.nota, 0) / alunos.length;
  console.log(`Média: ${media.toFixed(1)}`);
  const aprovados = alunos
    .filter((a) => a.nota >= 7)
    .map((a) => `${a.nome} (${a.nota})`)
    .join(", ");
  console.log(`Aprovados: ${aprovados}`);
  console.log(`Todos aprovados? ${alunos.every((a) => a.nota >= 7)}`);
}
