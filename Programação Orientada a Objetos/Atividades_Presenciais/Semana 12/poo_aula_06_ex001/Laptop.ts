import { Computador } from "./Computador";
 
export class Laptop extends Computador {
 
  private _bateria_watts: number = 0;
 
  public get bateria_watts(): number {
    return this._bateria_watts;
  }
 
  public set bateria_watts(bateria_watts: number) {
    this._bateria_watts = bateria_watts;
  }
 
}
