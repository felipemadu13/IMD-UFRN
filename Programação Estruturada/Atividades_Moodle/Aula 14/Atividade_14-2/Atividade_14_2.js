var numeros = [1,2,[3,[4,5,6],[7,8,[9,[10],11]]],12]; // soma = 78
//var numeros = [[],[2]]; // soma = 0

function exibir(elemento) {
    var resposta = "Array = " + exibirArray(numeros);
    document.getElementById("resultado").innerHTML = resposta;
}

function exibirArray(a) {
    return "[" + exibirElementos(a) + "]";
}

function exibirElementos(a) {
    if (a.length == 0) {
        texto = "";
    } else if (!Array.isArray(a[0])){
        texto = a[0];
    } else {
        texto = exibirArray(a[0]);
    }
    var resto = a.slice(1);
    if (resto.length == 0) {
        texto = texto + "";
    } else {
        texto = texto + "," + exibirElementos(a.slice(1));
    }
    return texto;
}
