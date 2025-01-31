import { useCallback, useMemo, useState } from 'react';
import './App.css';
import P from 'prop-types';

const Button = ({ incrementButton }) => {
  console.log('child');
  return <button onClick={() => incrementButton(10)}>+</button>;
};

Button.propTypes = {
  incrementButton: P.func,
};

function UseMemo() {
  const [contador, setContador] = useState(0);

  console.log('pai');

  const incrementCounter = useCallback((num) => {
    setContador((prevCounter) => prevCounter + num);
  }, []);

  const btn = useMemo(() => {
    return <Button incrementButton={incrementCounter} />;
  }, [incrementCounter]);

  return (
    <div className="App">
      <h1> Contador: {contador}</h1>
      {btn}
    </div>
  );
}

export default UseMemo;
