import React from "react";
import { useSelector } from "react-redux";

export default function Display() {
  const result = useSelector((state) => state.result);
  const input = useSelector((state) => state.input);

  return (
    <div className="display">
      <div className="input">{input}</div>
      <div className="result">= {result}</div>
    </div>
  );
}
