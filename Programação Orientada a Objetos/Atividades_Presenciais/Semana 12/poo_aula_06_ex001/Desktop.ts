import { Computador } from "./Computador";
 
export class Desktop extends Computador {
    
  private _cabine: string = "";
 
  public get cabine(): string {
    return this._cabine;
  }
 
  public set cabine(cabine: string) {
    this._cabine = cabine;
  }
  
}
