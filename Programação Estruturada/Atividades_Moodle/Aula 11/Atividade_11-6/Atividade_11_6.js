var array = [];
var soma = 0;
var produto = 1;

function inserir() {
    var x = Number(document.getElementById("entrada").value);
    array.push(x);
    atualizar();
    var texto = "Array = [" + array + "] <br>";
    texto = texto + "Soma = " + soma + " <br>";
    texto = texto + "Produto = " + produto + " <br>";
    
    document.getElementById("resultado").innerHTML = texto;
}

function atualizar() {
    soma = 0;
    produto = 1;
    for (i = 0; i < array.length;i++) {
        soma = soma + array[i];
        produto = produto * array[i];
    }
}
