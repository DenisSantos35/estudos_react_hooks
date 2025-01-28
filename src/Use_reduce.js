import { useReducer } from 'react';
import './App.css';

//eslint-disable-next-line
const globalState = {
  title: 'O titulo do conteudo',
  body: 'O body do conteudo',
  counter: 0,
};
//eslint-disable-next-line
//a função reduce recebe um estado antigo e uma ação, e precisa sempre retornar
//um estado novo
//o dispatch(disparar) sempre dispara uma ação e é necessário enviar um type
//o action recebe o type e pode ser capturado e utilizado para mudar o estado de algo na tela
const reducer = (state, action) => {
  console.log(action); //{type: 'muda'}
  console.log(state); //{title: 'O titulo do conteudo', body: 'O body do conteudo', counter: 0}

  switch (action.type) {
    case 'muda': {
      console.log('Chamou muda com', action.payload);
      return { ...state, title: action.payload };
    }

    case 'inverter': {
      console.log('Chamou inverter');
      const { title } = state;
      return { ...state, title: title.split('').reverse().join('') };
    }
  }

  console.log('Nenhuma action encontrada');
  return { ...state };
};

function UseReduce() {
  //e necessario passar uma função,
  //eslint-disable-next-line
  const [state, dispatch] = useReducer(reducer, globalState);
  //eslint-disable-next-line
  const {counter, title, body} = state;

  return (
    <div className="App">
      <h1>
        {title} {counter}
      </h1>

      <button
        onClick={() =>
          dispatch({
            type: 'muda',
            payload: new Date().toLocaleString('pt-BR'),
          })
        }
      >
        Ok
      </button>
      <button onClick={() => dispatch({ type: 'inverter' })}>inverter</button>
      <button onClick={() => dispatch({ type: 'chama' })}>Chama</button>
    </div>
  );
}

export default UseReduce;
