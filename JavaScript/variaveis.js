// VARIÁVEIS

let idade = 26;
console.log(idade);

// tipos de variáveis

let numero = 30;          //variável tipo number
idade = 28; 
//não posso declarar novamente a variável, como por exemplo let idade = 28;, pois já declarei acima.
//porém posso fazer idade = 28; para modificar o valor dela.
let nome = 'Carol';     // tipo string
let altura = 1.77;      // tipo number. JS não diferencia int ou float.
let estudando = true;  // booleano (true or false)

console.log(nome, typeof nome);  //com o typeof conseguimos imprimir o tipo da variável

let outra; 
console.log(outra);   //imprimirá 'undefined'
let nula = null;

var variavel = 30;
// var é uma sintaxe mais antiga do JS. A partir de 2015 (com nova versão de JS) passaram a substituir var por let. 

const constante = 100;
// esta variável não posso modificar, atribuir outro valor.