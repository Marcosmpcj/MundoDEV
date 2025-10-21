//classes = são modelos (ou moldes) para criar objetos com propriedades e métodos. Elas são uma forma mais organizada e moderna de se trabalhar com funções construtoras e protótipos (usados antes do ES6).

//constructor = é o primeiro método que roda quando você cria um objeto com new. Ele serve pra inicializar o objeto, ou seja, dar valores aos atributos.

//new = é uma palavrinha-chave usada em JavaScript para criar um novo objeto a partir de uma função construtora ou de uma classe.

class Pessoa{
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = 2025 - idade;

    }

    falar(){
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`)
    }
}

//Exemplo_1

const usuario = new Pessoa('Marcos', 22);
usuario.falar()

class Produto{
    constructor(produto, preco) {
        this.produto = produto;
        this.preco = preco;
    }

    mostrarPreco() {
        console.log(`o preço do produto ${this.produto} é R$ ${this.preco}. `)
    }

    aplicarDesconto(porcentagem) {
        const desconto = this.preco * (porcentagem / 100)
        this.preco -= desconto // this.preco = this.preco - desconto
    }
}

//Exemplo_2

const celular = new Produto('Celular', 1000)
celular.aplicarDesconto(10)
celular.mostrarPreco()

//outro exemplo pratico

class Pessoa{
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = 2025 - idade;
    }
    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}.`)
    }
}

//Exemplo_3

function compararPessoas(p1,p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}.`)
    } else if (p1.idade < p2.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}.`)
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade.`)
    }
}

const marcos = new Pessoa('Marcos', 23)
const thales = new Pessoa('Thales', 25)

compararPessoas(marcos, thales)

//Exemplo_4
class Carro {
    constructor(marca, cor, gastoMedio) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
    }

    gastoViagem(distancia,precoLitro) {
        const gastoPercurso = (distancia / this.gastoMedio) * precoLitro
        
        console.log(`O gasto total do percurso é de R$ ${gastoPercurso.toFixed(2)}.`)
    }
}

const onix = new Carro('Onix', 'Branco', 10.7)

onix.gastoViagem(121,4.09)