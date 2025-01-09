import React, { Component } from "react";
import "./index.css";
export default class Item extends Component {
  state = { mouse: false }; //the mouse in or out
  // callback functions of the mouse in or out
  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag });
    };
  };
  // todo callback functions of the checked or cancelled checked
  handleCheck = (id) => {
    return (event) => {
      this.props.updateTodo(id, event.target.checked); //这里的updateTodo是从它的父亲List那里传过来的
      //同样的方法需要使用this.props作为桥梁。拿到之后就可以取到updateTodo这个函数身上的参数id了。
    };
  };
  // delete button callback function
  handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete task")) {
      this.props.deleteTodo(id); //这里的deleteTodo是从它的父亲List那里传过来的。传过来之后直接使用这个在App组件里面写好的deleteTodo这个函数就可以了。
    }
  };
  render() {
    const { id, name, done } = this.props;
    const { mouse } = this.state;
    return (
      <li
        style={{ backgroundColor: mouse ? "#ddd" : "white" }}
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
      >
        <label>
          <input
            type="checkbox"
            checked={done}
            onChange={this.handleCheck(id)}
          />
          <span>{name}</span>
        </label>
        <button
          onClick={() => this.handleDelete(id)}
          className="btn btn-danger"
          style={{ display: mouse ? "block" : "none" }}
        >
          Delete
        </button>
      </li>
    );
  }
}
