import { useContext, useEffect, useRef } from 'react';
import './index.css';
import { PostsContext } from '../../contexts/Posts_Provider/context';
import { loadPosts } from '../../contexts/Posts_Provider/actions';
import { CounterContext } from '../../contexts/Example_Provider/context';
import {
  incrementCounter,
  decrementCounter,
} from '../../contexts/Example_Provider/action';

export const Posts = function () {
  const isMonted = useRef(true);
  const postsContext = useContext(PostsContext);
  const { postsState, postsDispatch } = postsContext;

  const counterContext = useContext(CounterContext);
  const { counterState, counterDispatch } = counterContext;

  useEffect(() => {
    console.log(isMonted.current);
    loadPosts(postsDispatch)
      .then((dispatch) => {
        if (isMonted.current) {
          dispatch();
        }
      })
      .then(() => {
        isMonted.current = false;
        console.log(isMonted.current);
      });
  }, [postsDispatch]);

  return (
    <div className="App">
      <button onClick={() => incrementCounter(counterDispatch)}>
        Counter: {counterState.counter} +
      </button>
      <button onClick={() => decrementCounter(counterDispatch)}>
        Counter: {counterState.counter} -
      </button>
      <h1>POSTS</h1>
      {postsState.loading && (
        <p>
          <strong>Carregando posts...</strong>
        </p>
      )}
      {postsState.posts.map((post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};
