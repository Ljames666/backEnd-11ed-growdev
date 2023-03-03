export class ContaCorrente {
    private saldo: number;
    constructor(public nConta: number, private nameClient: string, saldo?: number) {
        this.nConta = nConta;
        this.nameClient = nameClient;
        this.saldo = saldo ? saldo : 0;
    }

    alterarNome(nome: string) {
        this.nameClient = nome;
    }

    depositar(valor: number) {
        console.log('saldoPrev->', this.saldo);
        this.saldo += valor;
        console.log('saldoNext->', this.saldo);
    }

    saque(valor: number) {
        console.log('saldoPrev->', this.saldo);
        const newSaldo = this.saldo - valor;
        if (newSaldo < 0) {
            console.error('não é possível sacar');
            return;
        }
        this.saldo = newSaldo;
        console.log('saldoNext->', this.saldo);
    }
}
