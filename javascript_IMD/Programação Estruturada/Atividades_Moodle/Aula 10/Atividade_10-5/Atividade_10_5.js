function primos() {
    var num = 0;

    while (num <= 1 || isNaN(num)) {
        num = prompt("Escolha um número maior que 1:")
    }

    var resposta = `<strong>Os primos de ${num}:</strong> 2`;
    var atual;
    for (atual = 3; atual <= num; atual++) {
        var primo = true;
        for (j = 2; j < atual; j++) {
            if (atual % j == 0) {
                primo = false;
            }        
        }
        if (primo) {
            resposta = resposta + ", " + atual;
        }
    }
    
    document.getElementById("resultado").innerHTML = resposta;
}
