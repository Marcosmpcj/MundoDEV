# Técnicas para responsividade
1. Ideias de *grids fluídos*
2. Técnicas de *imagens fluídas*
3. *Medias Queries*

# Layouts flexíveis
Uma das maneiras de se construir *layouts flexíveis* é usando o **Grid Layout**;**Flexbox** e **Múltiplas Colunas**, combinando com *unidades de medidas relativas*, incluindo as relacionadas à *viewport*.

## Técnica `Multicolunas(multicol)`
Especifica-se em quantas colunas o conteúdo será dividido e o navegador irá calcular o tamanho delas conforme o tamanho da tela mudar.

- `column-count`: Permite **dividir o conteúdo de um elemento em um número específico de colunas.**

````CSS
    <style>
       .container{
         column-count: 3; 
       } 

    </style>
````

- `column-width`: Define a **largura mínima ideal** que você deseja para cada coluna. Assim, redimensiona a *quantidade de colunas *que o navegador deve ter a partir de uma *largura determinada*.

- `column-rule`: Adiciona um **divisor visual** entre as colunas, como uma linha vertical. Ele funciona de forma idêntica à *propriedade border (borda)*, mas é aplicado apenas no espaço (gap) entre as colunas, sem ocupar espaço adicional no layout.

- `column-gap`: Define o t**amanho do espaço vazio** (a "vala" ou gutter) que fica entre as colunas do seu conteúdo.

````CSS
    <style>
       .container{
         column-width: 300px;
         column-rule:1px solid gray;
         column-gap: 20px;
       } 

    </style>
````