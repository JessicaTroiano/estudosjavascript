const A = Number("5.5")
const B = Number("7.0")
const C = Number("8.7")

const pesoA = 2;
const pesoB = 3;
const pesoC = 5;

const soma1 = A * pesoA;
const soma2 = B * pesoB;
const soma3 = C * pesoC;

const resultadoSoma = soma1 + soma2 + soma3;
const media = resultadoSoma/(pesoA + pesoB + pesoC);

const mediaComCasasDecimais =media.toFixed(1)

console.log("MEDIA =", mediaComCasasDecimais);