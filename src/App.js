import React from "react";
import "./App.css";
import { DataFeatchById } from "./components/DataFeatchById"
// import Counter from "./components/Counter";
import { CounterHook } from "./components/CounterHook";
import { EffectHook } from "./components/EffectHook";
import { FormHook } from "./components/FormHook";
import { ItemHook } from "./components/ItemHook";

function App() {
  return (
    <div className="App">
      {/* <DataFeatch /> */}
      <DataFeatchById />

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
