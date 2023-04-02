import React from "react";
import { useDispatch } from "react-redux";

export default function Button({ text, type }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    if (type === "number") {
      dispatch({ type: "ADD_NUMBER", payload: text });
    } else if (type === "operator") {
      dispatch({ type: "ADD_OPERATOR", payload: text });
    } else if (type === "clear") {
      dispatch({ type: "CLEAR_INPUT" });
    } else if (type === "equal") {
      dispatch({ type: "CALCULATE_RESULT" });
    }
  };

  return (
    <button className={`button ${type}`} onClick={handleClick}>
      {text}
    </button>
  );
}
