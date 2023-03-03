export class UniversidadeEx5 {
    private nome: string;
    private local: string;
    private departamentos: Departamento[];

    get recuperarNome(): string {
        return this.nome;
    }

    get recuperarLocal(): string {
        return this.local;
    }

    get recuperarDepartamentos(): Departamento[] {
        return this.departamentos;
    }

    constructor(nome: string, local: string, departamentos: Departamento[]) {
        this.nome = nome;
        this.local = local;
        this.departamentos = departamentos;
    }
}

export class Departamento {
    private nome: string;

    get recuperarNome(): string {
        return this.nome;
    }

    constructor(nome: string) {
        this.nome = nome;
    }
}

export class PessoaEx5 {
    private nome: string;
    private dataNascimento: string;
    private universidade: UniversidadeEx5;
    private departamento: Departamento;

    get recuperarNome(): string {
        return this.nome;
    }

    get recuperarDataNascimento(): string {
        return this.dataNascimento;
    }

    get recuperarDepartamento(): Departamento {
        return this.departamento;
    }

    constructor(
        nome: string,
        dataNascimento: string,
        universidade: UniversidadeEx5,
        departamento: Departamento
    ) {
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.universidade = universidade;
        this.departamento = departamento;
    }

    imprimeInformacoes() {
        console.log(`
        Nome: ${this.nome},
        Data de Nascimento: ${this.dataNascimento},
        Universidade: ${this.universidade.recuperarNome},
        Departamento: ${this.departamento.recuperarNome}
      `);
    }
}
