
const minhaLista = [
    { id: '1', value: 'Fruta'},
    { id: '2', value: 'Legume'},
    { id: '3', value: 'Carne'},
]

export default function MinhaLista() {

    return minhaLista.map( (item) => {
        return (
            <div key={item.id}>
                <h4>{item.value}</h4>
            </div>
        )
    })

    // map é uma função atrelada a listas no JS.
    // para cada um dos itens da lista, vamos fazer um laço através da função map.
    // a função map vai aplicar a arrow function para cada item em si e vai retornar um elemento jsx. 
}

// listas no react sempre devem ter uma chave (key) única em cada item, pois 
// é necessário para atualizações.
// https://github.com/fernandobelotto/why_use_keys 
// repositório no github explicando sobre a importância das chaves nas listas