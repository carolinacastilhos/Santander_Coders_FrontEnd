// ESTRUTURAS CONDICIONAIS

const idade = 20;

// IF...ELSE

if (idade >= 18) {
    console.log('Você é maior de idade!');
} else {
    console.log('Você é menor de idade!');
}

console.clear();

// IF... ELSE IF... ELSE

let media = 10;

if (media >= 7) {
    console.log('Aprovado(a)!');
} else if (media < 7 && media >= 5) {
    console.log('Recuperação');
    //poderia colocar apenas else if (media >= 5) pq já fica subentendido com a condição anterior o menor de 7
} else {
    console.log('Reprovado');
}

