import React, { useEffect, useRef, useState } from "react";

const Ref = () => {
  const ref = useRef(null);
  const [count, setCount] = useState(100);

  useEffect(() => {
    ref.current.focus();
  }, []);

  const currentRef = useRef(0);

  //   let timeID;

  const handleStart = () => {
    currentRef.current = setInterval(() => {
      setCount((precount) => precount - 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(currentRef.current);
  };

  return (
    <div>
      <input type="text" ref={ref} />
      <p>Count: {count}</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

export default Ref;
