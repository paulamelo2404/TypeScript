import { Stack } from '../stack';
import leia = require('readline-sync');

// Cria uma pilha para guardar os livros
const pilha = new Stack<string>();
let continuar: boolean = true;
let opcao: number;

// Loop principal do programa
do {
    // Exibe o menu de opções
    console.log("*****************");
    console.log("");
    console.log("      1 - Adicionar Livro na pilha");
    console.log("      2 - Listar todos os Livros");
    console.log("      3 - Retirar Livro da pilha");
    console.log("      0 - Sair");
    console.log("");
    console.log("*****************");
    console.log("");
    
    // Pede a opção pro usuário
    console.log("Entre com a opção desejada: ");
    opcao = leia.questionInt("");

    // Estrutura de controle praopções do "menu"
    switch (opcao) {
        case 1:
            // Adiciona um livro a pilha
            console.log("\n-----------------------");
            let nomeLivro: string = leia.question("Digite o nome do Livro: ");
            pilha.push(nomeLivro);
            console.log("\nLivro foi adicionadoooooo!");
            break;

        case 2:
            // Lista todos os livros da pilha
            console.log("\n-----------------------");
            console.log("Lista de Livros na Pilha:");
            if (pilha.isEmpty()) {
                console.log("A pilha está vazia!");
            } else {
                pilha.printStack();
            }
            break;
        
        case 3:
            // Retira o livro do topo da pilha
            console.log("\n-----------------------");
            if (pilha.isEmpty()) {
                console.log("A pilha está vazia!");
            } else {
                let livroRemovido = pilha.pop();
                console.log(`Um livro foi retirado dessa pilha!`);
                console.log("\nEssa é a nova Pilha!");
                pilha.printStack();
            }
            break;

        case 0:
            // Finaliza o programa
            console.log("\n-----------------------");
            console.log("Programa Finalizado!");
            continuar = false;
            break;

        default:
            // Mensagem de erro para opção inválida
            console.log("\n-----------------------");
            console.log("Opção Inválida! Digite uma opção entre 0 e 3.");
            break;
    }
} while(continuar);