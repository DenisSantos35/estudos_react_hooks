import {
  forwardRef,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

function UseImperactiveEffect() {
  // eslint-disable-next-line no-unused-vars
  const [counted, setCounted] = useState([0, 1, 2, 3, 4]);

  const divRef = useRef();

  useLayoutEffect(() => {
    const now = Date.now();
    while (Date.now() < now + 300);
    divRef.current.scrolltop = divRef.current.scrollHeight;
  });

  const handleClick = () => {
    setCounted((count) => [count, +count.slice(-1) + 1]);
    divRef.current.handleClick();
  };

  return (
    <>
      <button onClick={handleClick}>Count {counted.slice(-1)}</button><DisplayCounted counted={counted} ref={divRef} />
    </>

  );
}

export default UseImperactiveEffect;

export const DisplayCounted = forwardRef(function DisplayCounted(counter, ref) {
  const [rand, setHand] = useState('0.24');

  const handleClick = () => {
    setHand(Math.random().toFixed(2));
  };

  useImperativeHandle(ref, () => ({
    handleClick,
    divRef: divRef.current,
  }));
  return (
    <div
      ref={ref}
      style={{ height: '100px', width: '100px', overflow: 'scroll' }}
    >
      {counter.map((count) => {
        <p onClick={handleClick} key={`c-${count}`}>
          {count} +++ {rand}
        </p>;
      })}
    </div>
  );
});
