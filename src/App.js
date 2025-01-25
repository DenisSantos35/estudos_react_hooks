import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
//import { Component } from 'react';

function App() {
  //para declarar um hooks segue a estrutura
  //const [atributo, set do atributo] = useState(aqui estado inicial do atributo);
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);
  const reverseClass = reverse ? 'reverse' : '';

  //para setar o estado com hooks utilisamos o setAtributo declarado no useState
  //podemos fazer de 2 formas a auterasção do valor
  // 1 - Forma direta
  // 2 - por calback.
  const handleClick = () => {
    //na forma direta passamos o valor diretamente a ser alterado dentro do set
    setReverse(!reverse);

    //na forma de calback passamos uma funcao com um parametro e nao setamos o valor diretamente
    setReverse((prevCounter) => prevCounter + 1);
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Contador: {counter}</h1>
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
        <p>
          <button type="button" onClick={handleClick}>
            Reverse {reverseClass}
          </button>
        </p>
        <p>
          <button type="button" onClick={handleIncrement}>
            Counter {counter}
          </button>
        </p>
      </header>
    </div>
  );
}

// utilizaando classe foi alterado o estado

// class App extends Component {
//   //inicia o estado com a classe state e passa um map
//   state = {
//     reverse: true,
//   };

//   // com o metodo state a forma correta de utiliza o metodo e através da arrow function
//   // é necessario recuperar a variavel do state atraves do desconstructor
//   //para setar o estado é necessário usar this.setState.
//   handleClick = () => {
//     const { reverse } = this.state;
//     this.setState({ reverse: !reverse });
//   };

//   //aqui estamos recuperando os dados do state, e o reverseClass e manipulado a cada ciclk do botao
//   //mudando seu estado e invertendo o lado do movimento da image.
//   render() {
//     const { reverse } = this.state;
//     const reverseClass = reverse ? 'reverse' : '';
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
//           <button type="button" onClick={this.handleClick}>
//             Reverse {reverseClass}
//           </button>
//         </header>
//       </div>
//     );
//   }
// }

export default App;
