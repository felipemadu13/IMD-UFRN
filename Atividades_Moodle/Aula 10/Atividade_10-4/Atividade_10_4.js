function calcular() {
    var a = Number(document.getElementById("N").value);

    var resposta = ''
    if (a <= 0){
        resposta = "<strong>ERRO:</strong> O número não é positivo."
    } else {
        var soma = 0;
        for (i = 1; i <= a; i++) {
            if (i % 3 == 0 && i % 5 == 0){
                soma = soma + i;
            }
        } 
        resposta = `Soma dos múltiplos de 3 e 5 menores do que o número inteiro positivo fornecido: ${soma}`;
    }
    document.getElementById("resultado").innerHTML = resposta;
}