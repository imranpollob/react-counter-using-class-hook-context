import React from "react";
import Counter from "./Counter";
import CounterHook from "./CounterHook";

function App() {
  console.log("Render App");
  return (
    <>
      Counter
      <Counter initialCount={0} />
      Counter Hook
      <CounterHook initialCount={0} />
    </>
  );
}
export default App;
