
// programa calculo do IMC

let peso = Number(prompt("Qual seu peso?"))
let altura = Number(prompt("Qual sua altura?"))
const IMC = peso / (altura ** 2)

if (IMC < 18.5) {
    console.log(`IMC ${IMC.toFixed(2)} - Abaixo do peso!`)
} else if (IMC >= 18.5 && IMC < 25) {
    console.log(`IMC ${IMC.toFixed(2)} - Peso normal!`)
} else if (IMC >= 25 && IMC < 30) {
    console.log(`IMC ${IMC.toFixed(2)} - Acima do peso!`)
} else if (IMC >= 30 && IMC < 40) {
    console.log(`IMC ${IMC.toFixed(2)} - Obeso!`)
} else {
    console.log(`IMC ${IMC.toFixed(2)} - Obecidade grave!`)
}