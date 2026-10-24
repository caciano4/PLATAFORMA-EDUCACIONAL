document.querySelector("#ano").textContent = new Date().getFullYear();

const botaoTema = document.querySelector("#tema");
botaoTema.addEventListener("click", () => {
  document.body.classList.toggle("escuro");
  const ativo = document.body.classList.contains("escuro");
  botaoTema.textContent = ativo ? "☀️ Tema claro" : "🌙 Tema escuro";
});

const projetos = [
  { nome: "Site da escola", descricao: "HTML semântico e CSS responsivo.", link: "https://github.com" },
  { nome: "Lista de tarefas", descricao: "App com JavaScript e DOM.", link: "https://github.com" },
  { nome: "Calculadora de notas", descricao: "Funções e condicionais.", link: "https://github.com" },
];
const lista = document.querySelector("#lista-projetos");
projetos.forEach((p) => {
  const card = document.createElement("article");
  card.className = "card";
  card.innerHTML = `<h3>${p.nome}</h3><p>${p.descricao}</p><a href="${p.link}" target="_blank">Ver projeto</a>`;
  lista.appendChild(card);
});

const form = document.querySelector("#form-contato");
const mensagem = document.querySelector("#mensagem");
form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const nome = form.nome.value.trim();
  const email = form.email.value.trim();
  const texto = form.mensagem.value.trim();
  if (nome.length < 2) { mensagem.textContent = "Digite seu nome."; return; }
  if (!email.includes("@")) { mensagem.textContent = "Digite um e-mail válido."; return; }
  if (!texto) { mensagem.textContent = "Escreva uma mensagem."; return; }
  mensagem.textContent = `Obrigada, ${nome}! Recebi sua mensagem e respondo em breve.`;
  form.reset();
});
