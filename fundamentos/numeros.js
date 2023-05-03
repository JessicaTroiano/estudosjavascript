const peso1 = 1.0;

// Number('1'), transforma strings em número
const peso2 = Number('1.2');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1))
// Number.isInteger() verifica se o número é um inteiro.
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2);

//toFixed(), fixa a quantidade de números após a virgula
console.log(media.toFixed(2));
//toString(), transforma um número em string;
console.log(media.toString());

//para fazer uma exponenciação, por exemplo, é necessário usar o Math
const raio = 5.6;
const area = Math.PI * Math.pow(raio, 2);

console.log(area);
console.log(typeof Math);