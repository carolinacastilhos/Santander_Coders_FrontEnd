// LAÇOS CONDICIONAIS

// para realizar a leitura do comando do usuário, precisamos instalar uma biblioteca do js pq o node.js não faz isso. 
//Neste caso colocamos no terminal o comando npm install readline-sync. Desta forma instalou somente neste repositório.
// para instalar globalmente, precisa colocar o comando npm install -g readline-sync

const input = require('readline-sync');
//então precisamos importar a biblioteca com o código acima.

const numero_sorteado = 5;
let numero = Number ( input.question('Qual numero voce escolhe?'));
//assim conseguimos ler a entrada do usuário, que por padrão viria como string e já realizamos a conversão para number.

while (numero !== numero_sorteado) {
    console.log('Você errou o número. Tente novamente...');
    numero = Number ( input.question('Qual numero voce escolhe?'));
}

console.log('Você acertou!'); //só vai imprimir quando sair do laço de repetição

//este caso é uma estrutura não controlada, ou seja, não sabemos quantas vezes ela irá acontecer. 