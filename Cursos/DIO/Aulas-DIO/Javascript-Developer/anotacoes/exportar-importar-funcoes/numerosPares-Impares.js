//funções auxiliares

const entradas = [5,3,4,1,10,8]
let i = 0


function gets() {
    const valor = entradas[i]
    i++
    return valor
}
function print(texto) {
    console.log(texto)
}



module.exports = { gets, print } //exporta objetos

// função main


const { gets, print } = require('./auxiliares') //imoporta objetos === const auxiliares = require('./auxilires.js'); porém cada a vez que eu chamar esses métodos, devem ser precedidos de function. Ex_: function gets(); function print().

let numeros = []
let numerosPar = []
let numerosImpar = []


for (let i = 0; i < 6; i++) {
    const numero = gets()
    numeros.push(numero)

    if (numero % 2 === 0) {
        numerosPar.push(numero)
    } else {
        numerosImpar.push(numero)
    }
}
let maiorPar = Math.max(...numerosPar) 
let menorImpar = Math.min(...numerosImpar)//... espalha os elementos do array

/*
for (let i = 0; i < numerosPar.length; i++) {
    if (numerosPar[i] > maiorPar) {
        maiorPar = numerosPar[i]
    }
}
for (let i = 0; i < numerosImpar.length; i++) {
    if (numerosImpar[i] < menorImpar) {
        menorImpar = numerosImpar[i]
    }
}
*/

print('O array dos numeros: ' + numeros)
print('O array dos numeros pares: ' + numerosPar)
print('O array dos numeros impares: ' + numerosImpar)
print('O maior par: ' + maiorPar)
print('O menor impar: ' + menorImpar)







