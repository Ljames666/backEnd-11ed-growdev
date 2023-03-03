abstract class Imovel {
    endereco: string;
    preco: number;
    constructor(endereco: string, preco: number) {
        this.endereco = endereco;
        this.preco = preco;
    }
}

export class Novo extends Imovel {
    adicional: number;
    constructor(endereco: string, preco: number, adicional: number) {
        super(endereco, preco);
        this.adicional = adicional;
    }

    imprimeAdicional() {
        console.log(`valor adicional de um imovel novo: ${this.adicional}`);
    }
    total() {
        console.log(`valor  imovel novo:R$ ${(this.adicional + this.preco).toFixed(2)}`);
    }
}
export class Velho extends Imovel {
    desconto: number;
    constructor(endereco: string, preco: number, desconto: number) {
        super(endereco, preco);
        this.desconto = desconto;
    }

    imprimeDesconto() {
        console.log(`valor desconto de um imovel novo: ${this.desconto}`);
    }
    total() {
        console.log(`valor  imovel novo:R$ ${(this.preco - this.desconto).toFixed(2)}`);
    }
}
