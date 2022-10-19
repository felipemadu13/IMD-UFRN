function converter() {

    var entrada = Number(document.getElementById("minutos").value);
    
    var horas = (entrada / 60);
    var horasInt = parseInt(horas);
    var minutos = (horas - horasInt) * 60;
    var minutosInt = Math.round(minutos);
    
    document.getElementById("saida").innerHTML = `${horasInt}h${minutosInt}`;
}