import React, { useEffect, useRef, useState } from "react";

const Ref = () => {
  const ref = useRef(null);
  const [count, setCount] = useState(100);

  const currentRef = useRef();
  const time = useRef();

  useEffect(() => {
    ref.current.focus();
    currentRef.current = count;
  }, [count]);

  let timeID;

  const handleStart = () => {
    // timeID = setInterval(() => {
    //   setCount((precount) => precount - 1);
    // }, 1000);
    time.current = setInterval(() => {
      setCount((precount) => precount - 1);
    }, 1000);
  };

  const handleStop = () => {
    // clearInterval(timeID);
    clearInterval(time.current);
  };

  console.log(count, currentRef.current);
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
