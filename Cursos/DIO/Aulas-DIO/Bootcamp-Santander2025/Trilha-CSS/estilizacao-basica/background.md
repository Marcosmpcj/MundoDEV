# Propriedade `background-image`
Adiciona uma imagem como plano de fundo.

````css
backgound-image: url(' # ')
````
Para sobrepor uma imagem sobre a outra em camadas,respectivamente, basta:
````css
backgound-image: url(' # '), url(' # '), url(' # ')
````

# Propriedade `background-size`
Redimensiona o tamanho da imagem.

| | |
|---|---|
|**auto**|mantém o tamanho padrão.|
|**cover**|cobre todo o fundo do elemento pai, mesmo se a imagem for maior ou menor que a caixa definida.|
|**contain**|redimendiona o conteúdo da imagem para que ela aparece completamente.|
|**definindo valor(width)**|atribuimos valores para manipular as dimensões do conteúdo. Se passarmos apenas um valor, o height será `auto`|
|**definindo valor(width/height)**|atribuimos valores para todas as dimensões.|

# Propriedade `background-repeat`
Define se o backgrund se repete ou não e quais os eixos de repetição.

|||
|---|---|
|**repeat**|repete a imagem nos dois eixos.|
|**repeat-x**|repete no eixo x (horizontal).|
|**repeat-y**|repete no eixo y (vertical).|
|**space**|repete nos dois eixos, adicionando um espaço para que a imagem não seja cortada.|
|**round**|repete em todas as direções, tocando em todas as bordas da caixa.|
|**no-repeat**|não repete a imagem.|

# Propriedade `background-attachment`
Define como o background do elemento vai se movimentar em relação a janela do navegador.

|||
|---|---|
|**fixed**|fixo em relação a janela.|
|**scroll**|se movimenta em relação a janela|
|**local**|se movimenta em relação ao conteúdo do elemento e fixa em relação a janela.|

# Propriedade `background`
É possível setar algumas propriedades de uma só vez. 
````css
background:
    url('../images/background-2.jpg')/*image*/
    top center / 200px 200px /*position / size*/
    no-repeat /*repeat*/
    scroll /*attachment*/
    padding-box /*origin*/
    content-box /*color*/
````