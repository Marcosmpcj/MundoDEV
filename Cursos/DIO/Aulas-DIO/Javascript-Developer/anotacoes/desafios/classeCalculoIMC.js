//classes e obejetos

class Pessoa {
    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    calcularIMC() {
        return (this.peso / this.altura ** 2).toFixed(2)
    }
    classificarIMC() {
        if (this.calcularIMC() < 18.5) {
            return(`abaixo do peso!`)
        } else if (this.calcularIMC() >= 18.5 && this.calcularIMC() < 25) {
            return(`com peso normal!`)
        } else if (this.calcularIMC() >= 25 && this.calcularIMC() < 30) {
            return(`acima do peso!`)
        } else if (this.calcularIMC() >= 30 && this.calcularIMC() < 40) {
            return(`obeso!`)
        } else {
            return(`com obecidade grave!`)
        } 
    }

    falar() {
        console.log(`Meu nome é ${this.nome} e meu IMC é de ${this.calcularIMC()}, logo estou ${this.classificarIMC()}`)
    }

}

const marcos = new Pessoa('Marcos', 105, 1.78) //nome, idade, peso
marcos.falar()

const eline = new Pessoa('Eline', 47, 1.52)
eline.falar()