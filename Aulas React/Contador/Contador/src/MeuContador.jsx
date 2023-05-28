import { useState } from "react";
// useState é uma função que estamos importando do React com retorno de uma lista com duas posições. 
// Na primeira posição nos dá variável de estado (neste caso será o contador) e no segunda posição nos dará uma segunda função que será setContador

export default function MeuContador() {

    const [contador, setContador] = useState(0);

    function aumentar() {
        setContador(contador + 1) 
        // o setContador vai ser uma função que define o contador
    }

    return (
        <div>
            <h1>Meu Contador : {contador}</h1>
            { contador > 9 ? <h1>Valor muito alto!</h1> : null }
            {/* isto é uma renderização condicional, realizada com um operador ternário. Quando a condição for verdadeira, renderizará o primeiro código, mas enquanto for falsa, dará null, ou seja, não renderizará nada.*/}
            <button onClick={aumentar}>Aumentar</button>
        </div>
    )
}

// colocamos o onClick que é um evento. Quando clicarmos, vai chamar a função aumentar, que dentro dela executamos uma outra função que está vindo do useState, que é a setContador
//  o setContador vai receber um novo valor para o contador.

//com o estado (useState) conseguimos modificar e renderizar valores, além de deixar nossa aplicação dinâmica
// os eventos, como onClick, são vários. Dentro de uma tag clique ctrl + espaço e começa a escrever on, aparecerá vários eventos possíveis.

// a renderização condicional pode ser utilizado, por exemplo, quando é um app qe tem vários perfis, e no perfil administrador queremos que renderize um botão de deletar, sendo que no perfil do usuário comum não queremos. 


// poderíamos colocar acima, com a renderização condicional, uma nova função, que seria para diminuir o contador. 
/*  e então antes do return que está acima, colocaríamos:
if (contador > 5) {
    return (
        <div>
            <h1>Valor muito alto!</h1>
            <h2>Meu contador: {contador}</h2>
            <button onClick={aumentar}>Aumentar</button>
            <button onClick={diminuir}>Diminuir</button>
        </div>
    )
}

para assim aparecer um botão de diminuir quando o contador ficar maior que 5.
*/

