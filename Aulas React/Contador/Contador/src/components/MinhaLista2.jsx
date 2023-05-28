import { useState } from "react";
import { useEffect } from "react";

const minhaLista2 = [
    {id: '4', value: 'Carol'},
    {id: '5', value: 'Yuri'},
    {id: '6', value: 'Ticoliro'},
]

export default function MinhaLista2() {

    const [produtos, setProdutos] = useState(minhaLista2);   // defino com o useState que a variável produtos tem o valor da variável minhaLista2. Então toda vez que produtos for alterado através do setProdutos, a lista (que é minhaLista2) será automaticamente atualizada.
    const [pesquisa, setPesquisa] = useState('');   // o valor da variável pesquisa inicialmente é vazio.

    useEffect(
        () => {
            if (pesquisa) {
                const novaLista = minhaLista2.filter( (item) => {
                    return item.value.toLowerCase().includes(pesquisa.toLowerCase());
                })
                setProdutos(novaLista);
            } else {
                setProdutos(minhaLista2);
            }            
        }      
    , [pesquisa])
    // o useEffect é um hook do react para criar efeito colateral. 
    // ele recebe como primeiro parâmetro uma função (arrow function), e toda vez que eu tenho uma re-renderização do componente, o useEffect executa. 
    // estamos criando um efeito colateral que vai filtrar a nossa lista de produtos, então nesta arrow function vamos criar uma nova lista (const novaLista) e com base na lista original (minhaLista2) vamos usar a função filter(),
    // que permitirá criar uma lista nova filtrando os elementos da lista de base através da condição que está na arrow function dentro da função filter().
    // a arrow function do filter recebe como parâmetro cada elemento da lista (item). 
    // Vamos acessar cada elemento e verificar se cada um destes itens tem no seu valor a string que colocaremos na pesquisa a partir de:
    // return item.value.toLowerCase().includes(pesquisa.toLowerCase())
    // o que significa esta linha de cima: em cada um destes itens eu verifico se o valor inclui uma string que estamos colocando na pesquisa -> usando o toLowerCase para colocar o valor em letra minúscula e não diferenciar na pesquisa palavras com letra maiúscula ou minúscula 
    // então colocamos setProdutos(novaLista) para modificar a lista conforme a pesquisa, colocando aquele item na nova lista. 
    // o segundo parâmetro do useEffect é um parâmetro que permite dizer ao useEffect quando ele deve ser executado. Neste caso é [pesquisa], então estou informando que quero que o useEffect execute todo o bloco de código toda vez que o valor de pesquisa for alterado.
    // como de início o valor de pesquisa será sempre vazio, fazemos a condição if (pesquisa), ou seja, se pesquisa não for um valor falso, ele irá executar todo o bloco de código. Se não, vou setar produtos com o valor original, que é o minhaLista2.
    // desta forma, caso o usuário apagar todo o input, aparecerá o valor original da lista, com todos os itens, pq não está adicionando nenhum filtro. Só quando existir de fato uma pesquisa, executará o bloco de código.

    return (
        <div>
            <h2>Efeitos colaterais</h2>
            <p>Diversos apps vão ter efeitos colaterais. Um efeito colateral clássico em qualquer app é uma requisição pela internet. Outro exemplo é a filtragem de dados em um app, ou seja, começo a digitar em um input e aquele efeito colateral começa a ser aplicado no site -o filtro é aplicado-. </p>
            <h3>Minha Lista 2:</h3>
            <input 
            value={pesquisa}
            onChange={(e) => setPesquisa(e.target.value)}
            // aqui estamos dizendo que o input terá um valor, que é a variável pesquisa que iremos definir no useState
            // o onChange é uma propriedade que permite a gente ouvir a mudança do valor deste input.
            // ou seja, toda vez que eu seleciono esse input digito no teclado, estou alterando o valor deste input, gerando um evento de alteração e consigo captar este evento no e. 
            // o e (referente a evento) é um objeto que dentro dele tenho a propriedade target e value.
            // nós definimos a pesquisa (que é uma variável de estado) com o setPesquisa através do valor que estou digitando.
            placeholder="pesquise aqui"></input>
            {produtos.map( (item) => {
                return (
                    <div key={item.id}>
                        <h4>{item.value}</h4>
                    </div>
                )
            })}
        </div>
    )    
}
