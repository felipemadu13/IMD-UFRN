import { CelularTijolo } from "./CelularTijolo";
import { CelularFlip } from "./CelularFlip";
import { CelularSmart } from "./CelularSmart";

var tijolo = new CelularTijolo('grande', 100);
var flip = new CelularFlip('grande', 80, true);
var smart = new CelularSmart('grande', 50, true, true);

console.log(tijolo)
console.log(flip)
console.log(smart)