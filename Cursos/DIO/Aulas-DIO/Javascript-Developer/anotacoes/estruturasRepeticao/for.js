//estrutuas de repetição - for

//Ex_1 : tabuada

for (let x = 1; x <= 10; x++) {
    console.log('Tabuada do ' + x)
    for (let y = 0; y <= 10; y++) {
        console.log(`${x} x ${y} = ${x * y}`)
    }
}

//Ex_2 : escrevendo letra a letra de cada nome
const nome = 'Eline da Silva Alves'

for (let i = 0; i < nome.length; i++){
    console.log(nome[i])
}

//Ex_3 : numeros pares

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

console.log(`Os numeros pares da lista são: `)

for (let i = 0; i < numeros.length; i++) {
    let numerosPares = numeros[i]
    if (numerosPares % 2 === 0) {
        console.log(numerosPares)
    }
}

    
