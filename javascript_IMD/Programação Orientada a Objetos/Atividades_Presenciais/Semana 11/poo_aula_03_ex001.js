// class MesaDeJantar {
//     material: string;
//     lugares: number;
//     preco: number;

//     constructor(material:string, lugares?: number, preco?: number){
//         this.material = material;

//         if (lugares == undefined) {
//             this.lugares = 4;
//         } else {
//             this.lugares = lugares;
//         }

//         if (preco == undefined) {
//             this.preco = 0;
//         } else {
//             this.preco = preco;
//         }

//     }

//     detalhar() {
//         console.log(`Mesa de ${this.material} com ${this.lugares} lugares e custando R$${this.preco}`);
//     }
    
// }

// let mesa1 = new MesaDeJantar('Metal', 8, 100)
// let mesa2 = new MesaDeJantar('Madeira', 6)
// let mesa3 = new MesaDeJantar('Vidro')

// mesa1.detalhar();
// mesa2.detalhar();
// mesa3.detalhar();


"use strict";
class MesaDeJantar {
    constructor(material, lugares, preco) {
        this.material = material;
        if (lugares == undefined) {
            this.lugares = 4;
        }
        else {
            this.lugares = lugares;
        }
        if (preco == undefined) {
            this.preco = 0;
        }
        else {
            this.preco = preco;
        }
    }
    detalhar() {
        console.log(`Mesa de ${this.material} com ${this.lugares} lugares e custando R$${this.preco}`);
    }
}
let mesa1 = new MesaDeJantar('Metal', 8, 100);
let mesa2 = new MesaDeJantar('Madeira', 6);
let mesa3 = new MesaDeJantar('Vidro');
mesa1.detalhar();
mesa2.detalhar();
mesa3.detalhar();