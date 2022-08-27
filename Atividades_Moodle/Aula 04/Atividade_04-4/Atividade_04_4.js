function pitagoras() {
    var cateto1 = Number(document.getElementById('cateto1').value);
    var cateto2 = Number(document.getElementById('cateto2').value);
    var hipotenusa = Number(document.getElementById('hipotenusa').value);

    var quadradoCatetos = (cateto1 ** 2) + (cateto2 ** 2);
    var quadradoHipotenusa = hipotenusa ** 2;

    if (quadradoCatetos == quadradoHipotenusa) {
        document.getElementById('saida').innerHTML = true;
    } else {
        document.getElementById('saida').innerHTML = false;
    }

}