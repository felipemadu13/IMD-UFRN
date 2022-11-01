var n1 = 10;
var n2 = 20.1;
var n3 = 5.1;

let a = parseFloat(n1);
let b = parseFloat(n2);
let c = parseFloat(n3);

let delta = (b*b) - (4 * a * c);

var x1 = (-b + Math.sqrt(delta)) / (2 * a);
var x2 = (-b - Math.sqrt(delta)) / (2 * a);


if (delta < 0  || a == 0 || b == 0){
    console.log("Impossível calcular")
} else {
    console.log(`X1 = ${x1}`)
    console.log(`X2 = ${x2}`)
}
