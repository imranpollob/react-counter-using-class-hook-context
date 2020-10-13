import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
/**
 * StrictMode renders components twice (on dev but not production)
 * in order to detect any problems with your code and
 * warn you about them (which can be quite useful).
 **/
ReactDOM.render(
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>,
  document.getElementById("root")
);
