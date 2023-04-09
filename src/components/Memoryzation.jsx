import React, { useCallback, useMemo, useState } from "react";
import Form from "./Form";

const Memoryzation = () => {
  const [count, setCount] = useState(0);

  //expensive function
  const fibonaci = (n) => {
    if (n < 2) {
      return n;
    }

    return fibonaci(n - 1) + fibonaci(n - 2);
  };

  console.time("fibonaci");
  //   const result = fibonaci(43);
  const result = useMemo(() => {
    return fibonaci(43);
  }, []);
  console.timeEnd("fibonaci");

  const [total, setTotal] = useState(10);
  const submitForm = useCallback(() => {
    alert("Submit");
  }, []);

  //   const submitForm = useMemo(() => {
  //     return () => {
  //       alert("Submit");
  //     };
  //   }, []);

  return (
    <>
      <div>
        <p>Count: {count}</p>
        <p>Fibonaci: {result}</p>
      </div>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      <Form total={total} submitForm={submitForm} />
    </>
  );
};

export default Memoryzation;
