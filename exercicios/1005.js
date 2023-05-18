const A = Number("5.5")
const B = Number("7.0")

const pesoA = 3.5;
const pesoB = 7.5;

const soma1 = A * pesoA;
const soma2 = B * pesoB;

const resultadoSoma = soma1 + soma2;
const media = resultadoSoma/(pesoA + pesoB);

const mediaComCasasDecimais =media.toFixed(5)

console.log("MEDIA = ", mediaComCasasDecimais);