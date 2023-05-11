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
// console.log(keys.length)

const sorteio = (key) => {
  // const prob1 = 0.5; // 50% de chance de sorteio
  // const prob2 = 0.25; // 25% de chance de sorteio
  // const prob3 = 0.25; // 25% de chance de sorteio
  for(let i = keys.length -1; i > 0; i--){
    //Math.floor()
    //A função Math.floor(x) retorna o menor número inteiro dentre o número "x".
  
    //Math.random()
    //A função Math.random() retorna um número pseudo-aleatório no intervalo [0, 1], ou seja, de 0 (inclusivo) até, mas não incluindo, 1 (exclusivo).
    const j = Math.floor(Math.random() * (i+1));
    [keys[i], keys[j]] = [keys[j], keys[i]]
    for(key of keys){
      return opcoes[key];
    }
  }
}

for (let i = 0; i < N; i++) {
  matriz[i] = new Array(N);

    matriz[i].splice(0, 1, sorteio(i)); //substitui item em determinada posição de um array. O primeiro valor corresponde ao indice no array, e o segundo a quantidade de itens que devem ser substituidos.
    matriz[i].splice(1, 1, sorteio(i));
    matriz[i].splice(2, 1, sorteio(i));
    matriz[i].splice(3, 1,  sorteio(i));
    matriz[i].splice(4, 1,  sorteio(i));

    if (i === 0) {
      matriz[i].splice(0, 1,  vazioInicial);
    } else {
      null;
    }
}

console.log(matriz)

let contador = 0;
for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    if (matriz[i][j] === "o") {
      contador++;
      console.log(contador)
    }
  }
}

const contar = matriz.filter((item) => item.includes(opcoes.comida)); // cria um novo array/matriz que constem o valor passado para o método includes