function media() {
    var num_str;
    var num = 0;
    var soma = 0;
    var i = 0;

    do {
        num_str = prompt("Digite um número:");
        num = Number(num_str);
        if (!isNaN(num) && num != 0) {
            soma = soma + Number(num);
            i++;
        }
    } while (!isNaN(num) && num != 0);

    if (i > 0){
        var divisao = soma / i;
        document.getElementById("resultado").innerHTML = `A média é ${divisao}`;
    } else {
        document.getElementById("resultado").innerHTML = "Não foram inseridos números.";
    }

}
