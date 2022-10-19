function diasNoMes() {
    var data = new Date();
    var mes = document.getElementById('mes').value;
    console.log(mes)
    var ano = data.getFullYear();

    var dia = new Date(ano, mes, 0).getDate();
    
    document.getElementById('saida').innerHTML = `O mês ${mes} tem ${dia} dias`

}
