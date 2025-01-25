import { useContext } from 'react';
import { GlobalContext } from '../../contexts/Use_context';

export const H1 = () => {
  const theContext = useContext(GlobalContext);
  console.log(theContext);
  const {
    state: { title, counter },
  } = theContext;
  return (
    <h1 className="App">
      {title} {counter}
    </h1>
  );
};
