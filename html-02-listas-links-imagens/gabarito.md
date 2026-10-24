# HTML: listas, links e imagens — Gabarito

> Entregar só depois da correção. Todas as soluções foram testadas no playground. Aqui está só o `<body>`; o esqueleto (doctype, html, head, body) é o mesmo de sempre.

## 01 — Lista de compras
```html
<h2>Compras</h2>
<ul>
<li>Pão</li>
<li>Leite</li>
<li>Ovos</li>
</ul>
```

## 02 — Passo a passo
```html
<ol>
<li>Abrir o editor</li>
<li>Escrever o HTML</li>
<li>Salvar como index.html</li>
</ol>
```

## 03 — Menu com submenu
```html
<ul>
<li>Início</li>
<li>Cursos<ul>
<li>HTML</li>
<li>JavaScript</li>
</ul>
</li>
<li>Contato</li>
</ul>
```

## 04 — Link externo
```html
<p>Leia a <a href="https://developer.mozilla.org" target="_blank">Documentação</a>
</p>
```

## 05 — Sumário com links internos
```html
<ul>
<li>
<a href="#sobre">Sobre</a>
</li>
<li>
<a href="#contato">Contato</a>
</li>
</ul>
<h2 id="sobre">Sobre</h2>
<h2 id="contato">Contato</h2>
```

## 06 — Imagem com alt
```html
<img src="/img/greenn.svg" alt="Logo da Greenn" width="120">
```

## 07 — Imagem que é link
```html
<a href="https://www.greenn.com.br">
<img src="/img/greenn.svg" alt="Site da Greenn">
</a>
```

## 08 — Desafio: página de receita
```html
<h1>Bolo de cenoura</h1>
<figure>
<img src="/img/greenn.svg" alt="Foto do bolo">
<figcaption>Bolo</figcaption>
</figure>
<h2>Ingredientes</h2>
<ul>
<li>a</li>
<li>b</li>
<li>c</li>
</ul>
<h2>Preparo</h2>
<ol>
<li>1</li>
<li>2</li>
<li>3</li>
</ol>
<a href="https://x.com" target="_blank">Fonte</a>
```
