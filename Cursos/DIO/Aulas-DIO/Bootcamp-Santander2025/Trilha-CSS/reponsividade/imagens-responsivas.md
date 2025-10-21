# Imagens Responsivas
Estratégias para imagens responsivas:
1. Definir uma largura máxima com CSS;
2. Renderizar diferentes imagens para tamanhos de tela distintos

````CSS
    img{
        max-width: 100%; /*nunca vai ser maior que seu tamanho natural*/
        display: block;
    }
````