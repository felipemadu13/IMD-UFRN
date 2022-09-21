function proteger() {
    var texto = document.getElementById('email').value;
    var index = texto.indexOf("@")
    var final = texto.lastIndexOf('r') + 1
    var inicio = texto.slice(0, index)
    var inicioTamanho = (inicio.length) / 2
    var inicioCortado = inicio.slice(0, inicioTamanho)
    var dominio = texto.slice(index, final)
    console.log(inicioCortado)
    console.log(dominio)
    document.getElementById('saida').innerHTML = `${inicioCortado}...${dominio}`
}
