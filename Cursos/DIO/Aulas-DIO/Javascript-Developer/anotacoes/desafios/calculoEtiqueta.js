//programa calculo preço etiqueta

let valorInicial = parseFloat(prompt("Digite o valor do produto"));
let pagamentoEscolhido = prompt("Escolha a forma de pagamento: debito, credito, dinheiro ou pix?").toLowerCase()
let condicaoPagamento = ["debito", "credito", "dinheiro", "pix"]
let parcelamento = 1
let valorFinal

if (pagamentoEscolhido !== "credito") {
    if (parcelamento === 1 && condicaoPagamento.includes(pagamentoEscolhido) && "debito".includes(pagamentoEscolhido)) {
        valorFinal = valorInicial * 0.9
        console.log(`O subtotal é de R$ ${valorFinal.toFixed(2)} reais`)
        console.log(`Você teve desconto de R$ ${0.1 * valorInicial}`)
    } else if (parcelamento === 1 && condicaoPagamento.includes(pagamentoEscolhido) && ["dinheiro", "pix"].includes(pagamentoEscolhido)) {
        valorFinal = valorInicial * 0.85
        console.log(`O subtotal é de R$ ${valorFinal.toFixed(2)} reais`)
        console.log(`Você teve desconto de R$ ${0.15 * valorInicial}`)
    }
} else {
    parcelamento = parseInt(prompt("Digite em quantas vezes"))
    if (parcelamento === 2 && condicaoPagamento.includes(pagamentoEscolhido) && "credito".includes(pagamentoEscolhido)) {
        valorFinal = valorInicial
        console.log(`O subtotal é de R$ ${valorFinal.toFixed(2)} reais em ${parcelamento} vezes de ${(valorFinal / parcelamento).toFixed(2)} reais sem juros no ${pagamentoEscolhido}`)
    } else if (parcelamento > 2 && condicaoPagamento.includes(pagamentoEscolhido) && "credito".includes(pagamentoEscolhido)) {
        valorFinal = valorInicial * 1.1
        console.log(`O subtotal é de R$ ${valorFinal.toFixed(2)} reais em ${parcelamento} vezes de ${(valorFinal / parcelamento).toFixed(2)} reais com juros de 10% no ${pagamentoEscolhido}`)
        console.log(`Você teve juros de R$ ${0.1 * valorInicial}`)
    } else {
        console.log("forma de pagamento inválida")
    }

}

/* ASSUNTOS APRENDIDOS:

    .toLowerCase() = garante que a comparação funcione mesmo se o usuário escrever com letra maiúscula.
    condicaoPagamento.includes(pagamentoEscolhido) = verifica se a opção digitada está dentro das opções disponíveis.
*/