import { Pessoa } from "./Pessoa";
 
export class Animal{
  private _nome : string;
  private _pessoa : Pessoa;
 
  constructor(nome: string, pessoa: Pessoa){
    this._nome = nome;
    this._pessoa = pessoa;
  }
 
  public get nome(): string {
    return this._nome;
  }
 
  public set nome(nome: string) {
    this._nome = nome;
  }
 
  public get pessoa(): Pessoa {
    return this._pessoa;
  }
 
  public set pessoa(pessoa: Pessoa) {
    this._pessoa = pessoa;
  }
}
