const escola = "Cod3r";

// charAt(), captura o valor da posição da string passada para a função. 
console.log(escola.charAt(4));
// charCodeAt(), captura o valor unicode do caracter da string passado para a função.
console.log(escola.charCodeAt(3));
// indexOf(), captura a posição do caracter passado da string.
console.log(escola.indexOf('3'));
// substring(numero), captura os caracteres da string a partir do index passado.
console.log(escola.substring(1));
// substring(numero1, numero2), captura a partir do primeiro index,os primeiros caracteres passados, a partir da definição da quantidade do segundo número.
console.log(escola.substring(0, 3));
// concat(), concatena valores para a apresentação de uma única informação.
console.log('Escola '.concat(escola).concat("!"));
// replace(index, valor), substitui o caracter da posição passada pelo novo valor informado.
console.log(escola.replace(3, 'e'));
// cria um array a partir do caracter passado como critério da separação do array.
console.log('Ana,Maria,Pedro'.split(','));