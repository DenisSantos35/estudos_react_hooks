import { useLayoutEffect, useRef, useState } from 'react';

function UseLayoutEffect() {
  // eslint-disable-next-line no-unused-vars
  const [counted, setCounted] = useState([0, 1, 2, 3, 4]);

  const divRef = useRef();

  useLayoutEffect(() => {
    console.log(divRef.current);
    const now = Date.now();
    while (Date.now() < now + 600);
    divRef.current.scrolltop = divRef.current.scrollHeight;
  });

  const handleClick = () => {
    setCounted((count) => [count, +count.slice(-1) + 1]);
  };
  return (
    <>
      <button onClick={handleClick}>Count {counted.slice(-1)}</button>
      <div
        ref={divRef}
        style={{ height: '100px', width: '100px', overflow: 'scroll' }}>
        {counted.map((count) => {
          return <p key={`c-${count}`}>{count}</p>;
        })}
      </div>
    </>
  );
}

export default UseLayoutEffect;
