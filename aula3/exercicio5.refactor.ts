interface Desconto {
    aplicarDescontoEmPorcentagem(desconto: number): void;
    aplicarDescontoEmReais(desconto: number): void;
    recuperarValorTotal(): number;
}

interface ValorPedido {
    addItems(item: ItemPedido): void;
    removeItem(item: string): void;
    recuperarValorTotal(): number;
}

class Pedido implements ValorPedido {
    itens: ItemPedido[] = [];

    addItems(item: ItemPedido): void {
        this.itens.push(item);
    }

    removeItem(item: string): void {
        this.itens = this.itens.filter((i) => i.nome !== item);
    }

    recuperarValorTotal(): number {
        let total = this.itens.reduce((sum, v) => sum + v.valor, 0);

        return total;
    }
}

class ItemPedido implements Desconto {
    valor: number;
    nome: string;
    quantidade: number;

    constructor(valor: number, nome: string, quantidade: number) {
        this.valor = valor;
        this.nome = nome;
        this.quantidade = quantidade;
    }

    recuperarValorTotal(): number {
        return this.valor * this.quantidade;
    }

    aplicarDescontoEmReais(desconto: number): void {
        this.valor -= desconto;
    }
    aplicarDescontoEmPorcentagem(desconto: number): void {
        const porcentagem = desconto / 100;
        const descontoEmReais = this.valor * porcentagem;
        this.valor -= descontoEmReais;
    }
}
