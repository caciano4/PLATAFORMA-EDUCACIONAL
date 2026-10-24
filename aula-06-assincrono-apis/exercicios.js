// =============================================
// AULA 6 — JAVASCRIPT ASSÍNCRONO E APIs — EXERCÍCIOS
// Resolva cada exercício abaixo do enunciado.
// Também dá para resolver no site, com correção automática:
// https://site-alunos-nu.vercel.app/aula-06/
// =============================================


// EXERCÍCIO 1 — setTimeout
// Fazer uma mensagem aparecer depois das outras, usando um timer.
//   1. Mostre "Início".
//   2. Agende com setTimeout a mensagem "Depois de meio segundo" para 500 ms.
//   3. Logo abaixo (fora do setTimeout), mostre "Fim". Repare na ordem!
// Saída esperada:
//   Início
//   Fim
//   Depois de meio segundo
{
  console.log("Início");

  // setTimeout(...)

}


// EXERCÍCIO 2 — setInterval
// Fazer uma contagem regressiva com intervalo e parar no fim.
//   1. Crie let contador = 3.
//   2. Com setInterval (a cada 300 ms), mostre o contador e diminua 1.
//   3. Quando chegar a 0, use clearInterval(id) e mostre "Fogo!".
// Saída esperada:
//   3
//   2
//   1
//   Fogo!
{
  let contador = 3;

  // const id = setInterval(() => {
  //   ...
  // }, 300);

}


// EXERCÍCIO 3 — Callback
// Completar uma função que recebe um callback e chamá-la.
//   1. Complete esperar(ms, callback): dentro, use setTimeout(callback, ms).
//   2. Mostre "Esperando...".
//   3. Chame esperar(400, () => console.log("Pronto!")).
// Saída esperada:
//   Esperando...
//   Pronto!
{
  function esperar(ms, callback) {
    // seu código aqui
  }

}


// EXERCÍCIO 4 — Criando uma Promise
// Criar uma Promise que pode dar certo ou errado e tratar os dois casos.
//   1. Complete sortear(numero) devolvendo new Promise((resolve, reject) => { ... }).
//   2. Depois de 300 ms: se o número for maior que 5, resolve("Você ganhou!"); senão, reject(new Error("Tente de novo")).
//   3. Chame sortear(8) com .then mostrando o resultado.
//   4. Chame sortear(2) com .catch mostrando `Erro: ${erro.message}`.
// Saída esperada:
//   Você ganhou!
//   Erro: Tente de novo
{
  function sortear(numero) {
    // return new Promise((resolve, reject) => {
    //   ...
    // });
  }

}


// EXERCÍCIO 5 — then e catch
// Consumir a API de alunos com then e catch.
//   1. Chame buscarAluno(1) e, no .then, mostre `${aluno.nome} tirou ${aluno.nota}`.
//   2. Chame buscarAluno(3) (não existe) e, no .catch, mostre `Erro: ${erro.message}`.
// Saída esperada:
//   Ana tirou 9
//   Erro: Aluno não encontrado
{
  // --- API de mentira (não mexa): simula um servidor que demora para responder ---
  function buscarAluno(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const alunos = { 1: { nome: "Ana", nota: 9 }, 2: { nome: "Caio", nota: 5 } };
        if (alunos[id]) resolve(alunos[id]);
        else reject(new Error("Aluno não encontrado"));
      }, 300);
    });
  }
  // ---------------------------------------------------------------------------------

  // seu código aqui

}


// EXERCÍCIO 6 — async/await
// Reescrever o exercício anterior com async/await e try/catch.
//   1. Crie async function mostrarAluno(id).
//   2. Dentro de um try: const aluno = await buscarAluno(id); e mostre `${aluno.nome} tirou ${aluno.nota}`.
//   3. No catch (erro), mostre `Erro: ${erro.message}`.
//   4. Chame await mostrarAluno(1); e depois await mostrarAluno(3);
// Saída esperada:
//   Ana tirou 9
//   Erro: Aluno não encontrado
{
  // --- API de mentira (não mexa): simula um servidor que demora para responder ---
  function buscarAluno(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const alunos = { 1: { nome: "Ana", nota: 9 }, 2: { nome: "Caio", nota: 5 } };
        if (alunos[id]) resolve(alunos[id]);
        else reject(new Error("Aluno não encontrado"));
      }, 300);
    });
  }
  // ---------------------------------------------------------------------------------

  // async function mostrarAluno(id) {
  //   try { ... } catch (erro) { ... }
  // }

}


// EXERCÍCIO 7 — Função esperar
// Criar a função esperar(ms) que devolve uma Promise, para usar com await.
//   1. Complete esperar(ms): return new Promise((resolve) => setTimeout(resolve, ms));
//   2. Mostre "Carregando...".
//   3. await esperar(500);
//   4. Mostre "Pronto!".
// Saída esperada:
//   Carregando...
//   Pronto!
{
  function esperar(ms) {
    // seu código aqui
  }

}


// EXERCÍCIO 8 — Uma etapa depois da outra
// Buscar o aluno e, com o nome dele, buscar as notas e calcular a média.
//   1. const aluno = await buscarAluno(1);
//   2. const notas = await buscarNotas(aluno.nome);
//   3. Calcule a média com reduce (Aula 1!).
//   4. Mostre `Média da ${aluno.nome}: ${media.toFixed(1)}`.
// Saída esperada:
//   Média da Ana: 9.0
{
  // --- API de mentira (não mexa): simula um servidor que demora para responder ---
  function buscarAluno(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const alunos = { 1: { nome: "Ana", nota: 9 }, 2: { nome: "Caio", nota: 5 } };
        if (alunos[id]) resolve(alunos[id]);
        else reject(new Error("Aluno não encontrado"));
      }, 300);
    });
  }
  function buscarNotas(nome) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(nome === "Ana" ? [8, 9, 10] : [5, 6, 4]), 300);
    });
  }
  // ---------------------------------------------------------------------------------

  // seu código aqui

}


// EXERCÍCIO 9 — Promise.all
// Buscar 3 preços ao mesmo tempo e somar.
//   1. Use await Promise.all([buscarPreco("caderno"), buscarPreco("caneta"), buscarPreco("mochila")]).
//   2. O resultado é um array com os 3 preços: some com reduce.
//   3. Mostre `Total: R$ ${total}`.
// Saída esperada:
//   Total: R$ 115
{
  // --- API de mentira (não mexa) ---
  function buscarPreco(produto) {
    const precos = { caderno: 20, caneta: 5, mochila: 90 };
    return new Promise((resolve) => setTimeout(() => resolve(precos[produto]), 400));
  }
  // ----------------------------------

  // seu código aqui

}


// EXERCÍCIO 10 — Desafio: consumindo uma API
// Usar o padrão do fetch (resposta, ok, json) para listar os aprovados e tratar o erro 404.
//   1. const resposta = await fetchFalso("/api/alunos");
//   2. Se !resposta.ok, mostre `Erro ${resposta.status}`; senão, const alunos = await resposta.json();
//   3. Filtre os aprovados (nota >= 7) e mostre `Aprovados: ${...join(", ")}`.
//   4. Coloque tudo numa função async function carregar(url) e chame com "/api/alunos" e depois com "/api/professores".
// Saída esperada:
//   Aprovados: Ana, Bia
//   Erro 404
{
  // --- fetch de mentira (não mexa): funciona igual ao fetch de verdade ---
  function fetchFalso(url) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const banco = {
          "/api/alunos": [
            { nome: "Ana", nota: 9 }, { nome: "Caio", nota: 5 }, { nome: "Bia", nota: 7 },
          ],
        };
        const existe = url in banco;
        resolve({
          ok: existe,
          status: existe ? 200 : 404,
          json: async () => banco[url],
        });
      }, 300);
    });
  }
  // ------------------------------------------------------------------------

  // async function carregar(url) {
  //   ...
  // }

}


// EXERCÍCIO 11 — CEP de verdade (ViaCEP)
// Consumir uma API pública: buscar um CEP e mostrar o endereço.
//   1. Dentro de uma async function buscar(), faça const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`).
//   2. Converta com const dados = await resposta.json().
//   3. Mostre Rua:  + dados.logradouro, Bairro:  + dados.bairro e Cidade:  + dados.localidade +  -  + dados.uf.
//   4. Chame a função.
// Saída esperada:
//   Rua: Praça da Sé
//   Bairro: Sé
//   Cidade: São Paulo - SP
{
  const cep = "01001000";

  // async function buscar() { ... }

}


// EXERCÍCIO 12 — CEP que não existe
// Tratar a resposta de erro de uma API.
//   1. Crie async function buscarCep(cep) que busca no ViaCEP e lê o JSON.
//   2. Se dados.erro existir, mostre CEP não encontrado; senão, mostre `${dados.logradouro}, ${dados.localidade}`.
//   3. Chame com await buscarCep("01001000") e depois await buscarCep("00000000") (o await garante a ordem).
// Saída esperada:
//   Praça da Sé, São Paulo
//   CEP não encontrado
{
  // async function buscarCep(cep) { ... }

  // await buscarCep("01001000");
  // await buscarCep("00000000");

}


// EXERCÍCIO 13 — Usuários de uma API
// Consumir uma API que devolve uma lista de objetos.
//   1. Busque https://jsonplaceholder.typicode.com/users e confira resposta.ok (se não, mostre Erro + status e pare).
//   2. Leia o JSON e mostre `${usuarios.length} usuários`.
//   3. Para os 3 primeiros (slice(0, 3)), mostre `- ${u.name} (${u.address.city})`.
// Saída esperada:
//   10 usuários
//   - Leanne Graham (Gwenborough)
//   - Ervin Howell (Wisokyburgh)
//   - Clementine Bauch (McKenziehaven)
{
  async function listar() {
    // fetch, ok, json, length e slice(0, 3)
  }
  listar();

}


// EXERCÍCIO 14 — Feriados do ano (BrasilAPI)
// Consumir uma API e formatar os dados antes de mostrar.
//   1. Busque https://brasilapi.com.br/api/feriados/v1/2026 e leia o JSON (uma lista de objetos com date e name).
//   2. Para os 3 primeiros, mostre DD/MM: nome. A data vem como 2026-01-01: use split("-") e pegue o dia e o mês.
// Saída esperada:
//   01/01: Confraternização mundial
//   16/02: Carnaval
//   17/02: Carnaval
{
  async function feriados() {
    // fetch, json, slice(0, 3) e split("-")
  }
  feriados();

}


// EXERCÍCIO 15 — Dois Pokémon ao mesmo tempo
// Usar Promise.all com uma API de verdade e ler dados aninhados.
//   1. Crie async function pokemon(nome) que busca https://pokeapi.co/api/v2/pokemon/${nome} e devolve o JSON.
//   2. Com Promise.all, busque pikachu e charmander ao mesmo tempo.
//   3. Para cada um, mostre `${p.name}: ${tipos} (${p.weight})`, em que tipos é p.types.map((t) => t.type.name).join(", ").
// Saída esperada:
//   pikachu: electric (60)
//   charmander: fire (85)
{
  // async function pokemon(nome) { ... return dados; }

  // const [a, b] = await Promise.all([...]);

}


// EXERCÍCIO 16 — Banco pelo código
// Tratar o 404 de uma API de verdade.
//   1. Crie async function banco(codigo) que busca https://brasilapi.com.br/api/banks/v1/${codigo}.
//   2. Se !resposta.ok, mostre Banco não encontrado; senão, mostre `${codigo}: ${dados.fullName}`.
//   3. Chame com await banco("001") e await banco("999").
// Saída esperada:
//   001: Banco do Brasil S.A.
//   Banco não encontrado
{
  // async function banco(codigo) { ... }

  // await banco("001");
  // await banco("999");

}
