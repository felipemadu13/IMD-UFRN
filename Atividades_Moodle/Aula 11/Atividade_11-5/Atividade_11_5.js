var array = [];

function inserir() {
    var x = Number(document.getElementById("entrada").value);
    array.push(x);
    imprimir();
}

function remover() {
    var y = Number(document.getElementById("saida").value);

    for (i = 0; i < array.length;) {
        if(array[i] == y) {
            array.splice(i,1);
        } else {
            i++;
        }

    }
    imprimir();
}

function imprimir() {
    var texto = "Array = [" + array + "] <br>";
    document.getElementById("resultado").innerHTML = texto;
}