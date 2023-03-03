export class Carro {
    qtdCombustivel: number = 0;
    constructor(public consumoCombustivel: number) {
        this.consumoCombustivel = consumoCombustivel;
    }

    andar(dist: number) {
        const consumo = this.consumoCombustivel - dist;
        if (consumo < 0) {
            console.log('sem gasolina');
        }
        this.qtdCombustivel -= consumo;
    }
    obterGasolina(): number {
        return this.qtdCombustivel;
    }
    addGas(qtd: number) {
        this.qtdCombustivel += qtd;
    }
}
