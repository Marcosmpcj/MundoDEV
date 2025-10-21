//classes e objetos

class Carro {
    constructor(marca, cor, gastoMedio) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
    }

    gastoViagem(distancia, precoLitro) {
        const gastoPercurso = (distancia / this.gastoMedio) * precoLitro

        return (`Com o ${this.marca}, o gasto total do percurso é de R$ ${gastoPercurso.toFixed(2)}.`)
    }
}

const onix = new Carro('Onix', 'Branco', 10.7)
const uno = new Carro('Uno', 'Prata', 14.5)
const cruze = new Carro('Cruze', 'Preto', 8.5)

onix.gastoViagem(121, 4.09)
uno.gastoViagem(121, 5.90)
cruze.gastoViagem(121, 5.90)