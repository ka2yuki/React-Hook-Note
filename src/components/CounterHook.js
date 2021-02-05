import React, { useState } from "react";

export const CounterHook = () => {
  const [count, setCount] = useState(0);
  const incrementCounter = () => setCount(count + 1);
  const incrementCounterTen = () => {
    for (let i = 0; i < 10; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incrementCounter}>Count!</button>
      <button onClick={incrementCounterTen}>10 Count!</button>
    </div>
  );
};
