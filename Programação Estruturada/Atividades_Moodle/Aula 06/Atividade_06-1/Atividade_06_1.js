function aleatorio() {
    var min_txt = Number(document.getElementById("minimo").value);
    var max_txt = Number(document.getElementById("maximo").value);
    var resultado = Math.floor(Math.random() * (max_txt - min_txt + 1) ) + min_txt;
    document.getElementById('saida').innerHTML = resultado
}


