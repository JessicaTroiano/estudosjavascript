//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.split('\n');

const n = 3.14159
// const raio = Number(lines[0])
const raio = Number("2.00")

let area = n*(Math.pow(raio, 2))
A=area.toFixed(4)

console.log("A=" + A);