var meses = [ 
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
];

function filtrar() {
    var c = document.getElementById("entrada").value + "";

    var resultado = "Meses = [" + meses + "] <br>";

    if (c.length > 0) {
        var filtrado = meses.filter(existe);
        resultado = resultado + "Os seguintes meses têm a letra '" + c;
        resultado = resultado + "' : [" + filtrado + "] <br>";
    } else {
        resultado = resultado + "Digite um caracter!!!";
    }


    document.getElementById("resultado").innerHTML = resultado;
}

function existe(valor) {
    var c = document.getElementById("entrada").value + "";
    
    var c_upper = c.toUpperCase();
    var c_lower = c_upper.toLowerCase();

    var contains_upper = (valor.indexOf(c_upper) >= 0);
    var contains_lower = (valor.indexOf(c_lower) >= 0);

    return (contains_upper || contains_lower);
}
