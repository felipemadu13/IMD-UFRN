const transformarObjEmArray = (objeto) => {
    var array = Object.entries(objeto)
    return array
};
   
   
var exemplo = { a: 1, b: 2, c: 3};
console.log(transformarObjEmArray(exemplo)); // [['a', 1], ['b',2], ['c',3]