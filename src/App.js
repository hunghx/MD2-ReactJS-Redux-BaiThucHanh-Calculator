import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import "./App.css";
export default function App() {
  // sử dụng useSelector để lấy ra danh sách sinh viên
  let listStudent = useSelector((state) => state);

  return (
    <div className="container">
      <h2 className="text-center mt-5">Danh sách sinh viên</h2>
      <table className="table">
        <thead>
          <tr>
            <td>STT</td>
            <td>Họ Tên</td>
            <td>Tuổi</td>
            <td>Giới tính</td>
            <td>Lớp</td>
          </tr>
        </thead>
        {/* dùng map để in ra danh sách các phần tử mảng */}
        <tbody>
          {listStudent.map((student, index) => (
            <tr key={student.id}>
              <td>{index + 1}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.sex ? "Nam" : "Nữ"}</td>
              <td>{student.class}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
