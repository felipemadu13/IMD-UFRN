var bot1 = document.getElementById('potencia-button');
var bot2 = document.getElementById('metade-button');
var bot3 = document.getElementById('area-button');

function potencia3() {
    var num = document.getElementById("potencia-input").value;
    var pot3 = num * num * num
    document.getElementById("solucao").innerHTML = pot3
}

function metade() {
    var num = document.getElementById("metade-input").value;
    var metade = num / 2
    document.getElementById("solucao").innerHTML = metade
}

function circulo() {
    var num = document.getElementById("area-input").value;
    var area = 3.14 * (num * num)
    document.getElementById("solucao").innerHTML = area
}

bot1.addEventListener("click", potencia3);
bot2.addEventListener("click", metade);
bot3.addEventListener("click", circulo);

addEventListener("keydown", teclado);

function teclado(tecla) {
    if (tecla.keyCode == 80) {
        return potencia3()
    } 
    
    if (tecla.keyCode == 77) {
        return metade()
    } 
    
    if (tecla.keyCode == 67) {
        return circulo()
    }
}
