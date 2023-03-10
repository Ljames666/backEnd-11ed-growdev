import { listaDePessoas } from './pessoa.classe';

console.log('----------- ex 1---------------\n');

const filtered = (item: number) => item % 2 !== 0; // function executada no metodo filter
const result = [8, 72, 1, 37, 21, 54, 7, 81, 23, 92, 12, 87, 3, 12, 6, 4].filter(filtered);
console.table(result);

console.log('\n----------- ex 2---------------\n');

const reduced = (acc: number, item: number) => acc + item; // function executada no metodo reduce
const resultEx2 = [8, 72, 1, 37, 21, 54, 7, 81, 23, 92, 12, 87, 3, 12, 6, 4].reduce(reduced, 0);
console.log('soma do array->', resultEx2);

console.log('\n----------- ex 3---------------\n');
const array = listaDePessoas;
console.log('pessoas menores de 23');
console.table(array.filter((value) => value.age < 23));

console.log('\n----------- ex 4---------------\n');
console.log('pessoas menores de 30');
const menos30 = array.filter((value) => value.age < 30);
console.table(menos30);
const media = Math.floor(menos30.reduce((x, y) => x + y.age, 0) / menos30.length);
console.log('media idades pessoas menores de 30:\n', media);

console.log('\n----------- ex 5---------------\n');
console.log('pessoas menores de 30');

console.table(
    menos30.map((item) => {
        return {
            nome: item.name,
            idade: item.age,
        };
    })
);
console.log('\n----------- ex 6---------------\n');
