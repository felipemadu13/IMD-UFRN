import { CelularTijolo } from "./CelularTijolo";
import { CelularFlip } from "./CelularFlip";
import { CelularSmart } from "./CelularSmart";

var tijolo = new CelularTijolo(true,true,'grande', 100);
var flip = new CelularFlip(true,true,'grande', 80, true);
var smart = new CelularSmart(true,true,'grande', 50, true, true);

smart.ligar()


console.log(smart)