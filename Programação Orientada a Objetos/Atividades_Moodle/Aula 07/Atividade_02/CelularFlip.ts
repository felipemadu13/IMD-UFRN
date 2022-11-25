import { CelularTijolo } from "./CelularTijolo";

export class CelularFlip extends CelularTijolo {
    tocaVideo: boolean;

    constructor(ligado: boolean, ligacao: boolean, tamanho: string, carga: number, tocaVideo: boolean) {
        super(ligado, ligacao, tamanho, carga);
        this.tocaVideo = tocaVideo;
    }

}