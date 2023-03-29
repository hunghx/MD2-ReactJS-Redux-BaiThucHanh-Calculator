import { CREATE, DELETE, UPDATE } from "./constants";

// khởi tạo giá tị cho state
const initState = [
  { id: 1, task: "đi học" },
  { id: 2, task: "đi ngủ" },
  { id: 3, task: "đi chơi" },
];

// tạo reducer cho store
const reducer = (state = initState, action) => {
  switch (action.type) {
    case CREATE:
      let idNewTodo;
      if (state.length === 0) {
        idNewTodo = 1;
      } else {
        idNewTodo = state[state.length - 1].id + 1;
      }
      state = [...state, { id: idNewTodo, task: action.payload }];
      return state;
    case UPDATE:
      state = state.map((todo) => {
        if (todo.id === action.payload.id) {
          return action.payload;
        } else {
          return todo;
        }
      });
      return state;
    case DELETE:
      state = state.filter((work) => work.id !== action.payload);
      return state;
    default:
      return state;
  }
};

export default reducer;
