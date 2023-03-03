export class Contador {
    private contador: number = 0;
    zerar() {
        this.contador = 0;
    }
    inc() {
        this.contador += 1;
    }

    ret() {
        return this.contador;
    }

    autcont(num: number) {
        while (this.contador <= num) {
            this.inc();

            console.log(this.contador);
        }
    }
}
