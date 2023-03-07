import React, { Component } from "react";

export default class Button extends Component {
  render() {
    return (
      //lấy ra giá trị các props đã truyền ở component App và sử dụng
      <button
        style={{ background: this.props.background, color: this.props.color }}
      >
        {this.props.text}
      </button>
    );
  }
}
