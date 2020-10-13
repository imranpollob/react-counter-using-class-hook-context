import React, { Component } from "react";
import { ThemeContext } from "./App";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: props.initialCount,
    };
  }

  changeValue(value) {
    this.setState((previousValue) => {
      return {
        count: previousValue.count + value,
      };
    });
  }

  render() {
    console.log("Counter Component");

    return (
      <ThemeContext.Consumer>
        {(style) => (
          <div className="counter">
            <button style={style} onClick={() => this.changeValue(1)}>
              Increment
            </button>
            <span>{this.state.count}</span>
            <button style={style} onClick={() => this.changeValue(-1)}>
              Decrement
            </button>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}
