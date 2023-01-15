var n = 0;
var m = 0;

function iniciar() {
    n = Number(document.getElementById("number_N").value);
    m = Number(document.getElementById("number_M").value);

    var resposta = "";
    if (n > 0 && m > 0) {
        var matriz = inserir();
        var matrizTransposta = transporMatriz(matriz);

        resposta = "Matriz Original = <br>";
        resposta = resposta + exibirMatriz(matriz) + "<br> <br>";
        resposta = resposta + "Matriz Transposta = <br>";
        resposta = resposta + exibirMatriz(matrizTransposta);
    } else {
        resposta = "Favor inserir valores positivos para as dimensões N e M."
    }
    document.getElementById("resposta").innerHTML = resposta;
}

function transporMatriz(m) {
    var retorno;
    if (m.length == 0) {
        retorno = [];
    } else {
        var m0_transposta = transporArray(m[0]);
        var resto_transposta = transporMatriz(m.slice(1));
        retorno = concatMatrizes(m0_transposta, resto_transposta);
    }
    return retorno;
}

function transporArray(a) {
    var retorno;
    if (a.length == 0) {
        retorno = [];
    } else {
        retorno = [[a[0]]];
        retorno = retorno.concat(transporArray(a.slice(1)));
    }
    return retorno;
}

function concatMatrizes(m1, m2) {
    var retorno;
    if (m1.length == 0) {
        retorno = [];
    } else {
        if (m2.length > 0) {
            retorno = [m1[0].concat(m2[0])];
            retorno = retorno.concat(concatMatrizes(m1.slice(1), m2.slice(1)));
        } else {
            retorno = m1;
        }
    }
    return retorno;
}

// Função para Inserir Matriz
function inserir() {
    var matriz = [];
    for (var i = 0; i < n; i++) {
        var linha = [];
        for (var j = 0; j < m; j++) {
            do {
                num_str = prompt("Digite o elemento "+i+" x "+j+":");
                num = Number(num_str);
                if (!invalido(num)) {
                    linha.push(num);
                } else {
                    alert("Valores devem ser números entre -999 e 1000")
                }
            } while (invalido(num));
        }
        matriz.push(linha);
    }
    return matriz;
}

function invalido(num){
    return isNaN(num) || num < -999 || num > 1000;    
}

// Função para Exibir Matriz
function exibirMatriz(matriz){
    var resposta = "[<br>";
    for (var i = 0; i < matriz.length; i++) {
        resposta = resposta + exibirLinha(matriz[i]);
        if (i + 1 < matriz.length) {
            resposta = resposta + ", <br>";
        }
    }
    resposta = resposta + "<br>]";
    return resposta;
}

function exibirLinha(linha){
    var resposta = "[";
    for (var i = 0; i < linha.length; i++) {
        resposta = resposta + exibirElemento(linha[i]);
        if (i + 1 < linha.length) {
            resposta = resposta +",";
        }
    }
    resposta = resposta + "]";
    return resposta;
}

function exibirElemento(elemento){
    var tam = elemento.toString().length;
    var brancos = 5 - tam;
    var resposta = ""; 
    for(var i=0; i < brancos; i++) {
        resposta = resposta + " ";
    }
    resposta = resposta + elemento;
    return resposta;
}
