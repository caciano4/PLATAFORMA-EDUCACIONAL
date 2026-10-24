// =============================================
// AULA 6 — JAVASCRIPT ASSÍNCRONO E APIs — GABARITO
// (Entregar aos alunos só depois da correção)
// =============================================

(async () => {

console.log("--- Ex 1 ---");
await (async () => {
  console.log("Início");
  setTimeout(() => console.log("Depois de meio segundo"), 500);
  console.log("Fim");
})();
await new Promise((r) => setTimeout(r, 1600));

console.log("--- Ex 2 ---");
await (async () => {
  let contador = 3;
  const id = setInterval(() => {
    console.log(contador);
    contador--;
    if (contador === 0) {
      clearInterval(id);
      console.log("Fogo!");
    }
  }, 300);
})();
await new Promise((r) => setTimeout(r, 1600));

console.log("--- Ex 3 ---");
await (async () => {
  function esperar(ms, callback) {
    setTimeout(callback, ms);
  }
  console.log("Esperando...");
  esperar(400, () => console.log("Pronto!"));
})();
await new Promise((r) => setTimeout(r, 1600));

console.log("--- Ex 4 ---");
await (async () => {
  function sortear(numero) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (numero > 5) resolve("Você ganhou!");
        else reject(new Error("Tente de novo"));
      }, 300);
    });
  }
  sortear(8).then((msg) => console.log(msg));
  sortear(2).catch((erro) => console.log(`Erro: ${erro.message}`));
})();
await new Promise((r) => setTimeout(r, 1600));

console.log("--- Ex 5 ---");
await (async () => {
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
  buscarAluno(1).then((aluno) => console.log(`${aluno.nome} tirou ${aluno.nota}`));
  buscarAluno(3).catch((erro) => console.log(`Erro: ${erro.message}`));
})();
await new Promise((r) => setTimeout(r, 1600));

console.log("--- Ex 6 ---");
await (async () => {
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
  async function mostrarAluno(id) {
    try {
      const aluno = await buscarAluno(id);
      console.log(`${aluno.nome} tirou ${aluno.nota}`);
    } catch (erro) {
      console.log(`Erro: ${erro.message}`);
    }
  }
  await mostrarAluno(1);
  await mostrarAluno(3);
})();
await new Promise((r) => setTimeout(r, 1600));

console.log("--- Ex 7 ---");
await (async () => {
  function esperar(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  console.log("Carregando...");
  await esperar(500);
  console.log("Pronto!");
})();
await new Promise((r) => setTimeout(r, 1600));

console.log("--- Ex 8 ---");
await (async () => {
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
  const aluno = await buscarAluno(1);
  const notas = await buscarNotas(aluno.nome);
  const media = notas.reduce((s, n) => s + n, 0) / notas.length;
  console.log(`Média da ${aluno.nome}: ${media.toFixed(1)}`);
})();
await new Promise((r) => setTimeout(r, 1600));

console.log("--- Ex 9 ---");
await (async () => {
  // --- API de mentira (não mexa) ---
  function buscarPreco(produto) {
    const precos = { caderno: 20, caneta: 5, mochila: 90 };
    return new Promise((resolve) => setTimeout(() => resolve(precos[produto]), 400));
  }
  // ----------------------------------
  const precos = await Promise.all([buscarPreco("caderno"), buscarPreco("caneta"), buscarPreco("mochila")]);
  const total = precos.reduce((s, p) => s + p, 0);
  console.log(`Total: R$ ${total}`);
})();
await new Promise((r) => setTimeout(r, 1600));

console.log("--- Ex 10 ---");
await (async () => {
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
  async function carregar(url) {
    const resposta = await fetchFalso(url);
    if (!resposta.ok) {
      console.log(`Erro ${resposta.status}`);
      return;
    }
    const alunos = await resposta.json();
    const aprovados = alunos.filter((a) => a.nota >= 7).map((a) => a.nome);
    console.log(`Aprovados: ${aprovados.join(", ")}`);
  }
  await carregar("/api/alunos");
  await carregar("/api/professores");
})();
await new Promise((r) => setTimeout(r, 1600));

console.log("--- Ex 11 ---");
await (async () => {
  const cep = "01001000";

  async function buscar() {
    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const dados = await resposta.json();
    console.log("Rua: " + dados.logradouro);
    console.log("Bairro: " + dados.bairro);
    console.log("Cidade: " + dados.localidade + " - " + dados.uf);
  }
  buscar();
})();
await new Promise((r) => setTimeout(r, 1600));

console.log("--- Ex 12 ---");
await (async () => {
  async function buscarCep(cep) {
    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const dados = await resposta.json();
    if (dados.erro) {
      console.log("CEP não encontrado");
    } else {
      console.log(`${dados.logradouro}, ${dados.localidade}`);
    }
  }
  await buscarCep("01001000");
  await buscarCep("00000000");
})();
await new Promise((r) => setTimeout(r, 1600));

console.log("--- Ex 13 ---");
await (async () => {
  async function listar() {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!resposta.ok) {
      console.log("Erro " + resposta.status);
      return;
    }
    const usuarios = await resposta.json();
    console.log(`${usuarios.length} usuários`);
    usuarios.slice(0, 3).forEach((u) => console.log(`- ${u.name} (${u.address.city})`));
  }
  listar();
})();
await new Promise((r) => setTimeout(r, 1600));

console.log("--- Ex 14 ---");
await (async () => {
  async function feriados() {
    const resposta = await fetch("https://brasilapi.com.br/api/feriados/v1/2026");
    const lista = await resposta.json();
    lista.slice(0, 3).forEach((f) => {
      const [ano, mes, dia] = f.date.split("-");
      console.log(`${dia}/${mes}: ${f.name}`);
    });
  }
  feriados();
})();
await new Promise((r) => setTimeout(r, 1600));

console.log("--- Ex 15 ---");
await (async () => {
  async function pokemon(nome) {
    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`);
    return await resposta.json();
  }
  const lista = await Promise.all([pokemon("pikachu"), pokemon("charmander")]);
  lista.forEach((p) => {
    const tipos = p.types.map((t) => t.type.name).join(", ");
    console.log(`${p.name}: ${tipos} (${p.weight})`);
  });
})();
await new Promise((r) => setTimeout(r, 1600));

console.log("--- Ex 16 ---");
await (async () => {
  async function banco(codigo) {
    const resposta = await fetch(`https://brasilapi.com.br/api/banks/v1/${codigo}`);
    if (!resposta.ok) {
      console.log("Banco não encontrado");
      return;
    }
    const dados = await resposta.json();
    console.log(`${codigo}: ${dados.fullName}`);
  }
  await banco("001");
  await banco("999");
})();
await new Promise((r) => setTimeout(r, 1600));
})();
