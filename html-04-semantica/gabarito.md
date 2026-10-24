# HTML: semântica e a página completa — Gabarito

> Entregar só depois da correção. Todas as soluções foram testadas no playground. Aqui está só o `<body>`; o esqueleto (doctype, html, head, body) é o mesmo de sempre.

## 01 — Esqueleto semântico
```html
<header>
<h1>Meu site</h1>
</header>
<main>
<p>x</p>
</main>
<footer>© 2026</footer>
```

## 02 — Menu de navegação
```html
<header>
<h1>Meu site</h1>
<nav>
<ul>
<li>
<a href="#">Início</a>
</li>
<li>
<a href="#sobre">Sobre</a>
</li>
<li>
<a href="#contato">Contato</a>
</li>
</ul>
</nav>
</header>
```

## 03 — Seção com artigos
```html
<main>
<section>
<h2>Notícias</h2>
<article>
<h3>a</h3>
<p>b</p>
</article>
<article>
<h3>c</h3>
<p>d</p>
</article>
</section>
</main>
```

## 04 — id e class
```html
<h1 id="titulo">T</h1>
<div class="card destaque">1</div>
<div class="card">2</div>
<div class="card">3</div>
```

## 05 — Head completo
```html
<h1>Portfólio</h1>
```

```html
<!-- head -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="Meu portfólio">
<title>Portfólio</title>
```

## 06 — Vídeo com controles
```html
<video src="https://www.w3schools.com/html/mov_bbb.mp4" controls width="320">Sem suporte</video>
```

## 07 — Mapa embutido
```html
<iframe src="https://www.openstreetmap.org/export/embed.html?bbox=1" width="400" height="250" title="Mapa">
</iframe>
```

## 08 — Desafio: o site completo
```html
<header>
<img src="/img/greenn.svg" alt="Logo">
<h1>Greenn</h1>
<nav>
<ul>
<li>
<a href="#cursos">Cursos</a>
</li>
<li>
<a href="#contato">Contato</a>
</li>
</ul>
</nav>
</header>
<main>
<section id="cursos">
<h2>Cursos</h2>
<article class="card">
<h3>JS</h3>
</article>
<article class="card">
<h3>HTML</h3>
</article>
<table>
<tr>
<th>Dia</th>
</tr>
</table>
</section>
</main>
<form>
<input type="email" required>
<button type="submit">Ok</button>
</form>
<footer>© 2026</footer>
```

```html
<!-- head -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Portfólio</title>
```
