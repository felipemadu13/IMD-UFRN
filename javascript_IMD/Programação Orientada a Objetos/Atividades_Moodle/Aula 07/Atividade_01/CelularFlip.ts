import { CelularTijolo } from "./CelularTijolo";

export class CelularFlip extends CelularTijolo {
    tocaVideo: boolean;

    constructor(tamanho: string, carga: number, tocaVideo: boolean) {
        super(tamanho, carga);
        this.tocaVideo = tocaVideo;
    }

}