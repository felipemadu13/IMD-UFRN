function natural() {
    var numero = Number(document.getElementById('valor').value);
    if (numero >= 0 && Math.floor(numero) == numero && numero != Infinity) {
        return document.getElementById('saida').innerHTML = true
    } else {
        return document.getElementById('saida').innerHTML = false
    }


}