// Importa o módulo readline-sync
import readlineSync = require('readline-sync');

// Cria um novo array vazio usando new Array()
const lisDeCores: string[] = new Array<string>();

let contador: number = 0;

console.log("Oiiii! Bora criar uma lista de cores?.");
console.log("digita 5 cores diferentes ai: ");
console.log("");

// Laço para coletar as 5 cores
for (contador = 0; contador < 5; contador++) {
    const corDigitada = readlineSync.question(`Digite a ${contador + 1} cor: `);
    // Usa o método push() para adicionar a cor no final do array
    lisDeCores.push(corDigitada);
}

console.log("\n--------e foi assim q ficou---------");
console.log("");

// Exibe as cores na ordem em que foram digitadas
console.log("Todas as cores:");
for (contador = 0; contador < lisDeCores.length; contador++) {
    console.log(`${contador + 1}. ${lisDeCores[contador]}`);
}

console.log("");

// Cria uma cópia do array para ordenar
const CoresOrdenadas = [...lisDeCores];
CoresOrdenadas.sort();

// Exibe as cores em ordem alfabética
console.log("Cores em ordem alfabética:");
for (contador = 0; contador < CoresOrdenadas.length; contador++) {
    console.log(`${contador + 1}. ${CoresOrdenadas[contador]}`);
}

console.log("\n DEU CERTO!");