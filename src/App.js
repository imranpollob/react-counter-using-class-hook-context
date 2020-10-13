import React, { createContext, useState } from "react";
import Counter from "./Counter";
import CounterHook from "./CounterHook";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("white");
  console.log("Render App");
  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      Counter
      <Counter initialCount={0} />
      Counter Hook
      <CounterHook initialCount={0} />
      <button
        onClick={() =>
          setTheme((previousValue) =>
            previousValue === "white" ? "yellow" : "white"
          )
        }
      >
        Toggle Theme
      </button>
    </ThemeContext.Provider>
  );
}
export default App;
