function palindromo() {
    var texto = document.getElementById("texto").value;
    var resultado = "";
    
    if (texto.trim() != "") {
        resultado = texto;
        var textoUp = texto.toUpperCase();
        var sim = (textoUp === inverter(textoUp));
        if (sim) {
            resultado = resultado + " é ";
        } else {
            resultado = resultado + " não é ";
        }
        resultado = resultado + " um palindromo.";
    
    } else {
        resultado = "Você deve inserir uma palavra";
    }


    document.getElementById("resultado").innerHTML = resultado;
}

function inverter(s) {
    var retorno = "";

    // CASO BASE
    if (s === "") {
        retorno = "";
    // RECURSÃO
    } else {
        retorno = inverter(s.substr(1)) + s[0];
    } 

    return retorno;
}
