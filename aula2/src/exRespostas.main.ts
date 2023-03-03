import { Camarote, Normal, Vip } from './exercicio1.ingresso';
import { Novo, Velho } from './exercicio2.imovel';
import { Cao, Gato, Cavalo } from './exercicio3.animal';
import { Pessoa, Universidade } from './exercicio4.classes';
import { Departamento, UniversidadeEx5, PessoaEx5 } from './exercicio5.departamento';

console.log('___________exercicio1________', '\n');

const normal = new Normal();
const vip = new Vip();
const camarote = new Camarote();
normal.imprimeValor();
console.log('\n');
vip.imprimeValor();
console.log('\n');
camarote.imprimeValor();
console.log('\n');

console.log('___________exercicio2________', '\n');
const novo = new Novo('a', 20, 10);
const velho = new Velho('b', 20, 5);
novo.imprimeAdicional();
console.log('\n');
novo.total();
console.log('\n');
velho.imprimeDesconto();
console.log('\n');
velho.total();
console.log('\n');

console.log('___________exercicio3________', '\n');
const dog = new Cao('Spike', 12, 'Bulldog', true);
const gatinho = new Gato('Frajola', 15, 'Anime');
const pokoto = new Cavalo('El Cabron', 80, 'Andaluz', 230);
dog.emitirSom();
dog.ficarFeliz();

gatinho.emitirSom();
gatinho.escalar();

pokoto.cavalgar();
pokoto.emitirSom();
console.log('___________exercicio4________', '\n');

const universidade = new Universidade('Feevale', 'NH');

const pessoa = new Pessoa('Edson', '31/10/1997', universidade);
pessoa.imprimeInformacoes();

console.log('___________exercicio5________', '\n');

const departamento1 = new Departamento('Dep. 1');
const departamento2 = new Departamento('Dep. 2');
const uni = new UniversidadeEx5('Feevale', 'NH', [departamento1, departamento2]);

const pes = new PessoaEx5('Edson', '31/10/1997', uni, departamento1);
pes.imprimeInformacoes();

// deste jeito estou injetando o departamento indiretamente por intermedio da universidade
const pes2 = new PessoaEx5('James', '32/13/3050', uni, uni.recuperarDepartamentos[1]);
pes2.imprimeInformacoes();
