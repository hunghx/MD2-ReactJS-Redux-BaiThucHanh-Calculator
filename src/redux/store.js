import { createStore } from "redux";
import recordReducer from "./reducer";

export const store = createStore(recordReducer);
