import { Contador } from './exercicio1.contador';
import { Bola } from './exercicio2.bolo';
import { ContaCorrente } from './exercicio3.contaCorrente';
import { Calculadora } from './exercicio4.calculadora';
import { BombaCombustivel } from './exercicio5.bombaCombustivel';
import { Carro } from './exercicio6.carro';

class Conta {
    private numConta: number;
    protected saldo?: number;
    constructor(public ag: number, numConta: number) {
        this.ag = ag;
        this.numConta = numConta;
    }
    setSaldo(saldo: number) {
        this.saldo = saldo;
    }
}

class Cliente {
    constructor(
        public name: string,
        public idade: number,
        public cpf: number,
        private conta: Conta
    ) {
        this.name = name;
        this.idade = idade;
        this.cpf = cpf;
        this.conta = conta;
    }

    getConta() {
        console.table(this.conta);
    }
}
console.log('___________exemplo________');

const contaJames = new Conta(144, 325142);
contaJames.setSaldo(50000);

const james = new Cliente('james', 18, 10117165358, contaJames);
console.table(james);

james.getConta();

console.log('___________exercicio1________');
const count = new Contador();
console.log('meu contador ------>', count.ret());
count.inc();

console.log('meu contador ------>', count.ret());
count.zerar();
count.autcont(5);
console.log('___________exercicio2________');
const bolaMurcha = new Bola('red', 20, 'couro');
bolaMurcha.mostrar();
bolaMurcha.trocar('black');
bolaMurcha.mostrar();

console.log('___________exercicio3________');

const minhaConta = new ContaCorrente(333, 'édojames');
console.table(minhaConta);
minhaConta.alterarNome('Thalis');
console.table(minhaConta);
minhaConta.saque(2000);
minhaConta.depositar(5000);
minhaConta.saque(2000);
console.log('___________exercicio4________');
const calc = new Calculadora();
calc.somar(1, 1);
calc.diminuir(23, 87);
calc.multi(45, 80);
calc.divide(23, 12);
calc.getHistory();
calc.cleanHistory();
calc.getHistory();

console.log('___________exercicio5________');
const BR = new BombaCombustivel('Gasolina', 4.74, 20000);
BR.abastecerPorValor(50);
BR.abastecerPorLitro(50);
BR.alterarValor(5.75);
BR.alterarQuantidadeCombustivel(2000);
BR.abastecerPorLitro(50);
console.log('___________exercicio6________');
const Fusca = new Carro(10);

Fusca.addGas(20);
Fusca.andar(20);
Fusca.obterGasolina();
console.log(Fusca.obterGasolina());
