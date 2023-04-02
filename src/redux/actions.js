export const addNumber = (text) => ({ type: "ADD_NUMBER", payload: text });
export const addOperator = (text) => ({ type: "ADD_OPERATOR", payload: text });
export const clear = () => ({ type: "CLEAR_INPUT" });
export const calculatorResult = () => ({ type: "CALCULATE_RESULT" });
