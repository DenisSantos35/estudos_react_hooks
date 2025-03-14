import { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

export const Abc = () => {
  const { slug, id, user } = useParams();
  const { pathname, search, hash, state, key } = useLocation();
  const navigate = useNavigate();
  console.log(navigate);

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 5000);
  }, [navigate]);

  return (
    <div>
      <h1>ABC</h1>
      <h2>
        Usando params = slug:{slug} id: {id} user: {user}
      </h2>
      <h3>
        <strong>Usando locale</strong> = pathname: {pathname}, search: {search},
        hash: {hash}, state: {state}, key: {key}
      </h3>
    </div>
  );
};
