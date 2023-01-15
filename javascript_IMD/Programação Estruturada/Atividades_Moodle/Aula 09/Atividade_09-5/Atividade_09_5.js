function calcular() {
    var operacao = document.getElementById("operacao").value;

    var x1 = Number(document.getElementById("valor1").value);
    var x2 = Number(document.getElementById("valor2").value);

    var resultado = "";
    switch(operacao) {
        case "soma":
            document.getElementById("saida").innerHTML = "SOMA:"+(x1 + x2);
            break;
        case "subtracao":
            document.getElementById("saida").innerHTML = "SUBTRAÇÃO"+(x1 - x2);
            break;
        case "multiplicacao":
            document.getElementById("saida").innerHTML = "MULTIPLICAÇÃO"+(x1 * x2);
            break;
        case "divisao":
            document.getElementById("saida").innerHTML = "DIVISÃO"+(x1 / x2);
            break;
        default:
            document.getElementById("saida").innerHTML = "Escolha uma opção, por favor.";
    }
    

}
