import { CLOSE_MENU, OPEN_MENU, SEARCH, SELECT_MENU_ITEM } from "./actions";

const initialState = {
  isMenuOpen: false,
  selectedMenuItem: null,
  searchQuery: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MENU:
      return { ...state, isMenuOpen: true };
    case CLOSE_MENU:
      return { ...state, isMenuOpen: false };
    case SELECT_MENU_ITEM:
      return { ...state, selectedMenuItem: action.itemId };
    case SEARCH:
      return { ...state, searchQuery: action.query };
    default:
      return state;
  }
};
export default reducer;
