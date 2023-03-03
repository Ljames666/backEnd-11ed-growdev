export class Calculadora {
    private history: Array<string> = [];

    somar(x: number, y: number) {
        this.history.push(`${x}+${y}=${Math.round(x + y)}`);
    }
    diminuir(x: number, y: number) {
        this.history.push(`${x}-${y}=${Math.round(x - y)}`);
    }
    multi(x: number, y: number) {
        this.history.push(`${x}x${y}=${Math.round(x * y)}`);
    }
    divide(x: number, y: number) {
        this.history.push(`${x}/${y}=${(x / y).toFixed(2)}`);
    }

    getHistory() {
        console.table(this.history);
    }
    cleanHistory() {
        this.history = [];
    }
}
