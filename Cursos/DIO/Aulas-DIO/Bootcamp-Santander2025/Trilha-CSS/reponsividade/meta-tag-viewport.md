# Meta Tag Viewport
Irá informar para os navegadores que eles devem utilizar **a largura da janela do dispositivo para exibir a página web**, fazendo com que os navegadores as redimensionem melhor, ajudando na responsividade.

````HTML
    <meta name="viewport" content="width=device-width,initial-scale=1">
````

- `width=device-width`: sobrescreve a configuração padrão dos navegadores para a largura da janela do dispositivo.
- `initial-scale`: define zoom inicial da janela.
- `height`: define altura específica para a viewport.
- `minimum-scale`: define o nível mínimo de zoom.
- `maximum-scale`: define o nível máximo de zoom.
- `user-scalable`: impede que o usuário aplique zoom na página caso tenha valor definido como **NO**.
