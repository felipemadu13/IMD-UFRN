var original = [];

function inserir() {
    var x = Number(document.getElementById("entrada").value);
    original.push(x);
    document.getElementById("resultado").innerHTML = imprimir();
}

function imprimir() {
    var texto = original.toString();
    return texto;
}
