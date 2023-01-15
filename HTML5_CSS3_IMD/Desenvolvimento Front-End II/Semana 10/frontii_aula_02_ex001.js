function calcularSuprimento() {
    var idade = 30;
    var qtdlanche = 2;
    var preco = 10;

    var tempoDeVida = 85 - idade;

    var formatterBRL = new Intl.NumberFormat('pt-BR');
    var total = tempoDeVida * 365 * qtdlanche * preco;

    var resultado = `Você precisará de R$ ${(formatterBRL.format(total))} para ter um suprimento de lanche até 85 anos.`

    return resultado

}

console.log(calcularSuprimento());
