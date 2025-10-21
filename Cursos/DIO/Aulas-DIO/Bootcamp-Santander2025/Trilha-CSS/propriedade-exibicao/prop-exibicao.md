# Propriedade CSS `Display`
Vai determinar como as caixas do elementos devem se comportar no momento de serem exibidas na tela. Esse são os principais valores.
- block
- inline
- inline-block
- none
- flex
- grid

### ⚠️ Todo elemento html possui um display padrão
A `<div>` possui diplay block, a tag `<span>` possui o valor inline com padrão, por exemplo.

## Propriedade `Display: Block`
A propriedade display vai determinar que os elementos sejam exibidos em bloco,logo:
- **Ocupa 100% da largura**: independente do conteúdo interno do elemento, sempre ocupará um linha inteira do elemento. 
- **Quebra de linha**: um elemento block empurra o outro elemento para a próxima linha.
- **Controle de dimensõe**s: é possível definir livrimente o width e height do elemento.
- **Controle de espaçamento**: temos controle total da margin e padding em todos os lados.

Os elementos do tipo block por padrão são:
- `<div>`
- `<p>`
- `<h1>` a `<h6>`
- `<ul>` e `<ol>` e `<li>`
- `<header>`, `<footer>`, `<section>` e a maioria dos elementos semânticos.

⚠️ Resumindo, usamos ``display:block`` quando quisermos que um elemento **domine a linha** e quando precisar **controlar suas dimensões** com precisão.

## Propriedade `Display: Inline`
Faz com que um elemento se comporte como uma parte do fluxo de texto (como uma palavra em uma frase). *Não prejudica o fluxo do texto.*
- **Não ocupa largura total**: o elemento ocupa apenas a largura necessária para o seu conteúdo.
- **Não quebra de linha**: se alinham lado a lado na mesma linha, contato que haja espaço.
- **Controle de dimensões limitado**: Não se pode definir o width nem o height. O tamanho é determinado exclusivamente pelo conteúdo do elemento.
- **Controle de espaçamento limitado**: pode-se definir o *padding* para todos os lados, mas a *margin* apenas pela direita e esquerda.

Exemplos de elementos do tipo inline são:
- `<span>`
- `<a>`
- `<strong>`e `<em>` (negrito e itálico)
- `<img>`

⚠️ Resumindo, usamos o ``diplay:inline`` quando quisermos que um **elemento se encaixe no fluxo de texto** *sem afetar a estrutura vertical da página* e quando o tamanho for ditado pelo conteúdo.

## Propriedade `Display: Inline-Block`
É um meio-termo muito útil entre o ``block`` e o ``inline``. Ele combina as melhores características de ambos, permitindo que você *trate um elemento como parte de uma linha*, mas com a **capacidade de controlar suas dimensões.**
- **Comportamento de fluxo(inline)**: os elementos se alinham lado a lado na mesma linha. *(Não forçam a quebra de linha)*.
- **Controle de dimensões(block)**: o tamanho não é ditado apenas pelo conteúdo, logo pode-se *manipular o width e height* do elemento.
- **Controle total de margin/padding(block)**: pode-se definir livrimente o tamanho de *margin e padding para todos os lados.*

⚠️ Resumindo, usamos o ``display: inline-block`` quando quisermos que **elementos fiquem lado a lado**, mas também precisa de **controle total sobre suas dimensões e margens verticais**.

## Propriedade `Display: None`
É a forma mais radical de remover um elemento do site usando CSS. Ele simplismente deixa de existir no site da página.
- **Remoção completa**: o elemento é removido da renderização. É como se a tag HTML nunca tivesse existido no documento.
- **Não ocupa espaço**: o elemento não ocupa nenhum espaço no layout. Todos os outros elementos se comportam como se ele não estivesse ali, colapsando o espaço que ele ocuparia.
- **Não interage**: o elemento não é clicável e não interage com eventos de mouse. Além disso, ele é ignorado por leitores de tela.

⚠️ Resumindo, use ``display: none`` quando você quer que um **elemento desapareça** completamente da página e que *seu espaço seja preenchido pelos outros elementos.*

### 🗒️ Nota :  crucial não confundir ``display: none`` com ``visibility: hidden.``
- ``display: none``: O elemento é removido e **não ocupa espaço**.
- ``visibility: hidden``: O elemento fica invisível, mas **continua ocupando seu espaço no layout**, como um fantasma.

## Alinhamento de elementos `Inline` e `Inline-Block`

- ### `vertical-align` (Alinhamento Vertical)
 Alinhar um elemento (como um ícone, uma imagem ou uma caixa inline-block) em relação à linha de texto ao seu redor ou em relação aos elementos vizinhos na mesma linha.

 |Valor|Descrição|Uso Típico|
 |---|---|---|
 |`middle`|Alinha o ponto médio do elemento com a linha de base (baseline) mais a metade da altura "x" da fonte. (Comum, mas nem sempre intuitivo)|Útil para alinhar um ícone ou botão ao centro de um texto.|
 |`top`|Alinha o topo do elemento com o topo da linha.|Alinhar o topo de caixas ``inline-block`` entre si.|
 |`bottom`|Alinha a parte inferior do elemento com a linha de base.|Alinhar imagens ou caixas à parte inferior do texto.|
 |`baseline`|Alinha a linha de base do elemento com a linha de base do pai.|Mantém o comportamento padrão do texto.|

- ### `text-align` (Alinhamento Horizontal)
Define o alinhamento horizontal do conteúdo em linha (inline content) dentro do elemento pai.
Logo, o ``text-align`` deve ser aplicado no **elemento pai** para afetar o **conteúdo filho** que está dentro dele.
*Ele **não** é aplicado ao elemento que você quer mover, mas sim ao contêiner que o envolve.*


|Valor|Efeito|
|---|---|
|`left`(Padrão)|Alinha o conteúdo à esquerda do elemento pai.|
|`center`|Centraliza o conteúdo horizontalmente.|
|`right`|Alinha o conteúdo à direita do elemento pai.|
|`justify`|Distribui o conteúdo para que todas as linhas, exceto a última, tenham a mesma largura (cria colunas de texto uniformes).|

⚠️ Em resumo, sempre que quiser alinhar **texto** ou elementos ``inline/inline-block`` horizontalmente, use o ``text-align`` no **elemento pai.**

---

### 🗒️ Nota :  crucial não confundir ``text-align`` com ``margin:0 auto``
- `text-align`:  Alinha o **CONTEÚDO(inline/inline-block)** dentro de um bloco. Aplica-se no elemento pai onde está o filho que se quer centralizar.
- `margin:0 auto`: Alinha o **PRÓPRIO BLOCO** dentro do seu contêiner pai. Aplica-se no elemento filho que quer centralizar.

|Para centralizar...|Use...|No elemento...|
|---|---|---|
|**Blocos estruturais** (um `<div>`, uma imagem com `display: block`).|`margin:0 auto`|No **próprio elemento** (que precisa ter width).|
|**Conteúdo de texto** (palavras, links, ícones, botões).|`text-align:center`|No **contêiner pai** do conteúdo|
---

## Propriedade `Display:Flex`
É ideal para quando você precisa de alinhamento e distribuição flexível de itens em uma única direção (1 dimensão - 1D).

1. Aplicação básica: Você aplica `display: flex` ao **elemento pai** (o contêiner) para torná-lo um *contêiner flexível*.
2. Principais peculiaridades e propriedades:

|Propriedade|Aplicação|Objetivo|
|---|---|---|
|``flex-direction``|No contêiner|Define a *direção principal*: `row` (linha, padrão) ou `column` (coluna).|
|``justify-content``|No contêiner|Distribui o espaço vazio entre os itens na *direção principal* (horizontal em `row`). Valores comuns: `center, space-between, space-around.`|
|`align-items`|No contêiner|Distribui ou alinha os itens na *direção transversal* (vertical em row). Valores comuns: `center, flex-start, flex-end, stretch`.|
|`flex-grow`|Nos itens filhos|Determina quanto espaço extra o item deve ocupar, permitindo que ele "cresça" para preencher o contêiner.|

⚠️ Resumindo, é a ferramenta de escolha para componentes. Se você tem uma barra de navegação e precisa distribuir os links de forma uniforme, use Flexbox.

## Propriedade `Display:Grid`
O CSS Grid é ideal para criar a estrutura de um layout complexo de **duas dimensões(2D)**, onde você define explicitamente as linhas e colunas.

1. Aplicação básica: Você aplica ``display: grid`` ao **elemento pai** (o contêiner) para definir que ele usará uma grade.
2. Principais Peculiaridades e Propriedades

|Propriedade|Aplicação|Objetivo|
|---|---|---|
|``grid-template-columns``|No contêiner|Define explicitamente o número e o tamanho das colunas. Usa unidades como `px`, `%`, ou a unidade especial `fr` (fração).|
|``grid-template-rows``|No contêiner|Define explicitamente o número e o tamanho das linhas.|
|``grid-gap`` (ou ``gap``)|No contêiner|Define o espaçamento (calhas) entre as células da grade.|
|``grid-area`` / ``grid-column`` / ``grid-row``|Nos itens filhos|Posiciona o item na grade. Você pode fazer um item ocupar várias linhas e/ou várias colunas de uma vez.|

- ``Unidade fr (Fractional Unit)``: Esta unidade é exclusiva do Grid e representa uma fração do espaço livre no contêiner. Por exemplo, ``grid-template-columns: 1fr 2fr 1fr``; cria três colunas, onde a do meio é duas vezes maior que as laterais.

⚠️ Em resumo, É a ferramenta de escolha para **layouts**. Se você precisa de uma área de conteúdo principal, uma barra lateral e um rodapé, todos se encaixando em uma estrutura definida de linhas e colunas, use Grid.