function calcularIMC() {
    const peso = Number(prompt("Qual seu peso?"))
    const altura = Number(prompt("Qual sua altura?"))
    return peso / (altura ** 2)
}

function classificarIMC(imc) {
    if (imc < 18.5) {
        return `IMC ${imc.toFixed(2)} - Abaixo do peso!`
    } else if (imc < 25) {
        return `IMC ${imc.toFixed(2)} - Peso normal!`
    } else if (imc < 30) {
        return `IMC ${imc.toFixed(2)} - Acima do peso!`
    } else if (imc < 40) {
        return `IMC ${imc.toFixed(2)} - Obeso!`
    } else {
        return `IMC ${imc.toFixed(2)} - Obesidade grave!`
    }
}

function main() {
    const imc = calcularIMC()
    alert(classificarIMC(imc))
}
