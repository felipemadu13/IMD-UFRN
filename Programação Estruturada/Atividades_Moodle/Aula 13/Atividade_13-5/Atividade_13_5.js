function exibir() {
    var texto = document.getElementById("texto").value;
    var resultado = "";
    
    if (texto.trim() != "") {
        var palavras = misturar(texto);
        for (var i = 0; i < palavras.length; i++) {
            resultado = resultado + palavras[i] + "<br>";
        }
    } else {
        resultado = "Você deve inserir uma palavra";
    }

    document.getElementById("resultado").innerHTML = resultado;
}

function misturar(texto) {
    var retorno = [];

    // CASO BASE
    if (texto === "") {
        retorno = [""];
    // RECURSÃO
    } else {
        for (var i = 0; i < texto.length; i++) {
            var resto = texto.substring(0,i) + texto.substring(i+1);
            var palavras = misturar(resto);
            for (var j = 0; j < palavras.length; j++) {
                retorno.push(texto[i] + palavras[j]);
            }

        }
    } 

    return retorno;
}
