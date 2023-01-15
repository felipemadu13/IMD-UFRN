var array = [];
exibir();

function inserir() {
    var x = Number(document.getElementById("entrada").value);
    array.push(x);
    exibir();
}

function limpar() {
    array = [];
    exibir();
}

function exibir(){
    var texto = "Array = [" + array + "] <br>";
    document.getElementById("array").innerHTML = texto;
}

function encontrarSoma() {
    var resultado = "";
    var soma = Number(document.getElementById("ordem").value);

    var encontrei = false;    
    for (var i = 0; i < array.length && !encontrei; i++) {
        for (var j = i + 1; j < array.length && !encontrei; j++) {
            if (array[i] + array[j] == soma) {
                encontrei = true;
                resultado = "Os elementos " + i + " e " + j + " somam " + soma;
            }
        }
    }
    if (!encontrei) {
        resultado = "Não existem dois elementos cuja soma seja "+soma;
    }
    document.getElementById("resultado").innerHTML = resultado;
}