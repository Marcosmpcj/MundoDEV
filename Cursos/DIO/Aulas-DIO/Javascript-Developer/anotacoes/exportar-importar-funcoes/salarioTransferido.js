// funcções auxiliares:

const entradas = [2000, 250]
let i = 0
function gets() {
    const valor = entradas[i]
    i++
    return valor
}
function print(texto) {
    console.log(texto)
}

module.exports = { gets, print }

// funções main:

// Faça um programa que calcule e imprima o salário a ser transferido para um funcionário.
// Para realizar o calculo, receba o valor bruto do salario e o adicional dos beneficios.
// O salario a ser transferido é calculado da seguinte maneira:

// valor bruto do salario - percentual de imposto mediante a faixa salarial + adicioal dos benefícios

// Para calcular o percentual de imposto, segue as aliquotas:

//      De R$ 0.00 a R$ 1100.00 = 5%
//      De R$ 1100.00 a R$ 2500.00 = 10%
//      Maior que R$ 2500.00 = 15%


//      Exemplo:
//          Entrada:
//              2000 = salario bruto
//              250  = beneficios

//          Saída:
//              2050.00

const { gets, print } = require('./auxiliares')

const salarioBruto = gets()
const adicionalBeneficios = gets()
let percentualImposto

if (0 < salarioBruto && salarioBruto < 1100) {
    percentualImposto = 0.05
} else if (1100 <= salarioBruto && salarioBruto < 2500) {
    percentualImposto = 0.1
} else if (salarioBruto >= 2500) {
    percentualImposto = 0.15
} else {
    print('Salário inválido!')
}

const salarioTransferido = salarioBruto * (1 - percentualImposto) + adicionalBeneficios

print('O salário transferido é ' + salarioTransferido)





