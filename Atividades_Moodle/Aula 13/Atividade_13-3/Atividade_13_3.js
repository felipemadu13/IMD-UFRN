function exibir() {
    var n = Number(document.getElementById("numero_1").value);
    var m = Number(document.getElementById("numero_2").value);

    if (n > 0 && m > 0){
        resultado = "O MDC é " + mdc(n,m);
    } else {
        resultado = "Insira números maiores que zero.";
    }

    document.getElementById("resultado").innerHTML = resultado;
}

function mdc(a,b) {
    var retorno;
    if (b == 0) {
        retorno = a;
    } else {
        retorno = mdc(b, a % b);
    }
    return retorno;
}
