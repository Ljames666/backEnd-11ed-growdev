interface IItem {
    valor: number;
    nome: string;
    descricao: string;
}

export class Item implements IItem {
    constructor(public valor: number, public nome: string, public descricao: string) {
        this.valor = valor;
        this.nome = nome;
        this.descricao = descricao;
    }
}

export class Pedido {
    private itens: IItem[] = [];
    private valorTotal: number = 0;

    get readItens(): IItem[] {
        return this.itens;
    }
    get readValorTotal(): number {
        return this.valorTotal;
    }

    set addValorTotal(valorTotal: number) {
        this.valorTotal += valorTotal;
    }

    addItens(iten: IItem) {
        this.itens.push(iten);
    }

    imprimePedido() {
        const valorPedido: number = this.itens.reduce((acc, item) => acc + item.valor, 0);
        this.valorTotal = valorPedido;

        console.table(this.itens);
        console.log(`Total: R$ ${this.valorTotal.toFixed(2)}`);
    }
}
