import { CelularFlip } from "./CelularFlip";

export class CelularSmart extends CelularFlip {
    internet: boolean;

    constructor(ligado: boolean, ligacao: boolean, tamanho: string, carga: number, tocaVideo: boolean, internet: boolean) {
        super(ligado, ligacao, tamanho, carga, tocaVideo);
        this.internet = internet;
    }
    
    ligar() {
        super.ligar();
        this.internet = false;

    }
}
