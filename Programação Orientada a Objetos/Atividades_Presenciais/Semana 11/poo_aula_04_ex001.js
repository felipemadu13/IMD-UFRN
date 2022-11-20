// class Estudante {
//     readonly id: string;
//     nome: string;
//     private _creditos: number;
    
//     constructor(id: string, nome: string) {
//         this.id = id;
//         this.nome = nome;
//     }

//     get creditos(): number {
//         return this._creditos;
//     }

//     set creditos(creditoAcademico: number) {

//         if (creditoAcademico <= 0) {
//             this._creditos = 1;
//         } else {
//             this._creditos = creditoAcademico;
//         }
//     }

//     detalhar() {
//         console.log(`O Estudante ${this.nome} de ID #${this.id} com créditos acadêmicos de ${this.creditos}`)
//     }

// }

// let estudante1 = new Estudante('20229007888', 'Alan');
// let estudante2 = new Estudante('2022994577', 'Willian');

// estudante1.creditos = 10;
// estudante2.creditos = -5;

"use strict";
class Estudante {
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
    }
    get creditos() {
        return this._creditos;
    }
    set creditos(creditoAcademico) {
        if (creditoAcademico <= 0) {
            this._creditos = 1;
        }
        else {
            this._creditos = creditoAcademico;
        }
    }
    detalhar() {
        console.log(`O Estudante ${this.nome} de ID #${this.id} com créditos acadêmicos de ${this.creditos}`);
    }
}
let estudante1 = new Estudante('20229007888', 'Alan');
let estudante2 = new Estudante('2022994577', 'Willian');
estudante1.creditos = 10;
estudante2.creditos = -5;
estudante1.detalhar();
estudante2.detalhar();

// estudante1.detalhar();
// estudante2.detalhar();




