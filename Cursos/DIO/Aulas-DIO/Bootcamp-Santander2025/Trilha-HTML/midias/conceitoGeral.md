# Tags de Mídias
Mídia é tudo relacionado a som e imagem.

## Tag img
```html
<img title="Descrição da img/título" alt="Descrição da img/aúdio" src="url/caminho" width="200" height="100"/>

<svg> </svg>  mais indicado para extenção .svg
```

Algumas observações de extenções de imagens:

- .JPG/.JPEG
    - compressão com perdas(reduz qualidade para diminuir tamanho). 
    - ideal para fotos e imagens com muitos detalhes e cores.
    - Não suporta transparência.
    - Arquivos leves, mas perdem nitidez se editados e salvos muitas vezes.

- .PNG
    - Compressão sem perdas (mantém qualidade).
    - Suporta transparência (áreas vazias ou sem cor).
    - Melhor para logos, ícones, imagens com texto ou fundo transparente.
    - Arquivos mais pesados que JPG.

- .GIF
    - Suporta animações simples.
    - Limite de 256 cores (paleta reduzida).
    - Suporta transparência, mas não em alta qualidade (sem semitransparência).
    - Leve, mas pouco usado para imagens estáticas.

- .WEBP
    - Formato moderno criado pelo Google.
    - Suporta compressão com e sem perdas, transparência e animações.
    - Gera arquivos geralmente mais leves que JPG e PNG.
    - Nem todos os softwares antigos suportam.

- .SVG
    - Formato vetorial (baseado em equações, não pixels).
    - Escalável sem perder qualidade (ótimo para ícones e logos).
    - Arquivos muito leves.
    - Não indicado para fotos.

- .BMP
    - Formato antigo do Windows, sem compressão.
    - Qualidade alta, mas arquivos muito pesados.
    - Hoje é pouco usado.

## Tag audio

```html
<audio controls autoplay>
    <source src="masica1.mp3">
    Seu navegador não tem suporte a áudio
</audio>
```

## Tag video

```html
<video controls autoplay>
    <source src="video1.mp4">
    <source src="video1.webm">
    Seu navegador não tem suporta a vídeo
</video>
```
