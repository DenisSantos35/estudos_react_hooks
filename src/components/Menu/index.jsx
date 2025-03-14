import { Link } from 'react-router-dom';

export const Menu = () => {
  return (
    <nav
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        background: 'blue',
        height: '60px',
        alignItems: 'center',
      }}
    >
      <Link to="/" style={{ color: 'white' }}>
        Home
      </Link>
      <a href="/" style={{ color: 'white' }}>
        Home (A)
      </a>
      <Link to="/abc" style={{ color: 'white' }}>
        Abc
      </Link>
      <a href="/abc" style={{ color: 'white' }}>
        Abc (A)
      </a>
    </nav>
  );
};
