function inteiro() {
    var valor_txt = document.getElementById("valor").value;
    var valor = Number(valor_txt);
    var resposta = is_int(valor);
    document.getElementById("saida").innerHTML = "É um número inteiro? " + resposta;
}

function is_int(num) {
    if (typeof num !== 'number')
        return false; 
   
   return !isNaN(num) && 
          parseInt(Number(num)) == num && 
          !isNaN(parseInt(num, 10));
 }


