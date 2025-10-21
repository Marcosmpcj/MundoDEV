# 📒 Unidades de Medidas no CSS
Podemos dividir as unidades de medidas em duas categorias: **absolutas** e **relativas**.

## ➡️ Classificação de tipos numéricos de valores
- `integer`: valores inteiros, positivos e negativos.
- `number`: valores decimais.
- `percentage`: valores que representam uma fração de algum outro valor.
- `dimension`: valores numéricos com unidade de medida atrelada.
    - `length`: representam distância, ou comprimento(px;em;vw;in)
    - `angle`: representam ângulos(deg;rad;grad;turn)
    - `time`: expressam o tempo(s;ms)
    - `resolutions`: descrevem resoluções para dispositivos(dpi;dpcm;dppx)

# 📒 Unidade de Medidas Absolutas
Não dependem de nenhum outro valor de referência para serem calculadas.
São fixas e não podem ser alteradas de acordo com os dispositivos. Logo o resultado será sempre o mesmo.

|Unidade|Nome|
|---|---|
|cm|Centímetro|
|mm|Milímetro|
|Q|Quarto de Milímetro|
|in|Polegadas|
|pc|Paica|
|pt|Pontos|
|px|Pixels|

# 📒 Unidade de Medidas Relativas
São calculadas com base em unidades já conhecidas de **outro elemento**, o que faz com que o resultado possa **variar** de acordo com o valor da propriedade do elemento no qual estamos nos baseando.

## ➡️ Porcentagem[%]
É uma unidade de medida que irá utilizar como referência o **elemento pai** para se basear, podendo *alterar o resultado* de acordo com o lugar em que está inserido.

## ➡️ Unidade de Medida[em]
Quando utilizada para definir o tamanho da fonte de um elemento, vai utilizar como referência **o valor da propriedade font-size do elemento pai** no qual está inserido.
Caso seja utlizado a unidade [em] para outras propriedades que não sejam o tamanho da fonte do elemento, o resultado será em relação ao tamanho da fonte do próprio elemento em que está sendo definida a propriedade.

## ➡️ Unidade de Medida[rem]
Semelhante ao [em], porém a diferença é que enquanto utiliza o elemento pai como referência , o [rem] está relacionado ao **tamanho da fonte do elemento raíz**, chamado *root*, que no caso, é a *tag html*.

## ➡️ Viewport[vw]
É a área visível de uma página web, podendo variar de dispositivo para dispositivo. São calculadas em relação ao tamanho da área em que o usuário está vendo sua página.
- `viewport width [vw]`: *1vw = 1%* do tamanho da largura da área visível da página.
- `viewport height [vh]`: *1vh = 1%* do tamanho da altura da área visível da página.