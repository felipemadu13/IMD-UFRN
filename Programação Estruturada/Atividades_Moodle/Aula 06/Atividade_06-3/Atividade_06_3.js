function extremos() {
    var x1 = Number(document.getElementById('valor1').value);
    var x2 = Number(document.getElementById('valor2').value);
    var x3 = Number(document.getElementById('valor3').value);
    var x4 = Number(document.getElementById('valor4').value);
    var x5 = Number(document.getElementById('valor5').value);
    var minimo = Math.min(x1, x2, x3, x4, x5);
    var maximo = Math.max(x1, x2, x3, x4, x5);
    document.getElementById("minimo").innerHTML = "Valor Mínimo é "+minimo;
    document.getElementById("maximo").innerHTML = "Valor Máximo é "+maximo;
}

