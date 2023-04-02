const initialState = {
  result: 0,
  input: "",
};
export function calculatorReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_NUMBER":
      return {
        ...state,
        input: state.input + action.payload,
      };
    case "ADD_OPERATOR":
      return {
        ...state,
        input: state.input + action.payload,
      };
    case "CLEAR_INPUT":
      return {
        ...state,
        input: "",
      };
    case "CALCULATE_RESULT":
      const result = eval(state.input);
      return {
        ...state,
        input: result.toString(),
        result,
      };
    default:
      return state;
  }
}
