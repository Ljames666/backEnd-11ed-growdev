interface FormatoElemento {
    desenhar(): void;
    redimensionar(params: number | {}): void;
}

export class Circulo implements FormatoElemento {
    constructor(public raio: number) {
        this.raio = raio;
    }

    desenhar(): void {
        console.log(`desenhando um circulo de raio ${this.raio}`);
    }

    redimensionar(newRaio: number): void {
        this.raio = newRaio;
    }
}
export class Retangulo implements FormatoElemento {
    constructor(public comprimento: number, public altura: number) {
        this.comprimento = comprimento;
        this.altura = altura;
    }

    desenhar(): void {
        console.log(`desenhando retangulo de ${this.comprimento} X ${this.altura} cm`);
    }

    redimensionar(data: { comprimento?: number; altura?: number }): void {
        this.comprimento = data.comprimento ?? this.comprimento;
        this.altura = data.altura ?? this.altura;
    }
}
