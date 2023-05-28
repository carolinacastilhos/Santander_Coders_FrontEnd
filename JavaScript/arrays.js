// ARRAYS

// 1 - como criar um array?

let arr = ['Walisson', 26, 1.77, true];
//é criado entre colchetes [], e recebe diferentes tipos de dados no mesmo array, se necessário.
console.log(arr);

// 2 - como acessar os elementos do array? 

console.log('Primeiro elemento: ', arr[0]);
//acessamos a partir dos índices, lembrando que inicia no índice zero.

// 3 - como obter o tamanho do array?

console.log('Tamanho do array: ', arr.lenght);

console.clear();

// 4 - percorrendo arrays:

for (let i = 0; i < 4; i++) {
    console.log(arr[i]);
}

//ou for (let i = 0; i < arr.lenght; i++ )

for (let elemento of arr) {
    //é um foreach de outras linguagens de programação. 
    // estou percorrendo cada elemento do array em cada iteração.
    console.log(elemento);
}

for (let indice in arr) {
    //no for in estou percorrendo os índices de cada array;
    console.log(indice, arr[indice]);
}

console.clear();

// MÉTODOS DE ARRAYS

let arr1 = [30, 12, 45, 34, 29];
//poderia ser const tbm ao invés de let
let arr2 = [];

// -------------- Fatiamento: slice -----------------

console.log(arr1.slice(0, 1));
//passamos o indíce de início e o índice de final, porém o índice final não está incluso
//neste exemplo do (0,1) virá o primeiro elemento, do índice 0;

console.log(arr1.slice(0, 2));
//agora virá o elemento de índice 0 e 1.

console.log(arr1.slice(2)); 
//neste caso estamos definindo somente o início e não o final, então ele vai iniciar no índice 2 e ir até o final do array;

console.clear();

// -------------- Adicionando elementos: push | unshift ----------------

console.log('Antes de adicionar: ', arr2);
arr2.push(10);
console.log('Depois de adicionar: ', arr2);
arr2.push(12, 30);
//podemos adicionar mais de um elemento por vez.
console.log(arr2);
arr2.push(40);
console.log(arr2);
//com o push ele sempre adiciona o novo elemento no final do array;

arr2.unshift(0);
console.log('Após adicionar com unshift: ', arr2);
//o unshift adiciona no início do array;

console.clear();

// -------------- Removendo elementos: pop | shift ------------------

console.log('Antes de remover com o pop: ', arr2);
const elementoRemovido = arr2.pop();
console.log('Depois de remover com o pop: ', arr2);
//remove o ÚLTIMO elemento do array; se quisermos, ele mostra o elemento removido:
console.log('O elemento removido foi: ', elementoRemovido);

console.log('Antes de remover com o shift: ', arr2);
const elementoRemovido2 = arr2.shift();
console.log('Depois de remover com o shift: ', arr2);
//remove o PRIMEIRO elemento do array; se quisermos, ele mostra o elemento removido tbm:
console.log('O elemento removido foi: ', elementoRemovido2);

console.clear();

// ----------- Concatenando arrays: concat ---------------

console.log('arr1: ', arr1);
console.log('arr2: ', arr2);

console.log(arr1.concat(arr2));
console.log(arr2.concat(arr1));

console.clear();

// ----------- Buscando elementos: indexOf | lastIndexOf --------------

console.log(arr1);

let indiceDoElemento34 = arr1.indexOf(34);
console.log(indiceDoElemento34);
//se existir mais de um elemento 34, ele retorna o índice sempre do primeiro que aparecer.

let indiceDoElemento35 = arr1.indexOf(35);
console.log(indiceDoElemento35);
// quando não existe o elemento, ele retorna sempre -1;

let arr3 = [1, 2, 3, 3, 5, 3];
console.log(arr3.lastIndexOf(3));
//mostrará o último índice que aparece o elemento, caso tenha mais de um.

console.clear();

// ------------ Descobrindo a existência de um elemento: includes -------------

console.log(arr1);
console.log(arr1.includes(10));

console.clear();

//se não possui o valor, retorna false. Se possui, retorna true.

// ------------ Invertendo arrays: reverse --------------

console.log('arr1 normal: ', arr1);
const arr1Invertido = arr1.reverse();
console.log('arr1 invertido: ',arr1Invertido);
