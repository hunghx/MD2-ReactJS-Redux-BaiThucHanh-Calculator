import React, { Component } from "react";
import Button from "./Button";

export default class App extends Component {
  render() {
    return (
      <div>
        {/* Button */}
        {/*truyền 3 props với giá trị vào coponent button*/}
        <Button text="Click Me" color="red" background="blue" />
        {/* Button */}
      </div>
    );
  }
}
