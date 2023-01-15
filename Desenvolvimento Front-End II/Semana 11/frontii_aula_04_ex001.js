

const excluirPropriedades = (objeto, propriedades) => {
    for (var prop in objeto) {
        if (propriedades.includes(prop))
            delete objeto[prop]
    }
    return objeto

};


// var exemplo = { a: 1, b: 2, c: true};
// console.log(excluirPropriedades(exemplo, ['b'])); // { a: 1, c: true }

var exemplo = { a: 1, b: 2, c: true};
console.log(excluirPropriedades(exemplo, ['b', 'a'])); // { c: true }

