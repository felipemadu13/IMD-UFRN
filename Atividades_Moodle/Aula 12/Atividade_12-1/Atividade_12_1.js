var array = [];
var ordenado = [];
exibir();

function inserir() {
    var x = Number(document.getElementById("entrada").value);
    array.push(x);
    ordenado.push(x);
    exibir();
    maior();
}

function limpar() {
    array = [];
    ordenado = [];
    exibir();
    maior();
}

function exibir(){
    var texto = "Array = [" + array + "] <br>";
    document.getElementById("array").innerHTML = texto;
}

function maior() {
    var resultado = "";
    var x = Number(document.getElementById("ordem").value);
    if (x > 0) {
        if (x <= ordenado.length) {
            ordenado.sort(comparar);
            ordenado.reverse();
            resultado = ordenado[x-1];
        } else {
            resultado = "O valor N é maior do que o tamanho do array ("+ ordenado.length +")!!!"
        }
    } else {
        resultado = "Favor inserir um número maior do que zero!!!"
    }
    exibir();
    document.getElementById("resultado").innerHTML = resultado;
}

function comparar(a, b){
    return a - b;
}