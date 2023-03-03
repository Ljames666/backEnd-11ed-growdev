export class BombaCombustivel {
    tipoCombustivel: string;
    valorLitro: number;
    quantidadeCombustivel: number;

    constructor(tipoCombustivel: string, valorLitro: number, quantidadeCombustivel: number) {
        this.tipoCombustivel = tipoCombustivel;
        this.valorLitro = valorLitro;
        this.quantidadeCombustivel = quantidadeCombustivel;
    }

    abastecerPorValor(valor: number) {
        const qtdCombustivel = valor / this.valorLitro;
        if (qtdCombustivel > this.quantidadeCombustivel) {
            console.log('Não foi possível abastecer!');
            return;
        }
        console.log(`foi colocado: ${qtdCombustivel} de combustivel`);
        this.consumoQtd(qtdCombustivel);
    }
    abastecerPorLitro(qtd: number) {
        if (qtd > this.quantidadeCombustivel) {
            console.log('Não foi possível abastecer!');
            return;
        }
        const qtdValor = qtd * this.valorLitro;
        console.log(`valor de combustivel: ${qtdValor} `);
        this.consumoQtd(qtd);
    }
    alterarValor(novoValor: number) {
        this.valorLitro = novoValor;
    }
    alterarCombustivel(novoCombustivel: string) {
        this.tipoCombustivel = novoCombustivel;
    }
    alterarQuantidadeCombustivel(novaQtd: number) {
        this.quantidadeCombustivel = novaQtd;
    }
    consumoQtd(novaQtd: number) {
        this.quantidadeCombustivel -= novaQtd;
    }
}
