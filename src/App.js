import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    //Khởi tạo 1 state là count có giá trị khởi tạo là 1
    this.state = {
      count: 0,
    };
    // Khai báo phương thức để sử dụng từ khoá this
    this.handleCount = this.handleCount.bind(this);
  }
  //Khai báo 1 hàm handleCount để mỗi khi click vào button sẽ gọi hàm này và cập nhật lại count
  handleCount() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  render() {
    return (
      <div>
        {/* Hiển thị số lần bấm */}
        <p>Số lần bấm của bạn là : {this.state.count}</p>
        {/* Gắn sự kiện click button thì gọi hàm handleCount*/}
        <button onClick={this.handleCount}>Click</button>
      </div>
    );
  }
}
