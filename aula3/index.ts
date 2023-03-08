import { Item, Pedido } from './exercicio1.pedido';
import { Circulo, Retangulo } from './exercicio2.poligonos';

console.log('___________exercicio1________', '\n');
const item = new Item(50, 'caneta', 'Replica da caneta de Dom Thalis');
const item2 = new Item(234600, 'Carro', 'Ferrari batida ');
const item3 = new Item(10999, 'PC ', 'Pc da nasa');

const carrinho = new Pedido();
carrinho.addItens(item);
carrinho.addItens(item2);
carrinho.addItens(item3);
carrinho.imprimePedido();

console.log('___________exercicio2________', '\n');
const circle = new Circulo(20);
const ret = new Retangulo(4, 5);

circle.desenhar();
circle.redimensionar(30);
circle.desenhar();
ret.desenhar();
ret.redimensionar({ comprimento: 30 });
ret.desenhar();
ret.redimensionar({ altura: 100 });
ret.desenhar();
ret.redimensionar({ comprimento: 4, altura: 2 });
ret.desenhar();
console.log('___________exercicio3________', '\n');
console.log('___________exercicio4________', '\n');
console.log('___________exercicio5________', '\n');
