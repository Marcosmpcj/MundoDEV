# Conceitos de Flexbox
Permite posicionar os elementos(itens) dentro de outro elemento(container). Oferece uma maneira mais eficiente de *organizar, alinhar e distribuir* o espaço entre os itens do container, mesmo que o tamanho do container seja dinâmico.
A grosso modo, o *Flexbox* torna o **container flexível** e seus **itens também flexíveis**, alterando a largura/altura, ordem e aproveitando o espaço disponível da melhor forma.

````CSS
    .container{
        display: flex; /* or inline-flex */
    }
````
## Eixos do Flexbox

- **Eixo Principal (main axis)**: Define a direção em que o nosso container vai organizar nosso itens: *horizontalmente (em linha)* ou *verticalmente (em coluna).* Definida pela propriedade `flex-direction`.

- **Eixo Transversal (cross axis)**: O eixo que é *perpendicular (atravessa)* ao eixo principal. Ou seja, o **oposto ao eixo principal.**

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXqsQ0OOHnyixlVMJbbeO41rLRHOQuVPVT5A&s"/>

## Propriedade `flex-direction`
Define a direção que os itens do container estarão.
- `row`: (horizontal) esquerda para direita.
- `row-reverse`: (horizontal) direita para esquerda.
- `column`: (vertical) cima para baixo.
- `column-reverse`: (vertical) baixo para cima.

## Propriedade `flex-wrap`
Define se os *itens flexíveis* dentro do container devem ou não **quebrar para uma nova linha** quando o espaço no eixo principal se esgotar.

|Valor|Efeito|O que acontece|
|----|---|---|
|`nowrap`|**Não quebra linha**|Todos os itens flexíveis permanecem em uma **única linha**, comprimindo-se (encolhendo) se necessário para caber, *ignorando seu tamanho ideal.*|
|`wrap`|**Quebra de linha**|Os itens que não cabem na linha **quebram para a linha de baix**o. O fluxo da nova linha é o mesmo do contêiner (topo para baixo).|
|`wrap-reverse`|**Quebra (reversa)**|Os itens que não cabem na linha quebram para a linha de cima. O fluxo da nova linha é oposto ao do contêiner (baixo para cima).|

## Propriedade *Shorthand* `flex-flow`
É uma propriedade de atalho (shorthand) que combina duas propriedade essenciais em uma única declaração:
1. `flex-direction`
2. `flex-wrap`
Ela permite que você configure o fluxo swum container flex de forma concisa.

````CSS
    .container{
        display: flex;
        flex-flow: row wrap;
    }
````
Assim, podemos fazer as possíveis combinações:
|Valores de `flex-direction`|Valores de `flex-wrap`|
|---|---|
|row|nowrap / wrap / wrap-reverse|
|row-reverse|nowrap / wrap / wrap-reverse|
|column|nowrap / wrap / wrap-reverse|
|column-reverse|nowrap / wrap / wrap-reverse|

## Propriedade `justify-content`
Controla como o espaço extra é distribuído **entre e ao redor** dos itens ao longo **eixo principal (Main Axis)** do container flexbox.

|Valor|Efeito|Descrição|
|---|---|---|
|`flex-start` (padrão)|**Início do eixo**|Alinha os itens no **início** do eixo principal.|
|`flex-end`|**Fim do eixo**|Alinha os itens no **fim** do eixo principal.|
|`center`|**Centralizado**|Agrupa e centraliza os itens no meio do eixo principal.|
|`space-between`|**Espaço distribuído**|Distribui o espaço vazio **uniformemente entre os itens**. O primeiro item toca o início, e o último toca o fim do contêiner.|
|`space-around`|Espaço ao redor|Distribui o **espaço uniformemente ao redor de cada item**. Isso resulta em metade do espaço nas bordas externas do que entre os itens.|
|`space-evenly`|**Espaço igual**|Distribui o espaço de forma que o espaço **entre** os itens e o espaço nas **bordas externas** sejam *exatamente iguais*.|

## Propriedade `align-items`
É a responsável por **alinhar e distribuir** os itens flexíveis ao longo do **eixo transversal (Cross Axis)** do contêiner.

|Se o Eixo Principal for...|O Eixo Transversal é...|Logo ``align-items`` controla o alinhamento...|
|---|---|---|
|*row (Horizontal)*|	Vertical|	*Vertical*|
|*column (Vertical)*|	Horizontal|	*Horizontal*|

Esses valores definem como os itens são dispostos dentro do espaço disponível no eixo transversal. 

|Valor|	Efeito|	Descrição|
|---|---|---|
|``stretch`` (Padrão)|	**Esticamento**|	Os itens se esticam para preencher toda a altura/largura do contêiner, respeitando as restrições de *min-height/max-height (ou min-width/max-width* se for *column)*.|
|``flex-start``|	**Início do Eixo**|	Alinha os itens no início do eixo transversal.|
|``flex-end``|	**Fim do Eixo**|	Alinha os itens no fim do eixo transversal.|
|``center``|	**Centralizado**|	Centraliza os itens ao longo do eixo transversal.|
|``baseline``|	**Linha de Base**|	Alinha os itens com base na linha de base do seu conteúdo textual (muito útil ao alinhar texto de tamanhos variados).|

````CSS
    .container {
        display: flex;
        height: 300px; /* Definir uma altura torna o alinhamento visível */
        align-items: center; /* Centraliza todos os itens na vertical */
    }
````

## Propriedade `align-self`
É a versão para **itens individuais** da propriedade ``align-items``. Ela permite que você substitua (override) o alinhamento padrão ou o alinhamento definido por align-items para um item flexível específico.
Em outras palavras, você usa ``align-self`` em um item filho para movê-lo para uma **posição diferente no Eixo Transversal**.
<br>

### Exemplo
Se você tiver um contêiner com ``align-items: center;`` (centralizando todos os itens verticalmente), você pode usar ``align-self: flex-start;`` em um **item específico** para movê-lo para o topo.

````CSS
    .container {
        display: flex;
        height: 200px;
        align-items: center; /* ALINHAMENTO GERAL: Todos no centro */
    }

    .item-2 {
        align-self: flex-start; /* SOBRESCREVE o alinhamento, movendo apenas o Item 2 para o topo */
    }
````

## Propriedade `align-content`
É usada para controlar a distribuição do **espaço extra entre as linhas (ou colunas)** quando o contêiner Flexbox tem **múltiplas linhas de itens.**

### Diferença entre `align-items` vs. `align-content`
|Propriedade|	Aplica-se a...|	Função|
|---|---|---|
|`align-items`|	**Itens Individuais**|	Alinha os itens **dentro de cada linha** (funciona mesmo com uma única linha).|
|`align-content`|	**Linhas (Grupos de Itens)**|	Distribui o espaço entre as múltiplas linhas (só funciona com flex-wrap: wrap).|

⚠️ **OBS_**: Se você tem **mais de uma linha**, use ``align-content`` para organizar as linhas. Se você quer **alinhar os itens dentro de uma linha**, use ``align-items``.

````CSS
    .container {
        display: flex;
        flex-wrap: wrap; /* ESSENCIAL para o align-content funcionar */
        height: 400px; /* Precisa ter altura para haver espaço extra */
  
        /* Distribui o espaço extra entre as linhas: */
        align-content: space-around; 
    }
````

## Propriedade `order`
Permite que você **reorganize visualmente** os itens dentro do contêiner flexível, *independentemente da sua ordem original* no código HTML.

## Propriedade `flex-grow`
Define a **capacidade de crescimento** de um item flexível ao longo do **eixo principal**.

|Valor|	Comportamento|	Explicação Objetiva|
|---|---|---|
|`0` (Padrão)|	**Não Cresce**|	O item não ocupará nenhum espaço extra, mantendo seu tamanho com base no seu conteúdo ou em seu ``width``/``height`` (se definidos).|
|`1`|	**Crescimento Padrão**|	O item ocupará uma "parte" do espaço extra. Se todos os itens tiverem ``flex-grow: 1``, eles dividirão o espaço extra igualmente.|
|`N` (Qualquer número positivo)|	**Crescimento Proporcional**|	O item ocupará N vezes a quantidade de espaço extra que um item com ``flex-grow: 1 ``ocuparia.|

## Propriedade `flex-shrink`
Sendo oposto ao `flex-shrink`, esta controla a **capacidade de encolhimento** ao longo do eixo principal. Determina quanto um item deve se **encolher para evitar o overflow (vazamento)** do contêiner, caso a soma dos tamanhos iniciais dos itens seja maior que o espaço disponível no contêiner.

## Propriedade `flex-basis`
Define o **tamanho inicial padrão** de um item flexível antes que qualquer distribuição de espaço (``flex-grow`` ou ``flex-shrink``) ocorra.

|Valor|	Explicação Objetiva|
|---|---|
|`auto` (Padrão)|	O tamanho base é determinado pelo width ou height do item. Se nenhum estiver definido, ele usa o tamanho do conteúdo.|
|`content`|	O tamanho base é o tamanho do conteúdo do item, ignorando o width/height definido. (Ainda não amplamente suportado, mas é o comportamento de auto quando não há width/height).|	Baixa
|`200px, 50%, etc.`|Define um tamanho base fixo (em qualquer unidade de medida válida).|

## Propriedade `flex` (shorthand)
É o shorthand (atalho) que combina as três propriedades que acabamos de discutir: ``flex-grow``, ``flex-shrink`` e ``flex-basis`` nesta ordem respectivamente.

````CSS
    .item{
        flex: initi; /* flex: 0 1 auto */
    }
````

|Valor `flex`|	Equivalente Completo|	Propriedades Detalhadas|	Significado Objetivo|
|---|---|---|---|
|`flex: initial;`|	`flex: 0 1 auto;`|	`grow: 0, shrink: 1, basis: auto`|	**Padrão de Item Flexível: O item mantém seu tamanho inicial** (`auto`) e não cresce para preencher o espaço extra, mas encolhe se o contêiner for muito pequeno.|
|`flex: auto;`|	`flex: 1 1 auto;`|	`grow: 1, shrink: 1, basis: auto`|**Flexível Total com Base no Conteúdo: O item cresce** para preencher o espaço extra e encolhe se necessário. O dimensionamento começa pelo tamanho inicial (``auto``, ou seja, ``width``/``height`` ou conteúdo).|
|``flex: none``;|	`flex: 0 0 auto;`|	``grow: 0, shrink: 0, basis: auto``|	**Inflexível**: O item **não cresce e não encolhe.** Ele mantém seu tamanho inicial (``auto``) de forma rígida, ignorando o excesso ou falta de espaço no contêiner.|
|``flex: 1;``|	``flex: 1 1 0;``|	``grow: 1, shrink: 1, basis: 0``|	Divisão Igual: O item cresce e encolhe. Ao usar a base de cálculo ``0``, todos os itens com esse valor dividem todo o espaço disponível igualmente, desconsiderando seus tamanhos de conteúdo.|


## Diferença entre `justify-content`, `margin: 0 auto` e `text-align: center`

- `justify-content`: Quando o display é do tipo *Flex*, os itens flexíveis só são alinhados no **eixo horizontal**.
⚠️ **NOTA:** Centralizar vários elementos lado a lado no **eixo horizontal** (ex: cards, imagens, botões)

- `margin: 0 auto`: Só centraliza elementos blocados (**display: block**), e apenas quando eles têm **largura fixa** (width definido). Resumindo, esse código centraliza um único bloco dentro de um container comum (não flex), mas não centraliza vários blocos lado a lado, nem funciona dentro de um container flexível.
⚠️ **NOTA:** Centraliza *um único bloco horizontalmente dentro de outro bloco.*

- `text-align: center`: Não centraliza blocos, apenas **conteúdo em linha (inline) dentro de um elemento.**
⚠️ **NOTA:** Centraliza *texto, imagens ou elementos inline* dentro de um bloco

- `align-items`: Quando o display é do tipo *Flex*, os itens flexíveis só são alinhados no **eixo vertical**.

