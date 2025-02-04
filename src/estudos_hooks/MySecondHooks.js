import { useState } from 'react';
import { useFetch } from './use_fetch';

function MySecondHooks() {
  const [postId, setPostId] = useState('');
  const [result, loading] = useFetch(
    'https://jsonplaceholder.typicode.com/posts/' + postId,
    {
      headers: {
        abc: '15',
      },
    },
  );

  if (loading) {
    return <h1>Carregando dados... </h1>;
  }

  const handleClick = (id) => {
    setPostId(id);
  };

  if (!loading && result) {
    return (
      <div>
        {result?.length > 0 ? (
          result.map((post) => (
            <p key={`post-${post.id}`} onClick={() => handleClick(post.id)}>
              {post.title}
            </p>
          ))
        ) : (
          <div>
            <p onClick={() => handleClick('')}>{result.title}</p>
          </div>
        )}
      </div>
    );
  }
  return (
    <div>
      <h1>oi</h1>
    </div>
  );
}

export default MySecondHooks;
