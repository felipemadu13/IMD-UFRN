function inverter() {
    var texto = document.getElementById("texto").value;

    var array = texto.split(" ");
    array = array.reverse();

    var textoInvertido = montarTexto(array)

    document.getElementById("resultado").innerHTML = textoInvertido;
}

function montarTexto(a) {
    var retorno;
    if (a.length == 0) {
        retorno = "";
    }
    else {
        retorno = a[0] + " " + montarTexto(a.slice(1));
    }
    return retorno;
}