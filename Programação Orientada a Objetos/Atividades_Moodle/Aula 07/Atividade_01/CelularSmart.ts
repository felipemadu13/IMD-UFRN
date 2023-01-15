import { CelularFlip } from "./CelularFlip";

export class CelularSmart extends CelularFlip {
    internet: boolean;

    constructor(tamanho: string, carga: number, tocaVideo: boolean, internet: boolean) {
        super(tamanho, carga, tocaVideo);
        this.internet = internet;
    } 
}