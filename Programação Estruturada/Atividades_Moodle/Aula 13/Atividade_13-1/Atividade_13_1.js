function sequenciaFib() {
    var n = Number(document.getElementById("numero").value);
    var resultado = "";

    if (n > 0){
        // RECURSIVO
        var sequencia = [1];
        for (var i = 2; i <= n; i++) {
            sequencia.push(fibonacci(i));
        }

        // LAÇOS
        /*
        var sequencia = [1];
        if (n > 1) {
            sequencia.push(1);
            for (var i = 3; i <= n; i++) {
                sequencia.push(sequencia[i-2] + sequencia[i-3]);
            }
        }
        */

        resultado = "["+sequencia+"]";
    } else {
        resultado = "Insira um número maior que zero.";
    }

    document.getElementById("resultado").innerHTML = resultado;
}

function fibonacci(n) {
    var retorno = "";

    // Condição de TERMINAÇÃO
    if (n < 0) {
        retorno = "ERRO";

    // CASO BASE
    } else if (n == 0) {
        retorno = 0;

    // CASO BASE
    } else if (n == 1) {
        retorno = 1;

    // RECURSÃO (n > 0)
    } else {
        retorno = fibonacci(n-2) + fibonacci(n-1);
    }

    return retorno;
}
