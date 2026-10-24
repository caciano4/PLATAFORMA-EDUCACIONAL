# Projeto final dos módulos: Meu portfólio

Um único projeto que evolui ao longo do curso. O aluno sai com o **site pessoal dele**, publicado, para usar na busca por vaga.

| Módulo | Página no site | Roteiro | O que o aluno entrega |
|---|---|---|---|
| HTML | https://site-alunos-nu.vercel.app/html-projeto/ | `roteiro-projeto-html.pdf` | `index.html` com a estrutura completa (head, header + menu, sobre, habilidades, projetos, contato, footer) |
| CSS | https://site-alunos-nu.vercel.app/css-projeto/ | `roteiro-projeto-css.pdf` | `index.html` + `style.css` (.zip): paleta com variáveis, menu flex, cartões, formulário, mobile first |
| JavaScript | https://site-alunos-nu.vercel.app/js-projeto/ | `roteiro-projeto-js.pdf` | `index.html` + `style.css` + `script.js` (.zip): ano automático, tema escuro, projetos a partir de um array, formulário validado |

## Como funciona a página de projeto

- Editor com uma aba por arquivo (index.html / style.css / script.js), prévia do site de verdade e **checklist ao vivo**: cada requisito fica ✓ ou ✗ com uma dica, ao clicar em ▶ Atualizar.
- O trabalho fica salvo no **localStorage** do navegador do aluno (chaves `proj-html`, `proj-css`, `proj-js`). Por isso o projeto de CSS já abre com o HTML que o aluno fez, e o de JS com os dois anteriores. Se o aluno trocar de computador, precisa colar os arquivos baixados nas abas.
- **⬇ Baixar** gera `index.html` (módulo HTML) ou `meu-portfolio.zip` com a pasta pronta (CSS e JS). A última etapa de cada projeto explica como publicar de graça (Netlify Drop, GitHub Pages, Vercel).
- Quem não fez o projeto do módulo anterior recebe um portfólio-modelo (Ana Souza) para continuar.

## Checklist (o que a correção automática confere)

### HTML

**1. O esqueleto**

- Começa com <!DOCTYPE html> e <html lang="pt-BR">
- head com meta charset e meta viewport
- meta description com uma frase sobre você
- title com o seu nome
- Nenhuma tag sem fechar ou cruzada

**2. Cabeçalho e menu**

- header com um h1 com o seu nome
- Só um h1 na página inteira
- Um p de apresentação no header
- nav com ul e 4 links internos (#sobre, #habilidades, #projetos, #contato)

**3. Sobre mim**

- section id="sobre" com h2
- Pelo menos 2 parágrafos sobre você (com texto de verdade)
- Uma imagem com alt descritivo

**4. Habilidades**

- section id="habilidades" com h2
- ul com pelo menos 3 li

**5. Projetos**

- section id="projetos" com h2
- Pelo menos 2 article, cada um com h3 e p
- Um link externo abrindo em nova aba (target="_blank")

**6. Contato**

- section id="contato" com h2 e form
- input type="email" obrigatório (required)
- textarea para a mensagem e botão submit
- Todos os campos com label ligado (for + id)

**7. Rodapé e revisão**

- footer com © e o seu nome
- As 4 seções dentro do main, na ordem
- Nenhum link do menu quebrado (todos apontam para um id existente)

### CSS

**1. A base**

- Variáveis em :root (pelo menos 2) usadas com var()
- * { box-sizing: border-box; }
- body com margin 0, fonte, cor de fundo e line-height
- CSS sem chaves desbalanceadas

**2. Cabeçalho e menu**

- header com fundo diferente do body
- Menu em linha: nav ul com display flex e sem bolinhas
- Links do menu sem sublinhado e com :hover
- h1 com tamanho definido e margem zerada

**3. Container e seções**

- Container com max-width e margin: 0 auto
- Seções com espaço vertical (padding ou margin de 24px+)
- Foto redonda (border-radius)
- Imagens com max-width: 100%

**4. Cartões de projeto**

- Articles com fundo, padding e cantos arredondados
- Sombra ou borda no cartão
- Pai dos articles com display grid (ou flex) e gap
- Hover com transition no cartão

**5. Formulário**

- Campos com largura total e padding
- Labels em bloco (display: block)
- Textarea com a mesma largura e fonte dos inputs
- Botão com cor de destaque, sem borda e cursor pointer

**6. Responsivo**

- @media (min-width: ...) com colunas para telas grandes
- No celular (600px) os cartões ficam em uma coluna
- Nada estoura a largura da tela

**7. Rodapé e revisão**

- footer com fundo e texto centralizado
- Texto do footer legível sobre o fundo (cor definida)
- Nenhuma cor repetida fora das variáveis: menos de 6 cores hex soltas

### JavaScript

**1. Preparar o HTML**

- button#tema no header
- span#ano no footer
- div#lista-projetos vazia no HTML (os cartões virão do JS)
- p#mensagem na seção de contato
- script.js ligado antes de </body>

**2. Ano automático**

- #ano mostra o ano atual
- Usa new Date().getFullYear()

**3. Tema escuro**

- Clicar em #tema liga a classe escuro no body
- Clicar de novo desliga (toggle)
- O fundo da página muda de verdade com o tema
- O texto do botão muda (🌙 / ☀️)

**4. Lista de projetos**

- Array projetos com pelo menos 2 objetos
- #lista-projetos recebe um article por projeto
- Cada cartão tem h3, p e link
- Usa forEach ou map para percorrer o array

**5. Formulário com validação**

- O submit tem preventDefault (a página não recarrega)
- Com campos vazios, mostra um erro em #mensagem
- Com dados válidos, agradece usando o nome digitado
- Depois de enviar, o formulário é limpo (form.reset())

## Gabarito

A pasta `gabarito/` tem a versão final (depois do módulo de JavaScript): `index.html`, `style.css` e `script.js`. Passa em todos os checklists dos três módulos. Para o módulo de HTML, vale o `index.html` sem o `<link>`, sem o botão #tema, sem #ano, sem #lista-projetos e sem #mensagem (os articles escritos à mão); para o de CSS, `index.html` + `style.css` sem a parte `body.escuro`.

## Critérios de avaliação sugeridos

1. Checklist completo no site (correção automática).
2. Conteúdo próprio e coerente: nome, apresentação, projetos descritos de verdade.
3. Site publicado, com link funcionando (pedir o link no grupo).
4. Código organizado: indentação, nomes claros, sem código morto.
