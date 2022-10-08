function sequenciaFib() {
    var n = Number(document.getElementById("numero").value);
    var resultado = fibonacci(n);
    document.getElementById("resultado").innerHTML = resultado;
}

function fibonacci(n) {
    var retorno = "";

    if (n < 0) {
        retorno = "ERRO";
    } else if (n == 0) {
        retorno = 0;
    } else if (n == 1) {
        retorno = 1;
    } else {
        retorno = 
    }
    return retorno;
}
