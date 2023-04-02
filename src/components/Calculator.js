import React from "react";
import Display from "./Display";
import Button from "./Button";
export default function Calculator() {
  return (
    <div className="calculator">
      <Display />
      <div className="button-row">
        <Button text="7" type="number" />
        <Button text="8" type="number" />
        <Button text="9" type="number" />
        <Button text="+" type="operator" />
      </div>
      <div className="button-row">
        <Button text="4" type="number" />
        <Button text="5" type="number" />
        <Button text="6" type="number" />
        <Button text="-" type="operator" />
      </div>
      <div className="button-row">
        <Button text="1" type="number" />
        <Button text="2" type="number" />
        <Button text="3" type="number" />
        <Button text="*" type="operator" />
      </div>
      <div className="button-row">
        <Button text="0" type="number" />
        <Button text="." type="number" />
        <Button text="C" type="clear" />
        <Button text="=" type="equal" />
        <Button text="/" type="operator" />
      </div>
    </div>
  );
}
