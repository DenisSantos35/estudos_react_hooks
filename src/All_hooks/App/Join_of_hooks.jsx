import { Posts } from '../../components/Posts';
import { CounterProvider } from '../../contexts/Example_Provider';
import { PostsProvider } from '../../contexts/Posts_Provider';
import './App.css';

function JoinOfHooks() {
  return (
    <CounterProvider>
      <PostsProvider>
        <div>
          <Posts />
        </div>
      </PostsProvider>
    </CounterProvider>
  );
}

export default JoinOfHooks;
