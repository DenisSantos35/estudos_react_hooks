// import { useEffect } from 'react';
import { useCounterContext } from '../../Context/CounterContext';
import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';

export const Home = () => {
  const [state, actions] = useCounterContext();
  // const [actionState] = useState(actions);
  console.log(state);
  // useEffect(() => {
  //   actions.increase();
  // }, [actions]);

  const handleError = () => {
    actions
      .asyncError()
      .then((resolve) => console.log(resolve))
      .catch((e) => console.log(e.name, ':', e.message));
  };
  return (
    <div>
      <div>
        <Heading></Heading>
      </div>
      <div>
        <Button onButtonClick={actions.increase}>Increase</Button>
        <Button onButtonClick={actions.decrease}>decrease</Button>
        <Button onButtonClick={actions.reset}>reset</Button>
        <Button onButtonClick={() => actions.setCounter({ counter: 10 })}>
          Set 10
        </Button>
        <Button onButtonClick={() => actions.setCounter({ counter: 100 })}>
          Set 100
        </Button>
        <Button disabled={state.loading} onButtonClick={actions.asyncIncrease}>
          async Increase
        </Button>
        <Button disabled={state.loading} onButtonClick={handleError}>
          async Error
        </Button>
      </div>
    </div>
  );
};
