class Pet {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }
}

class Livro {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }
}

class Colecao<colec> {

    lista: colec[] = [];

    adicionar(adicionar: colec) {
        this.lista.push(adicionar);
    }

    mostrarTodos() {
        this.lista.forEach(e => console.log(e));
    }
}


const meusLivrosPrediletos = new Colecao<Livro>();
const animais = new Colecao<Pet>();

const dom_quixote = new Livro("Dom Quixote")
const a_divina_comedia = new Livro("A Divina Comédia")

meusLivrosPrediletos.adicionar(dom_quixote)
meusLivrosPrediletos.adicionar(a_divina_comedia)

const toto = new Pet("Totó");
const fofo = new Pet("Fofo");

animais.adicionar(toto);
animais.adicionar(fofo);

meusLivrosPrediletos.mostrarTodos();
animais.mostrarTodos();