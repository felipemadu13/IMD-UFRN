var tela = 
[
    ["+", "-", "-", "-", "-", "-", "-", "-", "-", "+"],
    ["|", " ", " ", " ", " ", " ", " ", " ", " ", "|"],
    ["|", " ", "+", "+", "+", " ", " ", " ", " ", "|"],
    ["|", " ", "+", "+", "+", " ", " ", " ", " ", "|"],
    ["|", " ", "+", "+", "+", " ", " ", " ", " ", "|"],
    ["|", " ", "+", "+", "+", " ", " ", " ", " ", "|"],
    ["|", " ", "+", "+", "+", "+", "+", "+", " ", "|"],
    ["|", " ", "+", "+", "+", "+", "+", "+", " ", "|"],
    ["|", " ", " ", " ", " ", " ", " ", " ", " ", "|"],
    ["+", "-", "-", "-", "-", "-", "-", "-", "-", "+"]
];
document.getElementById("resultado").innerHTML = exibirMatriz(tela);

// Inversão usando reverse e map
function inverter_h() {
    tela = tela.map(inverter);
    document.getElementById("resultado").innerHTML = exibirMatriz(tela);
}
function inverter_v() {
    tela = inverter(tela);
    document.getElementById("resultado").innerHTML = exibirMatriz(tela);
}
function inverter(a) {
    return a.reverse();
}

// Inversão iterativa e recursiva (sem usar reverse e map)
function inverter_h_v_rec() {
    inverter_h_rec();
    inverter_v_rec();    
    document.getElementById("resultado").innerHTML = exibirMatriz(tela);
}

function inverter_h_rec() {
    for (var i = 0; i < tela.length; i++) {
        tela[i] = inverter_rec(tela[i]);
    }    
    document.getElementById("resultado").innerHTML = exibirMatriz(tela);
}

function inverter_v_rec() {
    tela = inverter_rec(tela);
    document.getElementById("resultado").innerHTML = exibirMatriz(tela);
}

function inverter_rec(a) {
    var retorno = [];
    if (a.length == 0) {
        retorno = [];
    }
    else {
        retorno = inverter_rec(a.slice(1));
        retorno.push(a[0]);
    }
    return retorno;
}

// Já vimos esta solução iterativa de exibição de arrays.
// Aqui vamos ver uma solução recursiva e removemos colchetes e vírgulas.

function exibirMatriz(matriz){
    var resposta = "";

    if (matriz.length == 0) {
        resposta = "";
    } else {
        resposta = resposta + exibirLinha(matriz[0]) + "<br>";
        resposta = resposta + exibirMatriz(matriz.slice(1)) + "<br>";
    }
    return resposta;
}

function exibirLinha(linha){
    var resposta = "";

    if (linha.length == 0) {
        resposta = "";
    } else {
        resposta = resposta + linha[0];
        resposta = resposta + exibirLinha(linha.slice(1));
    }

    return resposta;
}
