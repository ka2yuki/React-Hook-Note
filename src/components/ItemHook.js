import React, { useState } from "react";

export const ItemHook = () => {
  const [items, setItem] = useState([]);
  const addItem = () => {
    setItem([
      ...items,
      { id: items.length, value: Math.floor(Math.random() * 11) },
    ]);
  };
  return (
    <div>
      <button onClick={addItem}>Add</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
};
