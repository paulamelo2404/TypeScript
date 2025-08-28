// Importar com require para CommonJS
import readlineSync = require('readline-sync');

// Declara o array para armazenar as cores
const lisDeCores: string[] = [];

let contador: number = 0;

console.log("Olá! Vamos criar uma lista de cores.");
console.log("Por favor, digite 5 cores diferentes:");
console.log("");

// Laço para pedir as 5 cores ao usuário
for (contador = 0; contador < 5; contador++) {
    const corDigitada = readlineSync.question("Digite a " + (contador + 1) + "ª cor: ")!;
    
    // Adiciona a cor diretamente ao final do array
    lisDeCores.push(corDigitada);
}

console.log("\n=== RESULTADOS ===");
console.log("");

// Exibe as cores na ordem em que foram digitadas
console.log("Todas as cores que você digitou:");
for (let i = 0; i < lisDeCores.length; i++) {
    console.log(`${i + 1}. ${lisDeCores[i]}`);
}

console.log("");

// Cria uma cópia do array para ordenar
const CoresOrdenadas = [...lisDeCores];

// Ordena as cores em ordem alfabética
CoresOrdenadas.sort();

console.log("Cores em ordem alfabética:");

// Exibe as cores ordenadas
for (let i = 0; i < CoresOrdenadas.length; i++) {
    console.log(`${i + 1}. ${CoresOrdenadas[i]}`);
}

console.log("\nPrograma finalizado! Obrigada por participar!");