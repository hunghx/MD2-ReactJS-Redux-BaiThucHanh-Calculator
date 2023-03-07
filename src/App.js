import React, { Component } from "react";
export default class App extends Component {
  constructor(props) {
    super(props);
    //Khởi tạo các state
    this.state = {
      number: "",
      array: [],
      total: 0,
    };
    // Khai báo phương thức để sử dụng từ khoá this
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }
  //Khởi tạo phương thức quản lí sự thay đổi của ô input
  handleChangeInput(event) {
    this.setState({
      number: +event.target.value,
    });
  }
  // khởi tạo phương thức khi submit form thì hiển thị kết quả
  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      array: [...this.state.array, this.state.number],
      total: this.state.total + this.state.number,
      number: "",
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="number"
            value={this.state.number}
            onChange={this.handleChangeInput}
          />
          <button type="submit">Add</button>
        </form>
        <span>Kết quả:</span>
        <div style={{ color: "red" }}>
          {this.state.array.join("+") + "=" + this.state.total}
        </div>
      </div>
    );
  }
}
