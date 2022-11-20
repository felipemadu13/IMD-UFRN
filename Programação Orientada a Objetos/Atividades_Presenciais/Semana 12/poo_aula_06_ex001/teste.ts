import { Cidade } from "./Cidade";
import { Pessoa } from "./Pessoa";
import { Animal } from "./Animal";

const natal = new Cidade("Natal");
const joao = new Pessoa("João", natal);
const toto = new Animal("Totó", joao);

console.log(joao) //Pessoa { _nome: 'João', _cidade: Cidade { _nome: 'Natal' } }
console.log(joao.nome) //João
console.log(joao.cidade.nome) //Natal