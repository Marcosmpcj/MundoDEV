# Posicionando os elementos em tela
A propriedade `position` vai nos ajudar a manipular a localização/posição do elemento na usa página.

* ``position: static;`` : (padrão) são exibidos na ordem normal do fluxo do documento (ou seja, onde eles naturalmente aparecem no código HTML).
* ``position: relative;``: posiciona um elemento em relação à sua posição normal no fluxo do documento. Este comando libera as propriedades de deslocamento (``top, right, bottom, left``).
* ``position: absolute;``: O elemento é **removido completamente do fluxo normal** do documento. Ele não ocupa mais espaço, e os outros elementos se comportam como se ele não existisse.  O elemento é posicionado em relação ao seu a**ncestral posicionado mais próximo**(*Um ancestral posicionado é qualquer elemento pai que tenha position definido como ``relative, absolute, fixed ou sticky``*).
**OBS**: Ao usar ``position absolute``, para mudar a *referência* da página html para qualquer elemento pai, deve-se colocar um **position relative** no *elemento pai* e um **position absolute** no *elemento filho*. Assim o filho irá se posicionar em relação à posição do elemento pai como absoluta, e não mais a página html.
* ``position: fixed;``: Retira o elemento do fluxo normal do documento e o posiciona em relação à janela de visualização (viewport). Logo  o elemento é fixado em um local específico da tela, e permanece nesse local mesmo quando o usuário rola a página.
* ``position: sticky;``: Combinação das propriedades *fixed* e *relative*. Ele permite que um elemento seja posicionado normalmente (como se fosse ``relative``) até que ele **atinja um ponto específico** na janela de visualização (viewport), momento em que ele **"gruda"** e se comporta como um elemento ``fixed``.

## Propriedade `z-index`
define a ordem de empilhamento de um elemento em relação a outros elementos que se sobrepõem no eixo Z (profundidade). Em termos mais simples, ele decide qual elemento deve ficar por cima e qual deve ficar por baixo quando eles se cruzam na tela.
- Por padrão, todos os elementos tem o `z-index` igual a zero.
- **Quanto maior o `z-index`, mais sobreposto ele estará em relação aos outros elementos.**