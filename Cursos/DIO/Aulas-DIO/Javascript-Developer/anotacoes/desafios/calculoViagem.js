
// programa calculo viagem
const tipoCombustivel = prompt("Etanol ou Gasolina?")
let precoCombustivel
let consumoCarro
let KmViagem = parseInt(prompt("Qual a distância percorrida?"))
let valorViagem

//preco do combustível e consumo
if (tipoCombustivel === "Etanol") {
    precoCombustivel = 4.20
    consumoCarro = 10.5
} else if (tipoCombustivel === "Gasolina") {
    precoCombustivel = 5.99
    consumoCarro = 15.2
} else {
    console.log("tipo de combsutpivel inválido")
}

//valor da viagem
valorViagem = (KmViagem / consumoCarro) * precoCombustivel

console.log(`O valor da viagem é de R$ ${valorViagem.toFixed(2)} reais`)

