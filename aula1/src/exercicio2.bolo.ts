export class Bola {
    constructor(public cor: string, public circle: number, public material: string) {
        this.cor = cor;
        this.circle = circle;
        this.material = material;
    }
    trocar(color: string) {
        this.cor = color;
    }
    mostrar() {
        console.log('A cor da bola é', this.cor);
    }
}
