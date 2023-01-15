var n = 0;
var m = 0;

function iniciar() {
    n = Number(document.getElementById("number_N").value);
    m = Number(document.getElementById("number_M").value);

    var resposta = "";
    if (n > 0 && m > 0) {
        var matrizA = inserir();
        var matrizB = inserir();
        var mesmaDimensoes = compararDimensoes(matrizA, matrizB);

        if (!mesmaDimensoes) {
            resposta = "Favor inserir matrizes com as mesmas dimensões."
        } else {
            var matrizSoma = subtrairMatrizes(matrizA,matrizB);
            resposta = exibirMatriz(matrizA) + "<br> - <br>";
            resposta = resposta + exibirMatriz(matrizB) + "<br> = <br>";
            resposta = resposta + exibirMatriz(matrizSoma);
        }
    } else {
        resposta = "Favor inserir valores positivos para as dimensões N e M."
    }
    document.getElementById("resposta").innerHTML = resposta;
}

// Esta função assume que as matrizes têm as mesmas dimensões.
function subtrairMatrizes(m1,m2) {
    var resposta;
    if (m1.length == 0) {
        resposta = [];
    } else {
        resposta = [subtrairArrays(m1[0],m2[0])];
        resposta = resposta.concat(subtrairMatrizes(m1.slice(1), m2.slice(1)));
    }
    return resposta;
}

// Subtração de Arrays
function subtrairArrays(l1, l2) {
    var soma;
    if (l1.length == 0) {
        soma = l2.slice(0);
    } else if (l2.length == 0) {
        soma = l1.slice(0);
    } else {
        var somaDoResto = subtrairArrays(l1.slice(1), l2.slice(1));
        soma = [l1[0] - l2[0]];
        soma = soma.concat(somaDoResto);
    }
    return soma;
}

// Comparar Dimensões
function compararDimensoes(a,b) {
    var resposta = true;
    if (a.length != b.length) {
        resposta = false;
    } else if (a.length == 0) {
        resposta = true;
    } else {
        resposta = (a[0].length == b[0].length);
        resposta = resposta && compararDimensoes(a.slice(1), b.slice(1));
    }
    return resposta;
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
