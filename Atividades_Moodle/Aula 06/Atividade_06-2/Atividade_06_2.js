function decimal() {
    var valor_txt = Number(document.getElementById("valor").value);
    var decimais_txt = Number(document.getElementById("decimais").value);

    document.getElementById("saida").innerHTML = valor_txt.toFixed(decimais_txt);
}

