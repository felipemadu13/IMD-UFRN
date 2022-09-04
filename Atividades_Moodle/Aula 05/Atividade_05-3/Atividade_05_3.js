function pitagoras() {
    var h = ler_entrada("hipotenusa");
    var c1 = ler_entrada("cateto1");
    var c2 = ler_entrada("cateto2");

    var sq_h = quadrado(h);
    var sq_c1 = quadrado(c1);
    var sq_c2 = quadrado(c2);

    escrever_saida("saida", sq_h == sq_c1 + sq_c2);
}

function ler_entrada(campo) {
    return Number(document.getElementById(campo).value);
}

function escrever_saida(campo, valor) {
    document.getElementById(campo).innerHTML = valor;
}

function quadrado(x) {
    return x*x;
}
