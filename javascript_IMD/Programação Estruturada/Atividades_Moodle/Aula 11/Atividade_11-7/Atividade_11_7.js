var array1 = [];
var array2 = [];
var soma = [];
exibir();

function inserir(a) {
    if(a==1) {
        var x = Number(document.getElementById("entrada1").value);
        array1.push(x);
    } else if (a==2) {
        var x = Number(document.getElementById("entrada2").value);
        array2.push(x);
    }
    somar();
    exibir();
}

function somar() {
    soma = [];
    if(array1.length > array2.length) {
        for (i = 0; i < array2.length; i++) {
            soma.push(array1[i] + array2[i]);
        }
        for (i = array2.length; i < array1.length; i++) {
            soma.push(array1[i]);
        }
    } else {
        for (i = 0; i < array1.length; i++) {
            soma.push(array1[i] + array2[i]);
        }
        for (i = array1.length; i < array2.length; i++) {
            soma.push(array2[i]);
        }
    }
}

function exibir() {
    var texto = "Array 1 = [" + array1 + "] <br>";
    texto = texto + "Array 2 = [" + array2 + "] <br>";
    texto = texto + "Soma = [" + soma + "] <br>";
    document.getElementById("resultado").innerHTML = texto;
}