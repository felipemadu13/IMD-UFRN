function maiuscula() {
    var texto = document.getElementById('entrada').value;
    var upper = texto.charAt(0).toUpperCase() + texto.slice(1);
    document.getElementById('saida').innerHTML = upper;
}
