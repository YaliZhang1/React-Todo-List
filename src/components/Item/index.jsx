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
      this.props.updateTodo(id, event.target.checked);
    };
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
            defaultChecked={done}
            onChange={this.handleCheck(id)}
          />
          <span>{name}</span>
        </label>
        <button
          className="btn btn-danger"
          style={{ display: mouse ? "block" : "none" }}
        >
          Delete
        </button>
      </li>
    );
  }
}
