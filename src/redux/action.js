import { DECREASE, INCREASE } from "./constants";
// action để tăng giá trị
export const increase = () => {
  return {
    type: INCREASE,
  };
};
// action để giảm giá trị
export const decrease = () => {
  return {
    type: DECREASE,
  };
};
