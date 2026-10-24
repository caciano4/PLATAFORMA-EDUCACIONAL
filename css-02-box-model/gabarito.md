# CSS: box model, margin, padding e border — Gabarito

> Entregar só depois da correção. Todas as soluções foram testadas no playground (as regras de `.caixa` que já vêm prontas no editor foram omitidas).

## 01 — Uma caixa colorida
```css
.caixa {
  width: 200px;
  height: 120px;
  background-color: #38BDF8;
}
```

## 02 — Respiro por dentro
```css
.card {
  background-color: #E0F2FE;
  padding: 24px;
}
```

## 03 — Borda e cantos
```css
.card {
  padding: 16px;
  border: 2px solid #38BDF8;
  border-radius: 12px;
}
```

## 04 — Espaço entre os itens
```css
.item {
  background-color: #BAE6FD;
  padding: 10px;
  margin-bottom: 16px;
}
```

## 05 — Conteúdo centralizado
```css
body {
  margin: 0;
}

.container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #FEF9C3;
}
```

## 06 — Link que vira botão
```css
.botao {
  display: inline-block;
  padding: 12px 24px;
  background-color: #F97316;
  color: white;
  text-decoration: none;
  border-radius: 8px;
}
```

## 07 — Escondendo o rascunho
```css
.rascunho {
  display: none;
}

.aviso {
  opacity: 0.5;
}
```

## 08 — Cartão de produto
```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background-color: #F1F5F9;
  font-family: Arial, sans-serif;
}

.card {
  width: 280px;
  margin: 40px auto;
  padding: 20px;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.preco {
  color: #16A34A;
  font-size: 28px;
  font-weight: bold;
}

.botao {
  display: block;
  padding: 12px;
  background-color: #F97316;
  color: white;
  text-align: center;
  text-decoration: none;
  border-radius: 8px;
}
```

