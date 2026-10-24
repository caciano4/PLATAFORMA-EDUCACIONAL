# CSS: Flexbox e Grid — Gabarito

> Entregar só depois da correção. Todas as soluções foram testadas no playground (as regras de `.caixa` que já vêm prontas no editor foram omitidas).

## 01 — Três caixas em linha
```css
.linha {
  display: flex;
  gap: 16px;
}
```

## 02 — Um em cada ponta
```css
.barra {
  display: flex;
  justify-content: space-between;
}
```

## 03 — No centro de tudo
```css
.hero {
  height: 200px;
  background-color: #15171E;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

## 04 — Menu fixo, conteúdo que cresce
```css
.layout {
  display: flex;
  gap: 12px;
}

.lateral {
  width: 150px;
}

.conteudo {
  flex: 1;
}
```

## 05 — Cabeçalho com menu
```css
body {
  margin: 0;
}

.topo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  background-color: #15171E;
  color: #F0C23B;
}

.menu {
  display: flex;
  gap: 20px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.menu a {
  color: white;
  text-decoration: none;
}
```

## 06 — Grade de três colunas
```css
.grade {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}
```

## 07 — Galeria que se adapta
```css
.galeria {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}
```

## 08 — Página inteira com grid
```css
.pagina {
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 10px;
  grid-template-areas: "topo topo" "lateral principal" "rodape rodape";
}

.topo {
  grid-area: topo;
}

.lateral {
  grid-area: lateral;
}

.principal {
  grid-area: principal;
  min-height: 150px;
}

.rodape {
  grid-area: rodape;
}
```

