import { Computador } from "./Computador";
import { Desktop } from "./Desktop";
import { Laptop } from "./Laptop";

var pc = new Computador();
var note = new Laptop();
var mesa = new Desktop();

note.processador = "Intel Core 9"
mesa.memoria = 8

console.log(note);
console.log(mesa);