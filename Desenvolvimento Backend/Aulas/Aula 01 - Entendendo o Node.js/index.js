const readline = require('readline');

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

leitor.question('Digite um número de 1 a 10: ', function (resposta) {
    console.log(`Você digitou ${resposta}`)
    leitor.close()
})
