function inserir() {
    var entrada = document.getElementById('entrada').value;
    var insercao = document.getElementById('insercao').value;
    var posicao = document.getElementById('posicao').value;

    var textoini = entrada.slice(0, posicao)
    var textofim = entrada.slice(posicao)

    var texto = document.getElementById('saida').innerHTML = textoini + insercao + textofim;
    
}
