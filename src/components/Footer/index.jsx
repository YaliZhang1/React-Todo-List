import React, { Component } from "react";
import "./index.css";
export default class Footer extends Component {
  handleCheckAll = (event) => {
    this.props.checkAllTodo(event.target.checked); //直接调用（接）在父亲App那里定义好了的函数checkAllTodo.event.target.checked是一个布尔值。
  };
  handleClearAllDone = () => {
    this.props.clearAllDone(); //直接调用（接）在父亲App那里定义好了的函数clearAllDone.
  };
  render() {
    //注意：在render里面一开始就要接住
    const { todos } = this.props; //因为在父亲App组件给Footer这个子组件传了这个数组，所以这里使用const和解构赋值的方式接过来。
    //已完成的个数,reduce这个方法有两个参数：第一个参数pre表示之前的数据，第二次参数todo表示当前的作用item。
    const doneCount = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0); //对pre进行累加，如果当前todo的done为真，则加1，否则加0
    //总数
    const total = todos.length;
    return (
      <div className="todo-footer">
        <label>
          {/* 这里使用checked时必须同时使用onChange，否则全选之后无法全部不选 */}
          <input
            type="checkbox"
            onChange={this.handleCheckAll}
            checked={doneCount === total && total !== 0 ? true : false}
          />
        </label>
        <span>
          {/* {}里面放变量名 */}
          <span>Finished {doneCount}</span>/ all {total}
        </span>
        <button onClick={this.handleClearAllDone} className="btn btn-danger">
          Delete the finished task
        </button>
      </div>
    );
  }
}
