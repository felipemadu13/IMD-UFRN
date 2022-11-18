export class Computador {
 
  private _processador: string;
  private _memoria: number;
  
  public get processador(): string {
    return this._processador
  }
  
  public set processador(processador: string) {
    this._processador = processador;
  }
  
  public get memoria(): number {
    return this._memoria
  }
  
  public set memoria(memoria: number) {
    this._memoria = memoria;
  }
   
}
  