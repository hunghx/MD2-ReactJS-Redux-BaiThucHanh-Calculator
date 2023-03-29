import { CREATE, DELETE, UPDATE } from "./constants";

export const create_new_work = (todo) => {
  return {
    type: CREATE,
    payload: todo,
  };
};
export const delete_work = (idDelete) => {
  return {
    type: DELETE,
    payload: idDelete,
  };
};
export const update_work = (todoUpdate) => {
  return {
    type: UPDATE,
    payload: todoUpdate,
  };
};
