import React, { Component } from "react";
export default class App extends Component {
  constructor(props) {
    super(props);
    //Khởi tạo các state
    this.state = {
      color: "black",
      isShow: true,
      fontSize: 12,
      content: "helo babi :v!",
    };
    // Khai báo phương thức để sử dụng từ khoá this
    this.handleToggle = this.handleToggle.bind(this);
    this.handleChangeBackground = this.handleChangeBackground.bind(this);
  }
  // Phương thức handleToggle sẽ thay đổi giá trị state isShow từ đó ẩn hiện các phần tử
  handleToggle() {
    this.setState({
      isShow: !this.state.isShow,
    });
  }
  //Phương thức handleChangeBackground để thay đổi màu sắc với cỡ chữ của đoạn văn bản
  handleChangeBackground() {
    this.setState({
      color: this.state.color === "black" ? "pink" : "black",
      fontSize: this.state.fontSize === 12 ? 14 : 12,
      content:
        this.state.content === "helo babi :v!"
          ? "U look so beautiful, honey!"
          : "helo babi :v!",
    });
  }
  render() {
    return (
      <div>
        {/*Sử dụng toán tử 3 ngôi để ẩn hiện đoạn văn và nút thay đổi định dạng của đoạn văn*/}
        {this.state.isShow ? (
          <>
            <p
              style={{ color: this.state.color, fontSize: this.state.fontSize }}
            >
              {this.state.content}
            </p>
            <button onClick={this.handleChangeBackground}>Change</button>
          </>
        ) : (
          ""
        )}
        <button onClick={this.handleToggle}>Toggle</button>
      </div>
    );
  }
}
