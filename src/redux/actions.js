export const OPEN_MENU = "OPEN_MENU";
export const CLOSE_MENU = "CLOSE_MENU";
export const SELECT_MENU_ITEM = "SELECT_MENU_ITEM";
export const SEARCH = "SEARCH";

export const openMenu = () => ({ type: OPEN_MENU });
export const closeMenu = () => ({ type: CLOSE_MENU });
export const selectMenuItem = (itemId) => ({ type: SELECT_MENU_ITEM, itemId });
export const search = (query) => ({ type: SEARCH, query });
