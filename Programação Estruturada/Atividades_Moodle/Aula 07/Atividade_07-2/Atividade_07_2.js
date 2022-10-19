function truncar() {
    var entradatxt = document.getElementById('texto').value;
    var entradanum = document.getElementById('quantidade').value;
    var slice = entradatxt.slice(0, entradanum);
    document.getElementById('saida').innerHTML = slice;
}
