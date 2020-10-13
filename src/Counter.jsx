import React, { Component } from "react";

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
      <div className="counter">
        <button onClick={() => this.changeValue(1)}>Increment</button>
        <span>{this.state.count}</span>
        <button onClick={() => this.changeValue(-1)}>Decrement</button>
      </div>
    );
  }
}
