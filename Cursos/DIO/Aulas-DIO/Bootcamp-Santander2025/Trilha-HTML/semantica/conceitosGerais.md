# Semântica do HTML:5

Na programação, a Semântica se refere ao significado de um trecho de código — por exemplo, "que efeito tem a execução dessa linha de JavaScript?", Ou "que finalidade ou função esse elemento HTML tem" (em vez de "como ele se parece?"). 
Em HTML, por exemplo, o ``<h1>`` é um elemento semântico, que fornece o texto que envolve a representação (ou o significado) de "um cabeçalho de nível superior em sua página".

## Estrutura Básica
```html
<html>
    <!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Semântica do HTML:5</title>
</head>
<body>

    <header>
        <nav></nav>
    </header>
    <main>
        <section></section>
        <article></article>
        <aside></aside>
    </main>
    <footer>

    </footer>
    
</body>
</html>

```
## tag ``<main>``
O elemento ``<main>`` define o conteúdo principal dentro do ``<body>`` em seu documento ou aplicação.
Entende-se como conteúdo principal aquele relacionado diretamente com o tópico central da página ou com a funcionalidade central da aplicação. 

### ⚠️ **Nota**
1. ``<main>`` não pode ser filho dos elementos ``<article>, <aside>, <footer>, <header>`` ou ``<nav>``.
2.  Não se deve incluir mais de um elemento main no mesmo documento.



## SEO (Search Engine Optimization) - Otimização para Mecanismos de Buscas
Conjunto de técnicas voltadas para otimizar o posicionamento do site em mecanismos de buscas.
- Não é apenas HTML.
- Não envolve apenas dinheiro. Além disso, técnica, tempo, influência, entre outros.

**GoogleBot** é o principal.
- É uma aplicação da Google que vai visitando os sites, armazena a informações em seu banco de dados e todos os liks que estão na página, ele vai linkando e indexando com mais sites semelhantes.
- Uma das importância é a semântica dos códigos, para facilitar nas buscas no google.
- Algumas ferramentas são:
    - **Google Search Console**
    - **Google Ads**

- Dicas para otimizar seu HTML para ele aparecer melhor nas buscas:
    - Adicione títulos que condizem com o conteúdo sa susa página.
    ``<title>PC Gamer com 15% OFF no PIX | KaBuM!</title> ``
    - Adicione descrições objetivas e condizentes.
    ``<meta name="description" content="PC Gamer com 15% OFF no PIX | KaBuM" />``
    - Estudar sobre **[Schema.org](https://schema.org/)** - comunidade que junta para melhorar a forma com que os dados são capturados pelos mecanismos de buscas.