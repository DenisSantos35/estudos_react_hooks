import { useEffect, useRef, useState } from 'react';
import './App.css';

const useMyHook = (cb, delay = 1000) => {
  const saveCb = useRef();

  useEffect(() => {
    saveCb.current = cb;
  }, [cb]);
  useEffect(() => {
    //eslint-disable-next-line
    const interval = setInterval(() => {
      saveCb.current();
    }, delay);

    return () => clearInterval(interval);
  }, [delay]);
};

function MyHook() {
  const [counter, setCounter] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [incrementor, setIncremetor] = useState(100);
  //eslint-disable-next-line
  useMyHook(() => setCounter((c)=> c + 1), delay);

  return (
    <div className="App">
      <h1>Contador: {counter}</h1>
      <h1>Delay: {delay}</h1>
      <button
        onClick={() => {
          setDelay((d) => d + incrementor);
        }}
      >
        +{incrementor}
      </button>
      <button
        onClick={() => {
          setDelay((d) => d - incrementor);
        }}
      >
        -{incrementor}
      </button>
      <input
        type="number"
        value={incrementor}
        onChange={(e) => setIncremetor(Number(e.target.value))}
      ></input>
    </div>
  );
}

export default MyHook;
