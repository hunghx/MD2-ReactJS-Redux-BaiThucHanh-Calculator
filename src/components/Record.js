import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRecord } from "../redux/actions";

export default function Record() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  let listRecords = useSelector((state) => state.records);
  const handleSubmit = (event) => {
    event.preventDefault();
    const newRecord = { title, content };
    dispatch(addRecord(newRecord));
    setTitle("");
    setContent("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Content:
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </label>
        <button type="submit">Add Record</button>
      </form>
      <ul type="circle">
        <h3>Danh sách bản ghi đã lưu</h3>
        {listRecords.map((record, index) => (
          <li key={index}>
            {record.title} - {record.content}
          </li>
        ))}
      </ul>
    </>
  );
}
