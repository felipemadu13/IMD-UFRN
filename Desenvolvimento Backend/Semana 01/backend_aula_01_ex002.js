const readline = require('readline')

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

leitor.question('Dada a equação y = x² + 5x + 100\nDigite o valor de X: ', (x) => {

    if (!isNaN(x)) {
        var calculo = (x * x) + (5 * x) + 100
        console.log(`O resultado da equação é ${calculo}`)
        leitor.close()
    } else {
        console.log('Digite um número válido')
        leitor.close()
    }


})
