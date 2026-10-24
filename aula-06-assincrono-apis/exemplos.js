// =============================================
// AULA 6 — JAVASCRIPT ASSÍNCRONO E APIs
// Rode com: node exemplos.js  (cada parte espera a anterior terminar)
// =============================================

(async () => {

// ---------- PARTE 1: Síncrono x assíncrono ----------
console.log("\n===== Síncrono x assíncrono =====");
await (async () => {
  console.log("1. Pedi a pizza");

  setTimeout(() => {
    console.log("3. A pizza chegou! 🍕");
  }, 1000);

  console.log("2. Fui arrumar a mesa");
})();
await new Promise((r) => setTimeout(r, 1600));

// ---------- PARTE 2: setTimeout e clearTimeout ----------
console.log("\n===== setTimeout e clearTimeout =====");
await (async () => {
  setTimeout(() => console.log("Lembrete: beber água 💧"), 500);

  const id = setTimeout(() => {
    console.log("Isso não vai aparecer");
  }, 800);

  clearTimeout(id);   // cancelou!
  console.log("Agendado e cancelado.");
})();
await new Promise((r) => setTimeout(r, 1600));

// ---------- PARTE 3: setInterval e clearInterval ----------
console.log("\n===== setInterval e clearInterval =====");
await (async () => {
  let contador = 3;

  const id = setInterval(() => {
    console.log(contador);
    contador--;

    if (contador === 0) {
      clearInterval(id);
      console.log("Fogo! 🚀");
    }
  }, 400);
})();
await new Promise((r) => setTimeout(r, 1600));

// ---------- PARTE 4: Callbacks e o callback hell ----------
console.log("\n===== Callbacks e o callback hell =====");
await (async () => {
  function buscarUsuario(id, callback) {
    setTimeout(() => callback({ id, nome: "Ana" }), 300);
  }
  function buscarPedidos(usuario, callback) {
    setTimeout(() => callback(["Pizza", "Suco"]), 300);
  }

  buscarUsuario(1, (usuario) => {
    console.log("Usuário:", usuario.nome);
    buscarPedidos(usuario, (pedidos) => {
      console.log("Pedidos:", pedidos.join(", "));
      // e se precisasse de mais uma etapa? mais um nível...
    });
  });
})();
await new Promise((r) => setTimeout(r, 1600));

// ---------- PARTE 5: O que é uma Promise ----------
console.log("\n===== O que é uma Promise =====");
await (async () => {
  const temPizza = true;

  const pedido = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (temPizza) resolve("Pizza de calabresa 🍕");
      else reject(new Error("Acabou a massa"));
    }, 500);
  });

  console.log(pedido);   // ainda pendente!

  pedido
    .then((pizza) => console.log("Chegou:", pizza))
    .catch((erro) => console.log("Deu ruim:", erro.message));
})();
await new Promise((r) => setTimeout(r, 1600));

// ---------- PARTE 6: then, catch e finally ----------
console.log("\n===== then, catch e finally =====");
await (async () => {
  function buscarAluno(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id === 1) resolve({ nome: "Ana", nota: 9 });
        else reject(new Error("Aluno não encontrado"));
      }, 400);
    });
  }

  console.log("Carregando...");

  buscarAluno(1)
    .then((aluno) => console.log(`${aluno.nome} tirou ${aluno.nota}`))
    .catch((erro) => console.log("Erro:", erro.message))
    .finally(() => console.log("Fim da busca"));
})();
await new Promise((r) => setTimeout(r, 1600));

// ---------- PARTE 7: Encadeando thens ----------
console.log("\n===== Encadeando thens =====");
await (async () => {
  const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  esperar(300)
    .then(() => {
      console.log("Etapa 1: usuário encontrado");
      return esperar(300);
    })
    .then(() => {
      console.log("Etapa 2: pedidos carregados");
      return "tudo certo";
    })
    .then((msg) => console.log("Etapa 3:", msg))
    .catch((erro) => console.log("Erro em alguma etapa:", erro.message));
})();
await new Promise((r) => setTimeout(r, 1600));

// ---------- PARTE 8: async e await ----------
console.log("\n===== async e await =====");
await (async () => {
  function buscarAluno(id) {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ id, nome: "Ana", nota: 9 }), 400);
    });
  }

  async function mostrarAluno() {
    console.log("Buscando...");
    const aluno = await buscarAluno(1);   // espera aqui
    console.log(`${aluno.nome} tirou ${aluno.nota}`);
  }

  mostrarAluno();
})();
await new Promise((r) => setTimeout(r, 1600));

// ---------- PARTE 9: try/catch com await ----------
console.log("\n===== try/catch com await =====");
await (async () => {
  function buscarAluno(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id === 1) resolve({ nome: "Ana" });
        else reject(new Error("Aluno não encontrado"));
      }, 400);
    });
  }

  async function mostrar(id) {
    try {
      const aluno = await buscarAluno(id);
      console.log("Achei:", aluno.nome);
    } catch (erro) {
      console.log("Erro:", erro.message);
    } finally {
      console.log("Busca encerrada");
    }
  }

  mostrar(7);
})();
await new Promise((r) => setTimeout(r, 1600));

// ---------- PARTE 10: Promise.all: várias ao mesmo tempo ----------
console.log("\n===== Promise.all: várias ao mesmo tempo =====");
await (async () => {
  const buscar = (nome, ms) => new Promise((r) => setTimeout(() => r(nome), ms));

  async function emSequencia() {
    const t0 = Date.now();
    await buscar("A", 500);
    await buscar("B", 500);
    console.log("Em sequência:", Date.now() - t0, "ms");
  }

  async function emParalelo() {
    const t0 = Date.now();
    const resultados = await Promise.all([buscar("A", 500), buscar("B", 500)]);
    console.log("Em paralelo:", Date.now() - t0, "ms", resultados);
  }

  await emSequencia();
  await emParalelo();
})();
await new Promise((r) => setTimeout(r, 1600));

// ---------- PARTE 11: O que é uma API (e como ler a resposta) ----------
console.log("\n===== O que é uma API (e como ler a resposta) =====");
await (async () => {
  async function espiar() {
    const resposta = await fetch("https://viacep.com.br/ws/01001000/json/");
    console.log("status:", resposta.status, "| ok:", resposta.ok);
    console.log("tipo:", resposta.headers.get("content-type"));

    const texto = await resposta.text();      // o corpo cru, um texto
    console.log("texto cru:", texto.slice(0, 60) + "...");

    const dados = JSON.parse(texto);          // vira objeto (o .json() faz isso por você)
    console.log("objeto:", dados.logradouro, "-", dados.localidade);
  }
  espiar();
})();
await new Promise((r) => setTimeout(r, 1600));

// ---------- PARTE 12: fetch: buscando um CEP de verdade ----------
console.log("\n===== fetch: buscando um CEP de verdade =====");
await (async () => {
  const cep = "01001000";

  async function buscarCep() {
    console.log("Buscando o CEP", cep, "...");
    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const dados = await resposta.json();

    console.log("Rua:", dados.logradouro);
    console.log("Bairro:", dados.bairro);
    console.log("Cidade:", `${dados.localidade} - ${dados.uf}`);
  }

  buscarCep().catch((erro) => console.log("Sem conexão?", erro.message));
})();
await new Promise((r) => setTimeout(r, 1600));

// ---------- PARTE 13: fetch com lista, ok e tratamento de erro ----------
console.log("\n===== fetch com lista, ok e tratamento de erro =====");
await (async () => {
  async function listarUsuarios() {
    try {
      const resposta = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!resposta.ok) {
        console.log("Erro do servidor:", resposta.status);
        return;
      }
      const usuarios = await resposta.json();
      console.log(`Chegaram ${usuarios.length} usuários:`);
      usuarios.slice(0, 5).forEach((u) => console.log("-", u.name, "|", u.address.city));
    } catch (erro) {
      console.log("Falha na conexão:", erro.message);
    }
  }

  listarUsuarios();
})();
await new Promise((r) => setTimeout(r, 1600));

// ---------- PARTE 14: Quiz: em que ordem aparece? ----------
console.log("\n===== Quiz: em que ordem aparece? =====");
await (async () => {
  console.log("A");

  setTimeout(() => console.log("B (timer de 0 ms)"), 0);

  Promise.resolve().then(() => console.log("C (then)"));

  console.log("D");

  // Resposta: A, D, C, B
})();
await new Promise((r) => setTimeout(r, 1600));

// ---------- PARTE 15: PokéAPI: dados de um Pokémon ----------
console.log("\n===== PokéAPI: dados de um Pokémon =====");
await (async () => {
  async function pokemon(nome) {
    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`);
    if (!resposta.ok) {
      console.log("Não achei esse Pokémon (status", resposta.status + ")");
      return;
    }
    const p = await resposta.json();
    console.log("Nome:", p.name, "| nº", p.id);
    console.log("Altura:", p.height / 10, "m | Peso:", p.weight / 10, "kg");
    console.log("Tipos:", p.types.map((t) => t.type.name).join(", "));
  }
  pokemon("pikachu");
})();
await new Promise((r) => setTimeout(r, 1600));

// ---------- PARTE 16: BrasilAPI: feriados, bancos e DDD ----------
console.log("\n===== BrasilAPI: feriados, bancos e DDD =====");
await (async () => {
  async function brasil() {
    const feriados = await (await fetch("https://brasilapi.com.br/api/feriados/v1/2026")).json();
    console.log(feriados.length, "feriados nacionais em 2026. O primeiro:", feriados[0].name, "em", feriados[0].date);

    const banco = await (await fetch("https://brasilapi.com.br/api/banks/v1/001")).json();
    console.log("Banco 001:", banco.fullName);

    const ddd = await (await fetch("https://brasilapi.com.br/api/ddd/v1/81")).json();
    console.log("DDD 81:", ddd.state, "com", ddd.cities.length, "cidades, ex.:", ddd.cities.slice(0, 3).join(", "));
  }
  brasil();
})();
await new Promise((r) => setTimeout(r, 1600));

// ---------- PARTE 17: Clima agora (Open-Meteo) ----------
console.log("\n===== Clima agora (Open-Meteo) =====");
await (async () => {
  const lat = -8.05, lon = -34.88;   // Recife

  async function clima() {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
    const dados = await (await fetch(url)).json();
    const agora = dados.current_weather;
    console.log(`Temperatura: ${agora.temperature} °C`);
    console.log(`Vento: ${agora.windspeed} km/h`);
    console.log(agora.is_day ? "É dia ☀️" : "É noite 🌙");
  }
  clima();
})();
await new Promise((r) => setTimeout(r, 1600));

// ---------- PARTE 18: Cotação do dólar (AwesomeAPI) ----------
console.log("\n===== Cotação do dólar (AwesomeAPI) =====");
await (async () => {
  async function dolar() {
    const dados = await (await fetch("https://economia.awesomeapi.com.br/last/USD-BRL")).json();
    const cotacao = Number(dados.USDBRL.bid);
    console.log(`1 dólar = R$ ${cotacao.toFixed(2)}`);
    console.log(`100 dólares = R$ ${(100 * cotacao).toFixed(2)}`);
    console.log("Variação hoje:", dados.USDBRL.pctChange + "%");
  }
  dolar();
})();
await new Promise((r) => setTimeout(r, 1600));

// ---------- PARTE 19: GitHub: o perfil de um usuário ----------
console.log("\n===== GitHub: o perfil de um usuário =====");
await (async () => {
  async function perfil(usuario) {
    const resposta = await fetch(`https://api.github.com/users/${usuario}`);
    if (!resposta.ok) {
      console.log("Erro", resposta.status, resposta.status === 404 ? "(usuário não existe)" : "(limite de pedidos?)");
      return;
    }
    const dados = await resposta.json();
    console.log(dados.name, "(@" + dados.login + ")");
    console.log("Repositórios públicos:", dados.public_repos, "| Seguidores:", dados.followers);
  }
  perfil("octocat");
})();
await new Promise((r) => setTimeout(r, 1600));
})();
