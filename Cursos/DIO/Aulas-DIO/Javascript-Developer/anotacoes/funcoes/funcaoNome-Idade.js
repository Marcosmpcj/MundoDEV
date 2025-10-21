function writeName(name) { 
    return "Meu nome é  " + name.split(" ")[0]
}

function verifyAge(age) {
    if (age < 18) {
        return `menor de idade`
    } else {
        return `maior de idade`
    }
}

console.log(writeName(prompt('Digite seu nome completo')) + ' e sou ' + verifyAge(prompt('Digite sua idade')))