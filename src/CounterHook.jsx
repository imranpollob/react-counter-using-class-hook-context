import React, { useState } from "react";

export default function CounterHook({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  console.log("CounterHook Component");

  return (
    <div className="counter">
      <button onClick={() => setCount((previousCount) => previousCount + 1)}>
        Increment
      </button>
      <span>{count}</span>
      <button onClick={() => setCount((previousCount) => previousCount - 1)}>
        Decrement
      </button>
    </div>
  );
}
