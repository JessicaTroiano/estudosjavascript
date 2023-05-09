// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.split('\n');

let N = 5;

let matriz = new Array(N);

const opcoes = {
    vazio: ".",
    comida: "o",
    fantasma: "A",
}

const vazioInicial = '.';

const keys = Object.keys(opcoes);
console.log(keys.length)



for (let i = 0; i < N; i++) {
  matriz[i] = new Array(N);
  if (i === 0) {
    matriz[i].splice(0, 1,  vazioInicial);
  } else {
    null;
  }

  for(let i = keys.length -1; i > 0; i--){
    //Math.floor()
    //A função Math.floor(x) retorna o menor número inteiro dentre o número "x".
  
    //Math.random()
    //A função Math.random() retorna um número pseudo-aleatório no intervalo [0, 1], ou seja, de 0 (inclusivo) até, mas não incluindo, 1 (exclusivo).
    const j = Math.floor(Math.random() * (i+1));
    // console.log('j', j);
    // console.log('i', i);
    // console.log([keys[i], keys[j]])
    [keys[i], keys[j]] = [keys[j], keys[i]]
  }

  for(const key of keys){
    console.log(opcoes[key]);
    matriz[i].splice(1, 1, opcoes[key]);
    matriz[i].splice(2, 1,  opcoes[key]);
    matriz[i].splice(3, 1,  opcoes[key]);
    matriz[i].splice(4, 1,  opcoes[key]);
  }
}

(console.log(matriz))