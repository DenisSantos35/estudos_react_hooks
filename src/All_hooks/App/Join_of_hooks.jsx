import { Posts } from '../../components/Posts';
import { PostsProvider } from '../../contexts/Posts_Provider';
import './App.css';

function JoinOfHooks() {
  return (
    <PostsProvider>
      <div>
        <Posts />
      </div>
    </PostsProvider>
  );
}

export default JoinOfHooks;
