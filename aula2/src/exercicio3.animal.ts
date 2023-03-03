abstract class Animal {
    private nome: string;
    private peso: number;
    private raca: string;

    get recuperarNome(): string {
        return this.nome;
    }
    get recuperarPeso(): number {
        return this.peso;
    }
    get recuperarRaca(): string {
        return this.raca;
    }

    constructor(nome: string, peso: number, raca: string) {
        this.nome = nome;
        this.peso = peso;
        this.raca = raca;
    }

    public emitirSom() {
        console.log(' emitindo som ....');
    }
}

export class Cavalo extends Animal {
    velocidade: number;

    constructor(nome: string, peso: number, raca: string, velocidade: number) {
        super(nome, peso, raca);
        this.velocidade = velocidade;
    }

    public emitirSom(): void {
        console.log('prurr prurr...');
    }

    public cavalgar(): void {
        console.log(`cavalgando à ${this.velocidade} km/h`);
    }
}
export class Gato extends Animal {
    constructor(nome: string, peso: number, raca: string) {
        super(nome, peso, raca);
    }

    public emitirSom(): void {
        console.log('Miau...');
    }

    public escalar(): void {
        console.log(`o gato tá escalando... \n Sai daí preste!`);
    }
}
export class Cao extends Animal {
    alfa: boolean;
    constructor(nome: string, peso: number, raca: string, alfa: boolean) {
        super(nome, peso, raca);
        this.alfa = alfa;
    }

    public emitirSom(): void {
        console.log('au au...');
    }

    public ficarFeliz(): void {
        this.alfa = false;
        console.log('Abanar rabo ...');
    }
}
