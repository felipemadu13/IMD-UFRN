class Animal {
    public grupo: string = "indefinido";

    constructor(grupo: string = "indefinido") {
        this.grupo = grupo
    }

    get _grupo(): string {
        return this._grupo
    }

    set _grupo(grupo: string) {
        this._grupo = grupo
        
    }
}

class Cachorro extends Animal {
    constructor(grupo: string = 'mamífero') {
        super(grupo)
    }
}

var exibir = new Cachorro()
console.log(exibir)