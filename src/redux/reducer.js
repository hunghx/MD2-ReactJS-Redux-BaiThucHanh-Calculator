import { INCREASE, DECREASE } from "./constants";

// khởi tạo giá tị cho state
const initState = 10;
// tạo reducer cho store
const reducer = (state = initState, action) => {
  switch (action.type) {
    case INCREASE:
      // tăng giá trị state
      state = state + 1;
      return state;
    case DECREASE:
      // giảm giá tị state
      state = state - 1;
      return state;
    default:
      return state;
  }
};

export default reducer;
