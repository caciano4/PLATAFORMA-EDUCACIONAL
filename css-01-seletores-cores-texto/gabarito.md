# CSS: seletores, cores e texto — Gabarito

> Entregar só depois da correção. Todas as soluções foram testadas no playground (as regras de `.caixa` que já vêm prontas no editor foram omitidas).

## 01 — Título azul
```css
h1 {
  color: #38BDF8;
}
```

## 02 — Fundo escuro
```css
body {
  background-color: #15171E;
  color: white;
}
```

## 03 — Só quem tem a classe
```css
.destaque {
  color: red;
  font-weight: bold;
}
```

## 04 — Um só elemento: o id
```css
#aviso {
  background-color: #FEF08A;
  color: #713F12;
}
```

## 05 — A fonte do site
```css
body {
  font-family: Arial, sans-serif;
  font-size: 18px;
}

h1 {
  font-size: 40px;
}
```

## 06 — Título centralizado e em maiúsculas
```css
h1 {
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 4px;
}

.sub {
  text-align: center;
  color: gray;
}
```

## 07 — Links sem sublinhado (até passar o mouse)
```css
a {
  color: #0EA5E9;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
  color: #F97316;
}
```

## 08 — Cartão de perfil
```css
body {
  font-family: Arial, sans-serif;
  background-color: #F1F5F9;
}

.card {
  background-color: #1F2330;
  color: white;
  text-align: center;
}

.cargo {
  color: #38BDF8;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.bio {
  line-height: 1.6;
  color: #C4C8D2;
}

.card a {
  color: #F0C23B;
  text-decoration: none;
}
```

