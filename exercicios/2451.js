var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let N = Number(lines[0]);

let matriz = new Array(N);
matriz[N] = new Array(N);

let vazio = ""
let comida = "o"
let fantasma = "A"

let posicao = matriz[0][0]
if(!posicao){
    
}