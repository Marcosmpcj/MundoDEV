## Prorpriedade `overflow`
Controla como o conteúdo deve ser exibido caso ultrapasse os limites do container. Somente utilizada para elementos do tipo block, com height especificada.
- `visible`: ignora-se os limites do container e o conteúdo é vazado o quanto for necessário para fora do container.
- `hidden`: censura todo o conteúdo extravasado do container. O usuário não é capaz de acessar todo o conteúdo.
- `scroll`: cria-se uma barra de scroll para rolagem do conteúdo limitado pelo container, sendo capaz de o usuário acessar a todo o conteúdo.
- `auto`: adiciona-se uma barra de rolagem somente quando o conteúdo ultrapassa o limite do container. Se conteúdo for menor, a barra de rolagem não é ativada.

Pode-se usar variações da propriedade como `overflow-x` e `overflow-y` para se trabalhar nos eixos horizontais e verticais