var array = [];

function inserir() {
    var x1 = Number(document.getElementById("entrada").value);
    array.push(x1);
    imprimir();
}

function limpar() {
    array = [];
    imprimir();
}

function maximo() {
    var maximo;
    var resposta;
    if (array.length > 0) {
        maximo = array[0];
        for(var i = 1; i < array.length; i++) {
            if(array[i] > maximo) {
                maximo = array[i];
            }
        }
        resposta = "O valor máximo do array é " + maximo;
    } else {
        resposta = "O array está vazio. Não temos valor máximo";
    }
    return resposta;
}

function imprimir() {
    document.getElementById("resultado").innerHTML = `Array: ${array} <br>` + maximo();
}