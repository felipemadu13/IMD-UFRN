var original = [];
var clone = [];

function inserir() {
    var x = Number(document.getElementById("entrada").value);
    original.push(x);
    document.getElementById("resultado").innerHTML = imprimir();
}

function clonar() {
    clone = original.slice(0);
    document.getElementById("resultado").innerHTML = imprimir();
}

function imprimir() {
    var texto = "[" + original + "] <br>";
    texto = texto + "[" + clone + "]";
    return texto;
}
