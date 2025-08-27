// Importa o módulo readline-sync
import readlineSync = require('readline-sync');

// Criar a Collection Set do tipo number
// O Set armazena apenas valores únicos
const NumNRepete: Set<number> = new Set<number>();

console.log("Oi! Digita 10 números inteiros sem repetir:");

// Laço de repetição para coletar 10 números comecar a se acostumar com'i'
for (let i = 0; i < 10; i++) {
    // Pede ao usuário para por o número
    const numeroDigitado = readlineSync.questionInt(`Digite o ${i + 1} numero: `);
    
    // Adiciona o número ao Set usando o método .add() aqui é add n, n push 
    // O Set automaticamente vai ignorar valores repetidos
    NumNRepete.add(numeroDigitado);
}

console.log("\n------ RESULTADOS ------");

// Mostra os elementos da coleçao Set
console.log("Lista do Set (: ");

//Set não tem índice, então  for pode percorrer de boa
// O Set já garante que os elementos serão únicos é a caracteristica dele 
for (const numero of NumNRepete) {
    console.log(numero);
}

console.log("\nPrograma finalizado! Graças a Deus!");