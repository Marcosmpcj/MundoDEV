## Propriedade `text-transform`
É responsável por definir quais caracteres vão estar em maiúsculo, minúsculo, etc.

````css
*{
    text-transform: capitalize; /*transforma todas a inicias em maiúsculas*/
    text-transform: uppercase; /*transforma todas as letras em maiúsculas*/
    text-transform: lowercase; /*transforma todas as letras em minúsculas*/}
````

## Propriedade `text-align`
É resposável por alinhar o texto dentro de seu elemento pai.

## Propriedade `text-decoration`
Adiciona ou remove linhas no nosso texto: sejam linhas em cima, no meio ou embaixo.

É uma propriedade abreviada de :
- text-decoration-line
- text-decoration-style
- text-decoration-color
- text-decoration-thickness

## Propriedade `text-indent`
Define o recuo da primeira linha do texto.

## Propriedade `letter-spacing`
Adiciona um espaçamento entre cada caractere do texto.
## Propriedade `word-spacing`
Adiciona um espaçamento entre cada palavra do texto.
## Propriedade `white-space`
Define como os espaços em branco do texto de um determinado elemento é tratado.

- `normal`: A quebra de linha só acontece quando o texto atinge o limite da box. É contabilizado apenas um espaço em branco.
- `nowrap`: Não há quebra de linha. É contabilizado apenas um espaço em branco.
- `pre`: Cada espaço em branco é preservado igualmente pelo html. As quebras de linhas também respeitam o disposto no hmtl.
- `pre-line`: É aceito apenas um espaço em branco. A quebra de linha acontecerá ou quando for necessário para não ferir o limite da box ou quando houver a quebra de linha também no html.
- `pre-wrap`: Os espaços em branco são preservados igualmente ao html e o texto vai ser quebrado em dois momentos: ou quando necesário ou em quebra de linha pelo html.
- `break-spaces`: Semelhante ao *pre-wrap*, porém este respeite o limite do width do elemento pai.

## Propriedade `word-wrap`
Define, caso uma palavra seja muito grande para caber em uma linha, se ela será quebrada em qualquer caractere para que uma parte dela fique na linha e o restante na próxima, ou se não, toda a palavra deva ficar na mesma linha e ultrapassar os limites que definimos para o elemento pai.

## Propriedade `word-break`
Define quando o texto deve ter uma quebra de linha.

## Propriedade `writing-mode`
Define a orientação do texto(vertical ou horizontal).

## Propriedade `text-overflow`
Determina como o conteúdo que ultrapassou a sua div e que não é mostrado ao usuário deve ser exibido. Ele pode ser cortado, mostrar reticências ou até mesmo exibir qualquer string definida pelo autor.

- `clip`: corta o texto limitado pela div.
- `ellipsis`: coloca reticências no limite da div, indicando que tem mais conteúdo a ser lido.
- `string`: pode ser atribuído uma string indicando qualquer mensagem para o usuário,como[ver mais], porém só é exibido no Firefox.