

function unico(array) {
    var valor = [];
    
    array.forEach((item) => {if (valor.includes(item) == "") {valor.push(item)}});

    return valor
}

var exemplo = [1, 2, 3, 1, 2];
console.log(unico(exemplo));  // [ 1, 2, 3 ]


