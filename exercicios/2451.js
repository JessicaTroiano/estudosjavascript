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
  const prob1 = 0.5; // 50% de chance de sorteio
  const prob2 = 0.25; // 25% de chance de sorteio
  const prob3 = 0.25; // 25% de chance de sorteio
  for(let i = keys.length -1; i > 0; i--){
    //Math.floor()
    //A função Math.floor(x) retorna o menor número inteiro dentre o número "x".
  
    //Math.random()
    //A função Math.random() retorna um número pseudo-aleatório no intervalo [0, 1], ou seja, de 0 (inclusivo) até, mas não incluindo, 1 (exclusivo).
    const j = Math.floor(Math.random() * (i+1));
    const troca = [keys[i], keys[j]] = [keys[j], keys[i]]
    for(key of keys){
      return opcoes[key];
    }
  }
}

function countItems(matriz) {
  const countMap = Object.create(null);

  for (const element of matriz) {
    if (!countMap[element]) {
      countMap[element] = 1;
    } else {
      countMap[element] += 1;
    }
  }
  
  return countMap;
}

for (let i = 0; i < N; i++) {
  matriz[i] = new Array(N);

    matriz[i].splice(0, 1, sorteio(i));
    matriz[i].splice(1, 1, sorteio(i));
    matriz[i].splice(2, 1, sorteio(i));
    matriz[i].splice(3, 1,  sorteio(i));
    matriz[i].splice(4, 1,  sorteio(i));

    if (i === 0) {
      matriz[i].splice(0, 1,  vazioInicial);
    } else {
      null;
    }

    console.log(countItems(matriz[i]))

    // const contar = 0;
    // if(matriz[i] === opcoes.comida){
    //   const contagem = contar++
    //   console.log(contagem)
    //   return contagem;
    // }
    // console.log(contar);
}


(console.log(matriz)) 