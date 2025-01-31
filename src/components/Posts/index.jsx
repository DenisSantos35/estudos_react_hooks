import { useContext, useEffect, useRef } from 'react';
import './index.css';
import { PostsContext } from '../../contexts/Posts_Provider/context';
import { loadPosts } from '../../contexts/Posts_Provider/actions';

export const Posts = function () {
  const isMonted = useRef(true);
  const postsContext = useContext(PostsContext);
  const { postsState, postsDispatch } = postsContext;

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
