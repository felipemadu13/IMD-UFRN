function mes() {
        var mes = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro",];

        var data = new Date();
        document.getElementById("resultado").innerHTML = mes[data.getMonth()];
}
