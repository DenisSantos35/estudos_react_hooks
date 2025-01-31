import P from 'prop-types';
import React, { useCallback, useState } from 'react';
import './App.css';

const Button = React.memo(function button({ incrementButton }) {
  console.log('Filho, renderizou');
  return <button onClick={() => incrementButton(10)}>+</button>;
});

Button.propTypes = {
  incrementButton: P.func,
};

function UseCalback() {
  const [contador, setContador] = useState(0);

  const incrementCounter = useCallback((num) => {
    setContador((c) => c + num);
  }, []);
  console.log('Pai, renderizou');
  return (
    <div className="App">
      <h1>Contador: {contador} </h1>
      <Button incrementButton={incrementCounter} />
    </div>
  );
}

export default UseCalback;
