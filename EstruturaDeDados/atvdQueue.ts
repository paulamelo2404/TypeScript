import { Queue } from '../Queue';
import leia = require('readline-sync')

const fila = new Queue<string>();
let continuar: boolean = true;
let opcao: number;

do {
    // Exibe o menu principal
    console.log("*****************");
    console.log("      1 - Adicionar Cliente na Fila");
    console.log("      2 - Listar todos os Clientes");
    console.log("      3 - Retirar Cliente da Fila");
    console.log("      0 - Sair");
    console.log("*****************");
    console.log("");
    
    // Pede a opção ao usuário
    console.log("Entre com a opção desejada: ");
    opcao = leia.questionInt("");

    // Usa um 'switch' para lidar com as opções do menu
    switch (opcao) {
        case 1:
            // Adiciona um cliente à fila
            console.log("\n-----------------------");
            let nome: string = leia.question("Digite o nome do Cliente: ");
            fila.enqueue(nome);
            console.log(`\nCliente ${nome} adicionado(a) à fila!`);
            break;

        case 2:
            // Lista todos os clientes na fila
            console.log("\n-----------------------");
            console.log("Listando todos os clientes da fila:");
            if (fila.isEmpty()) {
                console.log("A fila está vazia!");
            } else {
                fila.printQueue();
            }
            break;
        
        case 3:
            // Retira o primeiro cliente da fila
            console.log("\n-----------------------");
            if (fila.isEmpty()) {
                console.log("A fila está vazia! Não há clientes para retirar.");
            } else {
                let clienteRemovido = fila.dequeue();
                console.log(`Cliente ${clienteRemovido} foi chamado(a) e removido(a) da fila.`);
                console.log("\nA fila agora tem os seguintes clientes:");
                fila.printQueue();
            }
            break;

        case 0:
            // Encerra o programa
            console.log("\n-----------------------");
            console.log("Programa finalizado. Até mais!");
            continuar = false;
            break;

        default:
            // Mensagem de erro para opção inválida
            console.log("\n-----------------------");
            console.log("Opção Inválida! Digite uma opção entre 0 e 3.");
            break;
    }
} while(continuar);











  