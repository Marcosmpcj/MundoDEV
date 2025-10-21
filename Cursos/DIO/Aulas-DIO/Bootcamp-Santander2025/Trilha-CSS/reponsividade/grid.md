# Conceitos Grid Layout
É um recurso que permite construir layouts baseados em grades bidimensionais, dividindo a página em regiões e definindo onde casa elemento deve ficar.

## grid container
Elemento-pai que terá a propriedade `display: grid` especificada. Ele irá *envolver* todos os itens do grid.
<img src="https://css-tricks.com/wp-content/uploads/2018/11/justify-content-center.svg">

## grid item
Elementos que são **filhos diretos** do `grid container`. Os elementos que estão dentro dos itens não serão **grid-items**.

## grid columns
As **faixas verticais** dos itens do grid, chamadas de colunas (grid columns).
 <br><br>
<img src="https://www.w3schools.com/css/grid_columns.png">

## grid rows
As **faixas horizontai**s dos itens do grid, são chamados de linhas (grid rows).
<br><br>
<img src="https://www.w3schools.com/css/grid_rows.png">

## grid gaps
Espaços entre as linhas (grid rows) e colunas (grid columns).
<br><br>
<img src="https://www.w3schools.com/css/grid_gaps.png">


## grid lines
Divisórias que compõem a estrutura da grade. As linhas entre as colunas são *column line* e , as que estão entre as faixas horizontais são chamadas de *row lines*.
<br><br>
<img src="https://www.w3schools.com/css/grid_lines.png">


## grid cell
São as células, ou seja, cada *quadrado* da grade que vai entre uma *grid line* e outra.
<br><br>
<img src="https://developer.mozilla.org/en-US/docs/Glossary/Grid_Cell/1_grid_cell.png">

# Adicionando colunas e linhas ao grid
- `grid-template-columns`: Define as colunas do grid.
- `grid-template-row`: Define as linhas do grid.

## Unidade de medida `fr`
Criada para o CSS Grid, a unidade `fr` representa uma fração do espaço disponível no container do grid.

## Função `repeat`
Permite repetir para todas, ou para algumas das faixas, o mesmo valor para seu tamanho de coluna ou linha.

````CSS
    .container{
        grid-tempalte-columns: repeat(3, 1fr);
        /* repeat(vezes, fração) */
    }
````
- `minmax( 250px, 1fr)`: Cada uma dessas colunas deve ter:
    - Um tamanho **mínimo de 250px**. Elas nunca serão mais estreitas que isso.
    - Um tamanho **máximo de 1fr** (uma fração do espaço disponível). Isso permite que as colunas cresçam para preencher qualquer espaço extra na linha.

- `auto-fill`: Preenche a linha com o máximo de colunas que puder, mesmo que fiquem vazias. O espaço extra não é distribuído entre as colunas preenchidas.

- `auto-fit`: Ajusta as colunas ao espaço disponível. Se houver colunas vazias, ele as "colapsa" (remove) e distribui o espaço delas entre as colunas que têm conteúdo.
 
⚠️ **OBS_:** Na maioria das vezes, `auto-fit` é o que você vai querer para *criar galerias de cards ou layouts flexíveis*, pois ele garante que os itens preencham todo o espaço disponível.

- `min-content`: define o tamanho da trilha (coluna ou linha) como o tamanho mínimo intrínseco (inherente) de seu conteúdo. Em termos práticos, isso significa que a coluna (ou linha) será **apenas tão larga quanto a maior palavra ou o maior elemento de tamanho fixo que ela contém.**

- `max-content`: O oposto de min-content.

## Combinação perfeita: `repeat()` + `autofit` + `minmax()`
O resultado? Em telas largas, você terá várias colunas. À medida que a tela diminui, o navegador automaticamente "quebra" as colunas para a linha de baixo, garantindo que elas nunca fiquem menores que 250px. Tudo isso com uma única linha de CSS!

## Grid Implícito e Explícito
O Grid Explícito (Explicit Grid) é a área do seu grid que você **definiu intencionalmente** usando as propriedades:

- ``grid-template-columns``
- ``grid-template-rows``
- ``grid-template-areas``

Já o Grid Implícito (Implicit Grid) é a área do grid que o **navegador cria automaticamente** quando há a necessidade de acomodar itens.
Isso acontece em duas situações principais:

- **Excesso de Itens**
- **Posicionamento Fora da Grade**

O navegador insere novas *trilhas implícitas* (linhas ou colunas) conforme necessário. Logo, por padrão, essas trilhas implícitas terão seu tamanho definido pelo valor de ``auto`` (semelhante ao `fr`, porém se ajusta somente ao espaço disponibilizado pelo conteúdo).

## `grid-auto-row`
Define o tamanho (altura) padrão para as **linhas implícitas** (linhas adicionais criadas quando há mais itens de grid do que o seu grid-template-rows explícito).

## `grid-auto-columns`
Define o tamanho (largura) padrão para as **colunas implícitas** (colunas adicionais criadas, o que é menos comum, mas pode acontecer se você explicitamente posicionar um item em uma coluna muito distante).

### 🗒️Nota: ``grid-auto-rows`` com ``minmax``
O valor ``grid-auto-rows: minmax(100px, auto);`` é frequentemente considerado *uma melhor prática*:
- ``100px`` (mínimo): Garante que todas as linhas implícitas tenham pelo menos 100px de altura, evitando que itens com pouco conteúdo fiquem muito achatados.
- ``auto`` (máximo): Permite que a linha cresça (se o conteúdo exigir) para evitar estouro (overflow) e garantir que todo o texto seja visível.

## `grid-auto-flow`
Define como os itens de grid são posicionados automaticamente dentro do container. O ``grid-auto-flow`` entra em ação quando você *não define explicitamente onde cada item de grid deve ir* (ou seja, você não usa **grid-column** ou **grid-row** em cada item).

- Aceita quatro valores principais, que são combinações de **direção** (``row`` ou ``column``) e **densidade** (``dense``). O valor padrão é ``row``.

## Shorthand `grid-area`
Define os valores das propriedades `grid-row-start/end` e `grid-column-start/end` de uma só vez.

````CSS
    /* grid-area: <row-start>/<col-start>/<row-end>/<col-end> */
````

## Shorthand `grid`
````CSS
    /* Antes*/
    .container{
        grid-template-rows: 100px 300px;
        grid-template-columns: 3fr 1fr;
    }

    /* Depois */
    .container{
        grid: 100px 300px / 3fr 1fr;
    }
````

## Propriedade `justify-items`
Alinha o conteúdo dos itens do grid ao longo do eixo da linha (horizontalmente).

## Propriedade `align-items`
Alinha o conteúdo dos itens do grid ao longo do eixo da coluna (verticalmente).

## Propriedades Individuais(Auto-Alinhamento)
Se você precisar alinhar apenas um item de forma diferente dos outros, use as versões com prefixo self diretamente no Grid Item:

- `justify-self`: Alinha um item individualmente no eixo horizontal.

- `align-self`: Alinha um item individualmente no eixo vertical.

## Shorthand `place-self`
Atalho para *align-self* e *justify-self*
````CSS
    place-self: center start;
    /* align-self justify-self */
````

## Shorthand `place-items`
Atalho para *align-items* e *justify-items*
````CSS
    place-items: center start;
    /* align-items justify-items */
````

## Propriedade `justify-content`
Esta propriedade alinha o grid inteiro (o conjunto de colunas) ao longo do eixo da linha (horizontal).

## Propriedade `align-content`
Esta propriedade alinha o grid inteiro (o conjunto de linhas) ao longo do eixo da coluna (vertical).

## Shorthand `place-content`
Atalho para *align-content* e *justify-content*
````CSS
    place-content: center start;
    /* align-content justify-content */
````