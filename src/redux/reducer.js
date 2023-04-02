const initialState = {
  records: [],
};

export default function recordReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_RECORD":
      return {
        ...state,
        records: [...state.records, action.payload],
      };
    default:
      return state;
  }
}
