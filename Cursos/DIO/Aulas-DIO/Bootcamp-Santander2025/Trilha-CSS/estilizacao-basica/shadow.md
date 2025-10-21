## Propriedade `box-shadow`
Define uma sombra em uma box.
````css
div{
    width:200px;
    height:200px;
    border: 1ps solid black;
    background-color: red;
    margin:20px auto;
    

    box-shadow: 20px 20px 5px -7px;
    /*vertical horizontal desfoque propagação */
    /*separando por vírgula, pode adicionar mais camadas de sombras*/
}
````
## Propriedade `filter:drop-shadow`
Em imagens .png, que permitem contornos transparentes, é possível aplicar sombras em volta desses contornos.

````CSS
width: 500px;
height:200px;
object-fit:cover;

filter: drop-shadow(10px 10px 5px gray)
````

## Propriedade `text-shadow`
Aplica sombra referente a um título.

````CSS

text-shadow: 5px 5px 5px gray;
/*horizontal vertical desfoque color*/

````