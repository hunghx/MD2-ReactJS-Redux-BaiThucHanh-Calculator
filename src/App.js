import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { create_new_work, delete_work, update_work } from "./redux/action";
export default function App() {
  let dispatch = useDispatch();
  const [newTask, setNewTask] = useState("");
  const [updateTask, setUpdateTask] = useState({ id: "", task: "" });
  // lấy list todo từ store của redux bằng useSelector
  let listTodo = useSelector((state) => state);

  // tạo mới 1 todo
  const handleCreate = (e) => {
    e.preventDefault();
    if (newTask.trim() === "") {
      return;
    }
    dispatch(create_new_work(newTask));
    setNewTask("");
  };

  //xoá 1 todo theo id
  const handleDelete = (idDelete) => {
    // xác nhận xoá
    let isConfirm = window.confirm(
      "Bnaj có chắc chắc muốn xoá task này không?"
    );
    if (!isConfirm) {
      return;
    }
    dispatch(delete_work(idDelete));
  };

  //  hiện thông tin cần sửa trong modal
  const handleEdit = (todo) => {
    setUpdateTask(todo);
  };

  //update todo theo id
  const handleUpdate = () => {
    dispatch(update_work(updateTask));
  };
  return (
    <div className="container my-2">
      <h2 className="text-center">Todo App</h2>
      <p className="text-center">What needs to be done?</p>
      <form>
        <label className="my-1" htmlFor="work">
          Enter works todo :
        </label>
        <textarea
          className="form-control"
          id="work"
          style={{ height: 100, fontSize: "16px" }}
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="btn btn-info my-1" onClick={handleCreate}>
          Add New Work
        </button>
      </form>
      <div className="list my-3">
        <h3>Danh sách việc cần làm</h3>
        <div className="list-work">
          <ul className="p-0">
            {/* Sử dụng map để hiển thị danh sách */}
            {listTodo.map((todo, index) => (
              <li
                key={todo.id}
                className="d-flex flex-row justify-content-between pb-2 
      mb-2 border-bottom border-dark align-items-center"
              >
                <span>
                  {index + 1}. {todo.task}
                </span>
                <div>
                  <button
                    className="btn btn-warning mx-2"
                    data-bs-toggle="modal"
                    data-bs-target="#editModal"
                    onClick={(e) => handleEdit(todo)}
                  >
                    <i className="bi bi-pencil-square" />
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(todo.id)}
                  >
                    <i className="bi bi-trash3" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Modal Edit */}
      <div
        className="modal fade"
        id="editModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Task
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <textarea
                className="form-control"
                id="work-edit"
                style={{ height: 100, fontSize: "16px" }}
                value={updateTask.task}
                onChange={(e) =>
                  setUpdateTask({ ...updateTask, task: e.target.value })
                }
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={handleUpdate}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Edit */}
    </div>
  );
}
