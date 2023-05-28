// FUNÇÕES


// definição da função
function saudacao() {
    console.log('Olá, seja bem-vindo(a) ao nosso curso de JavaScript!');
}

// chamando a função para executar
saudacao();

console.clear();

// --------------- como enviar parâmetros para as funções -----------------

function saudacao(nome, curso) {
    console.log(`Olá, seja bem-vindo(a) ao nosso curso de ${curso}, ${nome}!`);
}

saudacao('Carol', 'JavaScript');

console.clear();

// posso deixar um parâmetro default. Se eu nao passar nenhum parâmetro quando for chamar a função, ele imprime o parâmetro default.
// se eu passar algum parâmetro no lugar do default quando chamar a função, ele imprime o novo parâmetro.

function saudacao(nome, curso = 'CSS'){
    console.log(`Olá, seja bem-vindo(a) ao nosso curso de ${curso}, ${nome}!`);
}
saudacao('Carol');
saudacao('Carol', 'JavaScript');

console.clear();

// -------------- retorno de função --------------

function soma(numero1, numero2) {
    return numero1 + numero2;
}

const resultado = soma(10, 20);
console.log(resultado);
console.log(resultado / 2);

//não é uma boa prática imprimir dentro da função, e sim retornar o resultado para usarmos/guardamos em uma variável para então imprimir.

console.clear();

function maiorDoQue50(numero) {
    if (numero > 50) {
        return true
    }

    return false //não preciso colocar o else aqui, pq se não fizer o if, vai direto para o resto do código neste bloco.
}

