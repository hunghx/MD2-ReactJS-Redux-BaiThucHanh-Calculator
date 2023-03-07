import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    //Khởi tạo 1 state là textInput có giá trị khởi tạo là "" để lưu giá trị người dùng nhập từ ô input
    this.state = {
      textInput: "",
    };
    // Khai báo phương thức để sử dụng từ khoá this
    this.handleChangeInputValue = this.handleChangeInputValue.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }
  // khởi tạo phương thức để cập nhật giá trị người dùng nhập vào ô input vào lưu vào biến textInput
  handleChangeInputValue(event) {
    this.setState({
      textInput: event.target.value,
    });
  }
  // Khởi tạo phương thức thức khi có sự kiện submit form
  handleSubmitForm(event) {
    event.preventDefault();
    alert("Bạn vừa nhập : '" + this.state.textInput + "'");
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmitForm}>
          <input
            value={this.state.textInput}
            onChange={this.handleChangeInputValue}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
