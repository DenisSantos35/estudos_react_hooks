import { useDebugValue, useEffect, useState } from 'react';

const useMediaQuery = (queryValue, initialMatch = false) => {
  const [match, setMatch] = useState(initialMatch);

  useDebugValue(`Query: ${queryValue}`, (name) => {
    return name + 'posso modificalo';
  });

  useEffect(() => {
    let isMounted = true;
    const matchMedia = window.matchMedia(queryValue);

    const handleChange = () => {
      if (!isMounted) return;
      setMatch(Boolean(matchMedia.matches));
    };

    matchMedia.addEventListener('change', handleChange);
    setMatch(!!matchMedia.matches);

    return () => {
      isMounted = false;
      matchMedia.removeEventListener('change', handleChange);
    };
  }, [queryValue]);

  return match;
};

function UseDebugValue() {
  const huge = useMediaQuery('(min-width: 980px)');
  const big = useMediaQuery('(max-width: 979px) and (min-width: 768px)');
  const medium = useMediaQuery('(max-width: 767px) and (min-width: 321px)');
  const small = useMediaQuery('(max-width: 320px) ');
  const background = huge
    ? 'green'
    : big
      ? 'red'
      : medium
        ? 'yellow'
        : small
          ? 'purple'
          : null;

  return (
    <div style={{ fontSize: '60px', background }}>
      <p>OI</p>
    </div>
  );
}

export default UseDebugValue;
