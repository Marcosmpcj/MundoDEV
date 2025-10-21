//const funcoes = require('./funcoes-auxiliares') outro modo é :
const {gets, print} = require('./funcoes-auxiliares') //  desestruturação de objetos = "Pegue os métodos gets e print de dentro do objeto que está sendo exportado, e crie variáveis com esses nomes diretamente."

//importamos aquilo que está sendo exportado do arquivo segundário

const numerosSorteados = []

for (let i = 0; i < 5; i++){
    const numeroSorteado = gets()
    numerosSorteados.push(numeroSorteado) 
}

let maiorValor = 0
for (let i = 0; i < numerosSorteados.length; i++){
    const numeroSorteado = numerosSorteados[i]
    if (numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado
    }
}

print(maiorValor)

