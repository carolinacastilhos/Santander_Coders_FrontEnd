// OBJETOS 

// --------- como criar um objeto no JS? -------------

let pessoa = {
    nome: 'Carol',
    // no JS não preciso colocar entre aspas o nome da chave, a não ser que neste nome tenha um hífe, como por exemplo nome-da-pessoa.
    // o conteúdo precisa sempre ter aspas, se for string.
    idade: 26,
};

console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.idade);

// forma alterantiva de acessar a chave: pessoa['nome'], que usamos caso tenhamos um nome de chave complexo (que use hífen).


// ---------- como adicionar um par chave-valor? -------------

pessoa.altura = 1.77;
//desta forma estou adicionando mais uma chave-valor ao objeto.
console.log(pessoa);

//posso também substituir um valor de uma chave, como por exemplo:
pessoa.nome = 'Ana Carolina'
console.log(pessoa);


// ---------- como remover um par chave-valor? ---------------

delete pessoa.altura;
console.log(pessoa);


// ---------- como percorrer? -------------

for (let chave in pessoa) {
    console.log(chave);
}
