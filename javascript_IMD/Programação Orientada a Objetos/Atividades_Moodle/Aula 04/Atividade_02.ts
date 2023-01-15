class Estudante {
    readonly id: string;
    private _nome: string;
    private _credito: number;

    constructor(id: string, nome: string) {
        this.id = id;
        this._nome = nome;
    }

    setCredito(credito: number) {  
        if (credito <= 0) {
            this._credito = 1;
        } else {
            this._credito = credito;
        }
    }

}

var teste = new Estudante('20228007867','Victor');
teste.setCredito(-10);
console.log(teste)

