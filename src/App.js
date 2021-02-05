import React from "react";
import "./App.css";
// import Counter from "./components/Counter";
import { CounterHook } from "./components/CounterHook";
import { EffectHook } from "./components/EffectHook";
import { FormHook } from "./components/FormHook";
import { ItemHook } from "./components/ItemHook";

function App() {
  return (
    <div className="App">
      <CounterHook />
      <hr />
      <FormHook />
      <hr />
      <ItemHook />
      <hr />
      <EffectHook />
    </div>
  );
}

export default App;
