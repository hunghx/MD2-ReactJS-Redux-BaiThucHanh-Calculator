import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { closeMenu, openMenu, search, selectMenuItem } from "./redux/actions";
export default function App() {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.isMenuOpen);
  const selectedMenuItem = useSelector((state) => state.selectedMenuItem);
  const searchQuery = useSelector((state) => state.searchQuery);

  const handleMenuClick = () => {
    if (isMenuOpen) {
      dispatch(closeMenu());
    } else {
      dispatch(openMenu());
    }
  };

  const handleMenuItemClick = (itemId) => {
    dispatch(selectMenuItem(itemId));
  };

  const handleSearch = (event) => {
    dispatch(search(event.target.value));
  };

  return (
    <div>
      <button onClick={handleMenuClick}>
        {isMenuOpen ? "Close" : "Open"} Menu
      </button>
      {isMenuOpen && (
        <ul>
          <li
            onClick={() => handleMenuItemClick(1)}
            className={selectedMenuItem === 1 ? "selected" : ""}
          >
            Item 1
          </li>
          <li
            onClick={() => handleMenuItemClick(2)}
            className={selectedMenuItem === 2 ? "selected" : ""}
          >
            Item 2
          </li>
          <li
            onClick={() => handleMenuItemClick(3)}
            className={selectedMenuItem === 3 ? "selected" : ""}
          >
            Item 3
          </li>
        </ul>
      )}
      <input
        type="text"
        placeholder="search here ..."
        value={searchQuery}
        onChange={handleSearch}
      />
    </div>
  );
}
