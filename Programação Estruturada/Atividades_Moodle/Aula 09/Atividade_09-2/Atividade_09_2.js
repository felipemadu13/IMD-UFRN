function triangulo() {
    var A = Number(document.getElementById('valor1').value)
    var B = Number(document.getElementById('valor2').value)
    var C = Number(document.getElementById('valor3').value)


    if (A < B + C && B < A + C && C < A + B) {
        document.getElementById('saida').innerHTML = `É possível montar o triângulo`
    } else {
        document.getElementById('saida').innerHTML = `<strong>NÃO</strong> é possível montar o triângulo`
        
    }
 
}
