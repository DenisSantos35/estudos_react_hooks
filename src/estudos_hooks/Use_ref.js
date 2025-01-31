import { useEffect, useMemo, useRef, useState } from 'react';
import './App.css';
import P from 'prop-types';

const Post = ({ post, handleClick }) => {
  return (
    <div key={post.id} className="post">
      <h1 style={{ fontSize: '14px' }} onClick={() => handleClick(post.title)}>
        {post.title}
      </h1>
      <p>{post.body}</p>
    </div>
  );
};

Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
  handleClick: P.func,
};

function UseRef() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  const input = useRef(null);
  const contador = useRef(0);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  useEffect(() => {
    input.current.focus();
    console.log(input.current.value);
  }, [value]);

  useEffect(() => {
    contador.current++;
  });

  const handleClick = (value) => {
    setValue(value);
  };

  return (
    <div className="App">
      <h1>Renderizou: {contador.current} X </h1>
      <p>
        <input
          ref={input}
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></input>
      </p>
      {useMemo(() => {
        return (
          posts.length > 0 &&
          posts.map((post) => (
            <Post key={post.id} post={post} handleClick={handleClick} />
          ))
        );
      }, [posts])}

      {posts.length <= 0 && <p>Ainda não existem posts</p>}
    </div>
  );
}

export default UseRef;
