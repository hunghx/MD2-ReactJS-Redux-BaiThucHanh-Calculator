import React, { Component } from "react";
import Button from "./Button";

export default class App extends Component {
  render() {
    return (
      <div>
        {/* Button */}
        <Button text="Click Me" color="red" background="blue" />
        {/* Button */}
      </div>
    );
  }
}
