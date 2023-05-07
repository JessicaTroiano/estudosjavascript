// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.split('\n');

let N = 5;

let matriz = new Array(N);

let vazio = ""
let comida = "o"
let fantasma = "A"

for (let i = 0; i < N; i++) {
    matriz[i] = new Array(N);
    if(i === 0){
        matriz[i].splice(0, 1, vazio);
    }else{
        matriz[i].splice(0, 1, fantasma);
    }
    matriz[i].splice(1, 1, comida);
    matriz[i].splice(2, 1, comida);
    matriz[i].splice(3, 1, fantasma);
    matriz[i].splice(4, 1, vazio);
    console.log(i)
}

(console.log(matriz))