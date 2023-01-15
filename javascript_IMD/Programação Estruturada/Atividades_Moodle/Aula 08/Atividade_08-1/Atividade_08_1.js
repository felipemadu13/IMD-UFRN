function exibirData() {
    var data = new Date();
    
    document.getElementById('saida').innerHTML = `${data.getDate()}/${(data.getMonth() + 1)}/${data.getFullYear()}`;
    
}
