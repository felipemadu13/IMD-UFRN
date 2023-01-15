function vazia() {
    var entrada = document.getElementById('entrada').value;
    var valor = (entrada.length == 0);
    document.getElementById('saida').innerHTML = valor;

}
