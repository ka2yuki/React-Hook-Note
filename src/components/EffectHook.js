import React, { useState, useEffect } from "react";

export const EffectHook = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    // effect
    document.title = `Click Count: ${count}`;
    console.log("render");
    // return () => {
    //   document.title = `Click Count: ${count}`;
    //   // cleanup
    // };
  });

  return (
    <div>
      <p>Click {count}</p>
      <p>Name: {name}</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Count!</button>
    </div>
  );
};
