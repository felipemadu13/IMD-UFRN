function positivos() {
    var x = ler_entrada("entrada1");
    var y = ler_entrada("entrada2");

    var x_maior = maior(x, 0);
    var y_maior = maior(y, 0);
    var x_y_maior = x_maior && y_maior;

    escrever_saida("saida", x_y_maior);
}

function ler_entrada(campo) {
    return Number(document.getElementById(campo).value);
}

function escrever_saida(campo, valor) {
    document.getElementById(campo).innerHTML = valor;
}

function maior(valor, limiar) {
    return valor > limiar;
}

// A questão apresenta um erro no anunciado.
// No anunciado pede "se os dois valores passados como entrada forem maiores que zero, ou “false”, se pelo menos um dos dois valores passados como entrada for menor ou igual a zero."
// mas na tabela. 0 e 0 está com true