import { AppContext } from './contexts/Use_context';
import './App.css';
import { Div } from './components/Div';

function UseContext2() {
  return (
    <AppContext>
      <Div />
    </AppContext>
  );
}

export default UseContext2;
