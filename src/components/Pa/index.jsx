import { useContext } from 'react';
import { GlobalContext } from '../../contexts/Use_context';
import '../../App.css';

export const Pa = () => {
  const theContext = useContext(GlobalContext);
  console.log(theContext);
  const {
    state: { body },
    setState,
  } = theContext;
  return (
    <p
      className="App"
      onClick={() =>
        // estrutura para objeto setContextState(
        // (estado anterior[prevState]) =>
        //  ({espred do objeto [...prevState, ], objeto a ser alterado[counter: prevState.counter + 1]}))
        setState((prevState) => ({
          ...prevState,
          counter: prevState.counter + 1,
        }))
      }
    >
      {body}
    </p>
  );
};
