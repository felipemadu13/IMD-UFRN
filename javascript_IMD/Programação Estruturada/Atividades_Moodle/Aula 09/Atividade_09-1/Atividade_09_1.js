function analisar() {
    var x1 = Number(document.getElementById("valor1").value);
    var x2 = Number(document.getElementById("valor2").value);
    var x3 = Number(document.getElementById("valor3").value);

    var maior = x1;
    if (x2 > x1 && x2 > x3) {
        maior = x2
    } else if (x3 > x1 && x3 > x2) {
        maior = x3
    }

    var soma = x1 + x2 + x3
    var parimpar = 0

    if (soma % 2 == 0) {
        parimpar = 'par'
    } else {
        parimpar = 'ímpar'
    }


    document.getElementById('saida').innerHTML = `Valor Máximo = ${maior} e a soma dos valores (${soma}) é ${parimpar}`
    
}
