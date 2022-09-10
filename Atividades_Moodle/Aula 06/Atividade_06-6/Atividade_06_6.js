function pitagoras() {
    var cateto1_txt = document.getElementById("cateto1").value;
    var cateto2_txt = document.getElementById("cateto2").value;

    var cateto1 = Number(cateto1_txt);
    var cateto2 = Number(cateto2_txt);

    var hipotenusa = Math.sqrt(Math.pow(cateto1,2) + Math.pow(cateto2,2));
    var resposta = hipotenusa.toFixed(2);
    document.getElementById("saida").innerHTML = resposta;
}


