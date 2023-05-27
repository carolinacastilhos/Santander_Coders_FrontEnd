// COERÇÃO (CONVERSÃO) DE TIPOS

// coerção explícita (manual)
const numero = 10;
console.log(numero, typeof numero);

const numeroEmFormatoDeString = String(numero);
console.log(numeroEmFormatoDeString, typeof numeroEmFormatoDeString);

console.log(Number('123456'));
console.log(parseFloat('265689.256'));
console.log(parseInt('25631.25'));
// se fosse Number ao invés de parseFloat, ainda sim aceitaria a casa decimal. 
// o parseInt não, ele trunca o número. 

console.log(Boolean(0));
// zero é false e qualquer outro número será verdadeiro;

console.clear();

// coerção Implícita (automática)

console.log(10+1);
console.log(10+'1'); //neste caso não vai somar, vai concatenar os dois = 101 ao invés de 11. Pois entende que os dois são textos;
console.log('10' - 1); //neste caso resultará em 9, pq na subtração ele entende que os dois são números.
//o mesmo acontece com multiplicação, divisão...

console.log(10 - 'hausk');
//neste caso dará NaN = not a number -> tentou fazer 10 - a string, mas não reconhece como número

// qual será a saída desse código?
let n = 1+'1'; // '11' como string
n = n - 1;  // 10 como número
console.log(n); //resultará em 10 como número


// qual será a saída desse código?
console.log(2 + 3 + 4 + '5');
//dará '95' como string


// qual será a saída desse código?
console.log('5' + 2 + 3 + 4); 
//dará '5234';


// qual será a saída desse código?
console.log('10' - '4' - '3' - 2 + '5');
// 10 - 4 dará 6, pq ele converterá para número por causa da subtração
// 6 - 3 tbm converterá para número = 3
// 3 - 2 = 1 número
// 1 + '5' = '15' como string
