import React, { useState, useContext } from "react";
import { ThemeContext } from "./App";

export default function CounterHook({ initialCount }) {
  // all hook functionalitiess should be defined first
  // no conditional check is allowed over useState variables
  const [count, setCount] = useState(initialCount);
  const style = useContext(ThemeContext);
  console.log("CounterHook Component");
  return (
    <div className="counter">
      <button
        style={style}
        onClick={() => setCount((previousCount) => previousCount + 1)}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        style={style}
        onClick={() => setCount((previousCount) => previousCount - 1)}
      >
        Decrement
      </button>
    </div>
  );
}
