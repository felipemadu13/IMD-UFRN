function verificar_minuscula() {
    var entrada = document.getElementById("entrada").value;
    var verificador = (entrada == entrada.toLowerCase());
    document.getElementById("saida").innerHTML = verificador;
}