// Importar com require para CommonJS
import readlineSync = require('readline-sync');

// local das variaveis aqui a gente coloca o array tb 
const lisDeCores: string[] = new Array <string> ("", "", "", "", "");
const CoresOrdenadas: string[] = new Array <string> ("", "", "", "", "");
let contador: number = 0;

// pedir as 5 cores -fazer um for quando for pedir mais de uma vez a msm coisa
for (contador = 0; contador < 5; contador = contador + 1) {
    
    // Pedindo cada cor ao usuário-começa a pedir por um e vai incrementando 
    const corDigitada = readlineSync.question("Digite a " + (contador + 1) + " cor: ");
    
    // Verificando se a entrada não é undefined - eu achei oura forma de fazer isso sem
    //precisar verificar, e lá em cima faz assim const lisDeCores: string[] = new Array<string>();
    // dps usa um  lisDeCores.push(corDigitada);
    if (corDigitada !== undefined) {
      // Atribuin a cor à lista se ela for uma string
      lisDeCores[contador] = corDigitada;
    } else {
      // Se for undefined, atribua uma string vazia para evitar o erro
      lisDeCores[contador] = "";
    }
}

console.log(""); //pula linha

// Mostra as cores digitadas
console.log(" todas as cores:");

let indice: number = 0;
for (indice = 0; indice < 5; indice = indice + 1) {
    let corAtual: string = lisDeCores[indice];
    console.log(corAtual);
}

console.log("");

// Copiando as cores para outra lista
let posicaoCopia: number = 0;
for (posicaoCopia = 0; posicaoCopia < 5; posicaoCopia = posicaoCopia + 1) {
    CoresOrdenadas[posicaoCopia] = lisDeCores[posicaoCopia];
}

// Ordenando as cores
CoresOrdenadas.sort();

// Mostrando as cores ordenadas
console.log("Ordem alfabetica:"); //aqui foi babado
let posicao: number = 0;
for (posicao = 0; posicao < 5; posicao = posicao + 1) {
    let corOrdenada: string = CoresOrdenadas[posicao];
    console.log(corOrdenada);
}