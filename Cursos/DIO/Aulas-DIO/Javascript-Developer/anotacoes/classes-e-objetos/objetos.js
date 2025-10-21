//objetos = coleção dinâmica de chave e valor
const userDate = {
    name: 'Marcos Paulo da Cruz Junior',
    age: 22,
    cargo: 'Sargento',
    endereco: 'Rua E40, n°4',
    telefone: '(19) 97152-0162',
}

console.log(userDate)
//incrementar objetos
userDate.height = 1.78
userDate.weight = 105

console.log(userDate)

//deletar objetos
delete userDate.endereco

console.log(userDate)