
function excluir(array, itensParaExcluir) {

    for (i = 0; i < itensParaExcluir.length; i++) {

        if (array.includes(itensParaExcluir[i])) {

            var valor = itensParaExcluir[i];
            var indice = array.indexOf(valor)

            while (indice >= 0) {

                array.splice(indice, 1)
                indice = array.indexOf(valor)

            }
        }
    }
    return array
}
var exemplo = [1, 2, 3, 1, 2];
console.log(excluir(exemplo,  [1, 2])); // [ 3 ]