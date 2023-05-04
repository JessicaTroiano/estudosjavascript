const nome = 'Jéssica';

// Template string, criado a partir da atualização de 2015 do JavaScript. Permite concatenar informações de forma mais eficiente.
const template = `Olá ${nome}!`
console.log(template);

const n = 3.14159
let raio = 2.00
let A = 0

let area = n*(Math.pow(raio, 2))
A=area.toFixed(4)

console.log("A=" + A);

A = 0
raio = 100.64
area = n*(Math.pow(raio, 2))
A=area.toFixed(4)

console.log("A=" + A);

A = 0
raio = 150.00
area = n*(Math.pow(raio, 2))
A=area.toFixed(4)

console.log("A=" + A);
