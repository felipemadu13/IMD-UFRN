import { FiguraGeometrica } from "./FiguraGeometrica";
import { Circulo } from "./Circulo";
import { Quadrado } from "./Quadrado";
import { Triangulo } from "./Triangulo";
import { FiguraEquilatero } from "./FiguraEquilatero";


var figura = new FiguraGeometrica();
var circ = new Circulo();
var quad = new Quadrado();
var tri = new Triangulo();
var figequi = new FiguraEquilatero();

function desenharForma(forma: FiguraGeometrica) {
    forma.desenha(); 
}

desenharForma(figura);
desenharForma(circ);
desenharForma(quad);
desenharForma(tri);
desenharForma(figequi);
