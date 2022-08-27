function positivos() {
    var x1 = Number(window.document.getElementById('entrada1').value)
    var x2 = Number(window.document.getElementById('entrada2').value)
    
    if (x1 > 0 && x2 > 0){
        window.document.getElementById('saida').innerHTML = true;
    } else {
        window.document.getElementById('saida').innerHTML = false;
    }

}

function ler_entrada(campo) {

}

function escrever_saida(campo, valor) {

}

function maior(valor, limiar) {

}

// Complete o corpo da função positivo do arquivo Atividade_04_3.js, de forma que essa função escreva, no parágrafo de identificador “saída”:

// o valor "true", se os dois valores passados como entrada forem maiores que zero, ou 
// o valor "false", se pelo menos um dos dois valores passados como entrada for menor ou igual a zero. 

// Você deverá fazer uso das funções ler_entrada, escrever_saida e maior, as quais também precisarão ter seus corpos definidos.