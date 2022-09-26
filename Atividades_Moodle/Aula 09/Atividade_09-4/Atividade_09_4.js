function recomendar() {
    var nota = Number(document.getElementById("nota").value);

    switch(nota) {
        case 0:
        case 1:
        case 2:
            document.getElementById("saida").innerHTML = "Você precisa melhorar muito!";
            break;
        case 3:
        case 4:
            document.getElementById("saida").innerHTML = "Você está quase conseguindo!";
            break;
        case 5:
        case 6:
            document.getElementById("saida").innerHTML = "Você conseguiu, mas poderia ser melhor!";
            break;
        case 7:
        case 8:
        case 9:
            document.getElementById("saida").innerHTML = "Você conseguiu!";
            break;
        default:
            document.getElementById("saida").innerHTML = "Você conseguiu com perfeição!";
    }

}
