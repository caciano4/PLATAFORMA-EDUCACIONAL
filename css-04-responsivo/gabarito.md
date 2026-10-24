# CSS: responsivo, transições e o site completo — Gabarito

> Entregar só depois da correção. Todas as soluções foram testadas no playground (as regras de `.caixa` que já vêm prontas no editor foram omitidas).

## 01 — Tamanhos em rem e %
```css
h1 {
  font-size: 2rem;
}

.caixa {
  width: 50%;
  background: #38BDF8;
}
```

## 02 — Muda de cor no celular
```css
.aviso {
  background-color: #38BDF8;
  padding: 30px;
}

@media (max-width: 500px) {
  .aviso {
    background-color: #F97316;
  }
}
```

## 03 — Colunas que empilham
```css
.colunas {
  display: flex;
  gap: 12px;
}

.colunas .caixa {
  flex: 1;
}

@media (max-width: 500px) {
  .colunas {
    flex-direction: column;
  }
}
```

## 04 — Mobile first
```css
.cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
}

@media (min-width: 700px) {
  .cards {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

## 05 — Botão com transição
```css
.botao {
  background-color: #0EA5E9;
  color: white;
  padding: 12px 24px;
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.botao:hover {
  background-color: #F97316;
}
```

## 06 — Selo no canto do cartão
```css
.card {
  position: relative;
  padding: 20px;
  border: 1px solid #CBD5E1;
}

.selo {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #F97316;
  color: white;
  padding: 4px 10px;
}
```

## 07 — Tema com variáveis
```css
:root {
  --principal: #38BDF8;
  --escuro: #15171E;
}

body {
  margin: 0;
}

.topo {
  padding: 14px 20px;
  background-color: var(--escuro);
  color: var(--principal);
}

h1 {
  color: var(--principal);
}
```

## 08 — O site responsivo
```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #F1F5F9;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
}

.topo {
  background-color: #15171E;
}

.barra {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}

.logo {
  color: #F0C23B;
}

.menu a {
  color: white;
  text-decoration: none;
  margin-left: 20px;
}

.cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

.card {
  background-color: white;
  padding: 20px;
  border-radius: 12px;
  transition: transform 0.2s;
}

.card:hover {
  transform: translateY(-4px);
}

@media (min-width: 700px) {
  .cards {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

