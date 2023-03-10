class Pessoa {
    constructor(public name: string, public age: number, public income: number) {}
}

const pes1 = new Pessoa('Luigi', 26, 2000);
const pes2 = new Pessoa('Little Jonh', 19, 1020);
const pes3 = new Pessoa('Natasha', 22, 1800);
const pes4 = new Pessoa('Kate', 33, 950);
const pes5 = new Pessoa('Mark', 40, 2540);
const pes6 = new Pessoa('Big Joe', 36, 1870);
const pes7 = new Pessoa('Carl Jr', 18, 870);
const pes8 = new Pessoa('Shoffie', 27, 1250);
const pes9 = new Pessoa('Bob', 20, 900);
const pes10 = new Pessoa('Richad', 16, 600);

export const listaDePessoas = [pes1, pes2, pes3, pes4, pes5, pes6, pes7, pes8, pes9, pes10];
