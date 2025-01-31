import { useEffect, useMemo, useState } from 'react';
import './App.css';
import P from 'prop-types';

const Post = ({ post }) => {
  console.log('filho redenreizou');
  return (
    <div key={post.id} className="post">
      <h1>{post.title}</h1>
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
};

function UseMemo2() {
  console.log('pai redenreizou');
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  console.log(value);
  return (
    <div className="App">
      <p>
        <input
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></input>
      </p>
      {useMemo(() => {
        return (
          posts.length > 0 &&
          posts.map((post) => <Post key={post.id} post={post} />)
        );
      }, [posts])}

      {posts.length <= 0 && <p>Ainda não existem posts</p>}
    </div>
  );
}

export default UseMemo2;
