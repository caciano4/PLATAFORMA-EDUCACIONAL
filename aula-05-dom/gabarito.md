# Aula 5 — Gabarito dos exercícios (DOM)

> Entregar só depois da correção. Todas as soluções foram testadas no playground.

## 01 — Ler e trocar o título
```js
const titulo = document.getElementById("titulo");
console.log(titulo.textContent);      // Green School
titulo.textContent = "Olá, DOM!";
```

## 02 — Listar os itens
```js
const itens = document.querySelectorAll(".item");
itens.forEach((item) => {
  console.log(item.textContent);
});
```

## 03 — Mudar o estilo
```js
const titulo = document.querySelector("#titulo");
titulo.style.color = "green";
titulo.style.fontSize = "40px";       // texto, com unidade
```

## 04 — Classes
```js
document.querySelector(".card").classList.add("destaque");
document.querySelector("#aviso").classList.remove("oculto");
```

## 05 — Atributos do link
```js
const link = document.querySelector("#link");
console.log(link.getAttribute("href"));          // pagina.html
link.setAttribute("href", "https://developer.mozilla.org");
link.setAttribute("target", "_blank");
```

## 06 — Navegando pelos irmãos
```js
const bia = document.getElementById("bia");
console.log(bia.previousElementSibling.textContent);   // Ana
console.log(bia.nextElementSibling.textContent);       // Léo
console.log(`Total: ${bia.parentElement.children.length}`);
```

## 07 — Primeiro clique
```js
const btn = document.querySelector("#btn");
const mensagem = document.querySelector("#mensagem");

btn.addEventListener("click", () => {
  mensagem.textContent = "Botão clicado!";
});
```

## 08 — Contador
```js
const numero = document.querySelector("#numero");
document.querySelector("#mais").addEventListener("click", () => {
  numero.textContent = Number(numero.textContent) + 1;   // sem Number vira "0111"
});
```

## 09 — Lendo o input
```js
const nome = document.querySelector("#nome");
const saudacao = document.querySelector("#saudacao");

document.querySelector("#enviar").addEventListener("click", () => {
  saudacao.textContent = `Olá, ${nome.value}!`;
});
```

## 10 — Card ativo
```js
const card = document.querySelector("#card");
card.addEventListener("click", () => {
  card.classList.toggle("ativo");
});
```

## 11 — Cor de fundo
```js
const cores = ["#FDE68A", "#BBF7D0", "#BFDBFE"];
let indice = 0;

document.querySelector("#trocar").addEventListener("click", () => {
  document.body.style.backgroundColor = cores[indice];
  indice++;
  if (indice === cores.length) indice = 0;   // ou: indice = (indice + 1) % cores.length
});
```

## 12 — Desafio: lista de compras
```js
const item = document.querySelector("#item");
const compras = document.querySelector("#compras");

document.querySelector("#adicionar").addEventListener("click", () => {
  if (!item.value) return;                 // campo vazio é falsy
  const li = document.createElement("li");
  li.textContent = item.value;
  compras.appendChild(li);
  item.value = "";
});
```
