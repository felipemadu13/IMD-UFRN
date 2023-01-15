export class CelularTijolo {
   ligado: boolean;
   ligacao: boolean;
   tamanho: string;
   carga: number;

   constructor(ligado: boolean, ligacao: boolean, tamanho: string, carga: number) {
      this.ligado = ligado;
      this.ligacao = ligacao;
      this.tamanho = tamanho;
      this.carga = carga;
   }

   ligar() {
      if (this.ligado = false) {
         this.ligado = true;
      } else {
         this.ligado = false;
      }
   }

   ligando() {
      if (this.ligacao = false) {
         this.ligacao = true;
      } else {
         this.ligacao = false;
      }
   }

}