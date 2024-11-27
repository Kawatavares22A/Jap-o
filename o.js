const input = require("prompt-sync")();



const nomeDoCliente = input("Digite seu nome completo: ");
const numeroDaConta = input("Digite um número de 5 dígitos para sua conta: ");
let saldo = 0;
let extrato = [];

console.log("Conta criada");
console.log("Número da conta: " + numeroDaConta);
console.log("Nome do titular: " + nomeDoCliente);
console.log("Saldo atual: R$ " + saldo.toFixed(2));
input("Pressione Enter para continuar..."); 

let resposta = 0;

while (resposta !== 5) {
    console.log("\nEscolha uma opção:");
    console.log("1 - Consultar Saldo");
    console.log("2 - Ver Extrato");
    console.log("3 - Realizar Saque");
    console.log("4 - Fazer Depósito");
    console.log("5 - Sair");
    resposta = Number(input("Digite a opção: "));

    if (resposta === 1) {
        console.log("Opção escolhida: 1 - Consultar Saldo");
        console.log("Detalhes da conta:");
        console.log("Número da conta: " + numeroDaConta);
        console.log("Nome do titular: " + nomeDoCliente);
        console.log("Saldo atual: R$ " + saldo.toFixed(2));
        input("Pressione Enter para continuar..."); // Aguarda o usuário pressionar Enter
    } else if (resposta === 2) {
        console.log("Opção escolhida: 2 - Ver Extrato");
        if (extrato.length > 0) {
            console.log("Extrato de operações:");
            extrato.forEach((operacao, index) => {
                console.log((index + 1) + ". " + operacao);
            });
        } else {
            console.log("Nenhuma operação");
        }
        input("Pressione Enter para continuar..."); // Aguarda o usuário pressionar Enter
    } else if (resposta === 3) {
        let valorSaque = Number(input("Digite o valor que deseja sacar: "));
        
        if (valorSaque <= saldo) {
            saldo -= valorSaque;
            extrato.push("Operação: Saque, Valor: R$ " + valorSaque.toFixed(2) + ", Saldo após: R$ " + saldo.toFixed(2));
            console.log("Saque realizado com sucesso!");
        } else {
            console.log("Saldo insuficiente para efetuar o saque!");
        }
        input("Pressione Enter para continuar..."); // Aguarda o usuário pressionar Enter
    } else if (resposta === 4) {
        let valorDeposito = Number(input("Digite o valor que deseja depositar: "));
        
        if (valorDeposito > 0) {
            saldo += valorDeposito;
            extrato.push("Operação: Depósito, Valor: R$ " + valorDeposito.toFixed(2) + ", Saldo após: R$ " + saldo.toFixed(2));
            console.log("Depósito realizado com sucesso!");
        } else {
            console.log("Valor de depósito inválido! Deve ser maior que zero.");
        }
        input("Pressione Enter para continuar..."); // Aguarda o usuário pressionar Enter
    } else if (resposta === 5) {
        console.log("Você escolheu sair.");
        console.log("Detalhes da conta:");
        console.log("Número da conta: " + numeroDaConta);
        console.log("Nome do titular: " + nomeDoCliente);
        console.log("Saldo final: R$ " + saldo.toFixed(2));
        input("Pressione Enter para sair..."); // Aguarda o usuário pressionar Enter
    } else {
        console.log("Opção inválida!");
        input("Pressione Enter para continuar..."); // Aguarda o usuário pressionar Enter
    }
}