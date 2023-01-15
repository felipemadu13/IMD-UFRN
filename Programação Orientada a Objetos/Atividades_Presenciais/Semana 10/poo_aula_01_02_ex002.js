
// Código TypeScript

// class ContaCorrente {
//     nome_correntista: String;
//     cpf_correntista: String;
//     saldo: Number;

//     setNome(nome_correntista: String):void {
//         this.nome_correntista = nome_correntista;
//     }
    
//     setCpf(cpf_correntista: String):void {
//         this.cpf_correntista = cpf_correntista;
//     }

    
//     setSaldo(saldo: Number):void {
//         this.saldo = saldo;
//     }

//     mostrarInformacoes(): void {
//         console.log(this.nome_correntista);
//         console.log(this.cpf_correntista);
//         console.log(this.saldo);
//         }

//     depositar(deposito: Number): void {
//         this.saldo = this.saldo + deposito
//     }

//     sacar(saque: number): void{
//         this.saldo = this.saldo - saque;
//         }
        
    
// }

// var conta = new ContaCorrente();
// conta.setNome('Felipe');
// conta.setCpf('555.555.555-55');
// conta.setSaldo(1000);
// conta.depositar(750);
// conta.sacar(250);
// conta.mostrarInformacoes();


// Código JavaScript

"use strict";
class ContaCorrente {
    setNome(nome_correntista) {
        this.nome_correntista = nome_correntista;
    }
    setCpf(cpf_correntista) {
        this.cpf_correntista = cpf_correntista;
    }
    setSaldo(saldo) {
        this.saldo = saldo;
    }
    mostrarInformacoes() {
        console.log(this.nome_correntista);
        console.log(this.cpf_correntista);
        console.log(this.saldo);
    }
    depositar(deposito) {
        this.saldo = this.saldo + deposito;
    }
    sacar(saque) {
        this.saldo = this.saldo - saque;
    }
}
var conta = new ContaCorrente();
conta.setNome('Felipe');
conta.setCpf('555.555.555-55');
conta.setSaldo(1000);
conta.depositar(750);
conta.sacar(250);
conta.mostrarInformacoes();
