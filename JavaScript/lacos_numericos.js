// LAÇO NUMÉRICO: FOR
// é uma estrutura controlada, ou seja, podemos definir quantas vezes irá repetir.

const input = require('readline-sync');

let acumulador = 0;
acumulador += 10; //igual a dizer acumulador = acumulador + 10;
acumulador -= 2;
acumulador++; //igual dizer acumulador = acumulador + 1;
console.log(acumulador);

//a variável acumulador vai acumulando o valor dentro dela. 

for (let i = 0; i < 4; i++){
    //inicializo a variável, defino uma condiçãod e parada, e então defino oq acontecerá em cada iteração;
    console.log('Repetição', i);
}

console.log('----------');

for (let i = 0; i <= 4; i++) {
    console.log('Repetição', i);
}

console.log('----------');

for (let i = 10; i <= 12; i++) {
    console.log('Repetição', i);
}

console.log('----------');

for (let i = 12; i >= 10; i--) {
    console.log('Repetição', i);
}

console.clear();

// Problema

let nota;
let soma = 0;

for (let i = 1; i <= 3; i++) {
    nota = Number(input.question(`Informe a nota ${i} do aluno: `));
    //quando usamos template string, ou seja, colocamos entre crases ` `, podemos colocar uma variável a partir do ${};

    soma = soma + nota;
}

console.log(soma);
console.log(`A média do aluno é ${soma / 3}.`);