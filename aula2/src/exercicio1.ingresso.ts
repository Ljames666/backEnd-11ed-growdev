abstract class Ingresso {
    valor: number;

    constructor() {
        this.valor = 50;
    }

    imprimeValor() {
        console.log(`Valor do ingresso: R$ ${this.valor.toFixed(2)}`);
    }
}

export class Normal extends Ingresso {}

export class Vip extends Ingresso {
    adicional: number = 25;
    constructor() {
        super();
    }
    imprimeValor(): void {
        console.log(`Valor do ingresso Vip: R$ ${(this.valor + this.adicional).toFixed(2)}`);
    }
}

export class Camarote extends Ingresso {
    adicional: number = 100;
    constructor() {
        super();
    }
    imprimeValor(): void {
        console.log(`Valor do ingresso camarote: R$ ${(this.valor + this.adicional).toFixed(2)}`);
    }
}
