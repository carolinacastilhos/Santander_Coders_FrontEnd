//OPERADORES BOOLEANOS

/* igualdade:  == (ou ===)   -> com == compara o conteúdo. com === compara conteúdo e tipo de variável;
desigualdade:   != (ou !==) -> no diferente é semelhante. O != compara somente conteúdo, enquanto o !== compara conteúdo e tipo;
maior que:  >
maior ou igual que:  >=
menor que:  <
menor ou igual que:  <=
*/

const numero = 10;
console.log(numero > 20);  //false
console.log(numero == 10);  //true
console.log(numero === '10'); //false

console.clear(); //limpa tudo no meu console quando roda.

console.log(10 != 10); //false
console.log (10 != '10'); //false
console.log(10 !== '10'); //true, pois são diferentes


//Conjunções lógicas: 

// AND => && 
let idade = 26;
let tenhoCNH = true;

const possoDirigir = idade >= 18 && tenhoCNH === true;
console.log('Posso dirigir?', possoDirigir);  //true

// OR => ||
idade = 40;
const votoFacultativo = idade < 18 || idade >= 70;

// NOT => !
const estouGostandoDoCurso = false;
console.log(!estouGostandoDoCurso); //true

