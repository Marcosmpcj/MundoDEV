# Bordas    
Podemos definir as configurações das nossas bordas através das propriedades:

- `border-width` 
- `border-style`
- `border-color`

## Estilos das Bordas
- solid = borda contínua
- dashed = borda tracejada
- dotted = borda pontilhada
- double = borda dupla
- groove = borda com efeito 3D
- ridge = semelhante ao groove, impressão elevado
- inset = semlhante ao groove, impressão pressionado 
- outset = semelahnte ao groove, impressão de estar saindo da tela

## Propriedade `border`
Para definir as propriedades de _width, style e color_ de uma só vez, basta usar a propriedade `border`, coloacando os atributos nesta ordem : 
````CSS
border: 1px solid red;  /*width style color*/
````

## Propriedade `border-radius`
Usada para arredondar os cantos da borda.
````css
border-radius: 10px;

border-radius: 20px/50px; /*formato oval*/

border-radius: 50%; /*formato circular*/

````

## Propriedade `border-image`
- border-imagem-source
````css
border-image-source: url(../images.png); /*ao definir uma borda, uma imagem aparece nos 4 cantos*/

border-image-source: linear-gradient(red,blue); /*ao definir uma borda, um gradiente aparece nos 4 cantos*/

````
- border-imagem-width
- border-imagem-repeat
- border-imagem-outset
- border-imagem-slice: divide a imagem em regiões dentro da borda.


