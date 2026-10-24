# HTML: tabelas e formulários — Gabarito

> Entregar só depois da correção. Todas as soluções foram testadas no playground. Aqui está só o `<body>`; o esqueleto (doctype, html, head, body) é o mesmo de sempre.

## 01 — Tabela de notas
```html
<table border="1">
<tr>
<th>Aluno</th>
<th>Nota</th>
</tr>
<tr>
<td>Ana</td>
<td>9</td>
</tr>
<tr>
<td>Bia</td>
<td>8</td>
</tr>
</table>
```

## 02 — Tabela organizada
```html
<table border="1">
<caption>Cardápio</caption>
<thead>
<tr>
<th>Prato</th>
<th>Preço</th>
</tr>
</thead>
<tbody>
<tr>
<td>Pizza</td>
<td>R$ 40</td>
</tr>
<tr>
<td>Suco</td>
<td>R$ 8</td>
</tr>
</tbody>
</table>
```

## 03 — Célula mesclada
```html
<table border="1">
<tr>
<th colspan="2">Turma de sábado</th>
</tr>
<tr>
<td>Ana</td>
<td>Presente</td>
</tr>
</table>
```

## 04 — Formulário de contato
```html
<form>
<input type="text" name="nome" placeholder="Seu nome">
<textarea name="mensagem">
</textarea>
<button type="submit">Enviar</button>
</form>
```

## 05 — Labels ligados
```html
<form>
<label for="email">E-mail</label>
<input type="email" id="email" name="email">
<label for="senha">Senha</label>
<input type="password" id="senha" name="senha">
<button type="submit">Entrar</button>
</form>
```

## 06 — Tipos certos
```html
<form>
<input type="number" name="idade" min="1">
<input type="date" name="nascimento">
<input type="checkbox" name="aceite">
</form>
```

## 07 — Radio e select
```html
<form>
<label>
<input type="radio" name="turno" value="manha"> Manhã</label>
<label>
<input type="radio" name="turno" value="noite"> Noite</label>
<select name="curso">
<option value="html">HTML</option>
<option value="js">JS</option>
<option value="php">PHP</option>
</select>
</form>
```

## 08 — Desafio: ficha de matrícula
```html
<form>
<fieldset>
<legend>Dados</legend>
<label for="n">Nome</label>
<input id="n" name="nome" required minlength="3">
<label for="e">E-mail</label>
<input id="e" type="email" name="email" required>
</fieldset>
<fieldset>
<legend>Curso</legend>
<select name="curso">
<option>a</option>
</select>
<input type="checkbox" name="termos" required>
</fieldset>
<button type="submit">Matricular</button>
<button type="reset">Limpar</button>
</form>
```
