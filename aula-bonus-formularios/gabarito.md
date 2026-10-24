# Aula Bônus — Gabarito dos exercícios (Formulários)

> Entregar só depois da correção. Todas as soluções foram testadas no playground.

## 01 — Enviar sem recarregar
```js
const form = document.querySelector("#f");
form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  document.querySelector("#resultado").textContent = "Enviado!";
});
```

## 02 — Saudação
```js
const form = document.querySelector("#f");
form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const nome = document.querySelector("#nome").value.trim();
  document.querySelector("#resultado").textContent = `Olá, ${nome}!`;
});
```

## 03 — Campo obrigatório
```js
const form = document.querySelector("#f");
const erro = document.querySelector("#erro");
form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const nome = document.querySelector("#nome").value.trim();
  if (!nome) {
    erro.textContent = "Digite o nome";
    return;
  }
  erro.textContent = "";
  document.querySelector("#resultado").textContent = `Cadastrado: ${nome}`;
});
```

## 04 — Contador de caracteres
```js
const msg = document.querySelector("#msg");
const contador = document.querySelector("#contador");
msg.addEventListener("input", () => {
  contador.textContent = `${msg.value.length} / 100`;
});
```

## 05 — Aceite dos termos
```js
const form = document.querySelector("#f");
form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const aceito = document.querySelector("#termos").checked;
  document.querySelector("#resultado").textContent = aceito ? "Confirmado!" : "Aceite os termos";
});
```

## 06 — Select de curso
```js
const form = document.querySelector("#f");
form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const curso = document.querySelector("#curso").value;
  document.querySelector("#resultado").textContent = `Você escolheu ${curso}`;
});
```

## 07 — Calculadora
```js
const form = document.querySelector("#f");
form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const a = Number(document.querySelector("#a").value);
  const b = Number(document.querySelector("#b").value);
  document.querySelector("#resultado").textContent = `Soma: ${a + b}`;   // sem Number daria "23"
});
```

## 08 — Objeto com FormData
```js
const form = document.querySelector("#f");
form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const dados = Object.fromEntries(new FormData(form));
  document.querySelector("#saida").textContent = JSON.stringify(dados);
});
```

## 09 — Lista de tarefas
```js
const form = document.querySelector("#f");
const lista = document.querySelector("#lista");
form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const tarefa = document.querySelector("#tarefa").value.trim();
  if (!tarefa) return;
  const li = document.createElement("li");
  li.textContent = tarefa;
  lista.appendChild(li);
  form.reset();
});
```

## 10 — Desafio: validação completa
```js
const form = document.querySelector("#f");
const erro = document.querySelector("#erro");
form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const nome = document.querySelector("#nome").value.trim();
  const email = document.querySelector("#email").value;
  const idade = Number(document.querySelector("#idade").value);

  if (!nome) { erro.textContent = "Digite o nome"; return; }
  if (!email.includes("@")) { erro.textContent = "E-mail inválido"; return; }
  if (idade < 18) { erro.textContent = "Só para maiores de 18"; return; }

  erro.textContent = "";
  document.querySelector("#resultado").textContent = `Bem-vindo, ${nome}!`;
});
```
