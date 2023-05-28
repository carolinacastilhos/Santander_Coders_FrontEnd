import MeuComponente from "./components/MeuComponente"
// importamos este componente criado em outro arquivo para ser utilizado aqui.

function App() {

  return (
    <div>
      <h1>Olá Mundo, React</h1>      
  
      <MeuBotao conteudo = 'me clique'/>
      {/* forma de chamar nosso componente: <Nome do componente. É uma tag html que dentro possui html />*/}
      {/* podemos reutilizar sempre que precisarmos, sem escrever todo o código dele, somente chamando o componente */}
      {/* porém aqui criamos o componente button no mesmo arquivo, mas isso é uma má prática. 
      Devemos criar os componentes em arquivos diferentes dentro da pasta components que criamos na pasta src, que é o caso do MeuComponente */}

      <MeuBotao conteudo = 'depois aqui'/>
      <MeuBotao conteudo = 'e por fim aqui'/>
      {/* colocamos  um valor diferente em cada componente através do conteudo e do props nele, como demonstrado abaixo*/}

      <MeuComponente />

    </div>
    
  )
}

function MeuBotao(props) {
  return (
    <button>{props.conteudo}</button>
  )

  // props é um objeto no JS e estamos acessando a propriedade dele, neste caso o conteúdo.
}

export default App


// Exemplo de props: queremos fazer vários cards em um site de ecommerce com os produtos. Podemos fazer um componente MeuCard(props)
// e chamar dentro dele as propriedades que definirmos em cada chamada dele no arquivo.
//  por exemplo, chamo ele acima no App(), coloco <MeuCard image='' titulo='' subtitulo='' />
// então no componente MeuCard (props), devo retornar props.image, props.titulo, props.subtitulo.
