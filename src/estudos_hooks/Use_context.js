import React, { useContext, useState } from 'react';
import './App.css';
import P from 'prop-types';

//estado global que será passado entre os compontes
//um componente precisa ser responsavel por passar para outros componentes
const globalState = {
  title: 'O título do contexto',
  body: 'o body do contexto',
  counter: 0,
};
//contexto e como se fosse um componete
const GlobalContext = React.createContext();
//eslint-disable-next-line
const Div = ({ children }) => {
  return (
    <>
      <H1 />
      <Pa />
    </>
  );
};

const H1 = () => {
  const theContext = useContext(GlobalContext);
  const {
    contextState: { title, counter },
  } = theContext;
  return (
    <h1 className="App">
      {title} {counter}
    </h1>
  );
};
//eslint-disable-next-line
const Pa = () => {
  const theContext = useContext(GlobalContext);
  console.log(theContext);
  const {
    contextState: { body },
    setContextState,
  } = theContext;
  return (
    <p
      onClick={() =>
        // estrutura para objeto setContextState(
        // (estado anterior[prevState]) =>
        //  ({espred do objeto [...prevState, ], objeto a ser alterado[counter: prevState.counter + 1]}))
        setContextState((prevState) => ({
          ...prevState,
          counter: prevState.counter + 1,
        }))
      }
    >
      {body}
    </p>
  );
};

Div.propTypes = {
  children: P.string,
};

H1.propTypes = {
  children: P.string,
};

function UseContext() {
  const [contextState, setContextState] = useState(globalState);
  return (
    <GlobalContext.Provider value={{ contextState, setContextState }}>
      <Div />
    </GlobalContext.Provider>
  );
}

export default UseContext;
