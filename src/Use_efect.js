import { useEffect, useState } from 'react';
import './App.css';

const eventFn = () => {
  console.log('h1 clicado');
};

function UseEfect() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  //componentDidUpdate = executa toda vez que o componente atualiza
  useEffect(() => {
    console.log('componente did update');
  });

  //componentDidMount - atualiza 1 vez sempre quando o componete e montado a primeira vez
  useEffect(() => {
    console.log('componentDidMount');
  }, []);

  //componentWillAmount - limpeza ao desmontar o componente
  useEffect(() => {
    document.querySelector('h1')?.addEventListener('click', eventFn);

    return () => {
      document.querySelector('h1')?.removeEventListener('click', eventFn);
    };
  }, []);

  //com dependencia - executa toda vez que a dependencia mudar.
  useEffect(() => {
    console.log('Contado mudou para', counter);
  }, [counter]);

  return (
    <div className="App">
      <p>Teste 1</p>
      <h1>Contador: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <h1>Contador2: {counter2}</h1>
      <button onClick={() => setCounter2(counter2 + 1)}>+</button>
    </div>
  );
}

export default UseEfect;
