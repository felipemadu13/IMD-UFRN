class Personagem {

    atacar() {
        console.log('Não recebi dano')
    }
}

class Guerreiro extends Personagem {

    atacar() {
        console.log('recebi 10 de dano')
    }
}

class Arqueiro extends Personagem {
    
    atacar() {
        console.log('recebi 20 de dano')
    }
}

function atacarPersonagem(fulano: Personagem) {
    fulano.atacar()
}

var atacarGuerreiro = new Guerreiro();
var atacarArqueiro = new Arqueiro();

atacarPersonagem(atacarGuerreiro);
atacarPersonagem(atacarArqueiro);

