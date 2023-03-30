import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrease, increase } from "./redux/action";
export default function App() {
  // sử dụng useSelector để lấy ra giá trị của state
  let count = useSelector((state) => state);
  // Khai báo 1 useDisatch để bắn action
  const dispatch = useDispatch();
  // hàm xử lí tăng
  const handleIncrease = () => {
    dispatch(increase());
  };

  // hàm xử lí giảm
  const handleDecrease = () => {
    dispatch(decrease());
  };
  return (
    <div>
      <h2 className="text-center mt-5">Ứng dụng đếm số</h2>
      <div className="display d-flex justify-content-center align-items-center">
        <button className="btn btn-warning" onClick={handleDecrease}>
          <i class="bi bi-dash"></i>
        </button>
        <span>{count}</span>
        <button className="btn btn-warning" onClick={handleIncrease}>
          <i class="bi bi-plus"></i>
        </button>
      </div>
    </div>
  );
}
