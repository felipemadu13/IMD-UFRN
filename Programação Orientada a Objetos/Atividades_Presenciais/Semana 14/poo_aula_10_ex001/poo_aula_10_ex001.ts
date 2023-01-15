function adicionar_valor(inicial: number, adicional: number) {

    if (adicional <= 0) {
        throw new Error("Somente valores postitivos devem ser adicionados ao valor inicial");
    } else {  
        return console.log(`A soma dos valores: ${inicial + adicional}`)
    }

}

// Valores Positivos
try {
    adicionar_valor(2, 6);
}
catch (e: any) {
    console.log(e.message);
}

// Valores Negativos
try {
    adicionar_valor(2, -6);
}
catch (e: any) {
    console.log(e.message);
}
