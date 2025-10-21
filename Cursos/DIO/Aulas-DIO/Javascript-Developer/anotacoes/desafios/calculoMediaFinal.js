
// programa calculo notas e media final

const qtd = parseInt(prompt("Quantas notas?")) //quantidade de notas a serem contabilizadas
let nota
let soma = 0
let i = 1

while (i <= qtd) {
    nota = parseInt(prompt("Digite sua nota " + i))
    soma = soma + nota
    i++
}
const media = soma / qtd

//classificação

if (media < 5) {
    console.log(`Você está reprovado!`)
    console.log(`Sua média final é ${media}`)
} else if (media >= 5 && media < 7) {
    console.log(`Você está de recuperação!`)
    console.log(`Sua média final é ${media}`)
} else {
    console.log(`Você passou de semestre!`)
    console.log(`Sua média final é ${media}`)
}

