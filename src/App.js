import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
export default function App() {
  // sử dụng useSelector để lấy ra danh sách sinh viên
  let text = useSelector((state) => state);
  let dispatch = useDispatch();
  // tạo hàm onchange để xử lí khi có sự thay đổi dữ liệU của ô input
  const onchangeState = (e) => {
    let atrr = { [e.target.name]: e.target.value };
    console.log(atrr);
    dispatch({
      type: "ONCHANGE",
      payload: atrr,
    });
  };
  return (
    <div className="container text-center">
      <h2 className="text-center mt-5">Color Picker App</h2>
      <div className="d-flex justify-content-center gap-2 mb-2">
        <label>Color</label>
        <input
          type="color"
          name="color"
          style={{ width: "50px" }}
          value={text.color}
          onChange={(e) => onchangeState(e)}
        />
      </div>
      <textarea
        className="form-control"
        name="content"
        id="content"
        style={{ height: 100, fontSize: 16, color: text.color }}
        value={text.content}
        onChange={(e) => onchangeState(e)}
      />
    </div>
  );
}
