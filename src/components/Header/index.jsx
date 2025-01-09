import React, { Component } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import "./index.css";

export default class Header extends Component {
  //对接收的props进行：类型以及必要性的限制（需要通过 npm add prop-types安装先）
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  };
  //键盘事件的回调
  handleKeyUp = (event) => {
    //解构赋值获取keyCode,target
    const { keyCode, target } = event; //解构赋值的意思是，从event身上拿到keyCode,target.这样可以简化后续代码，不需要每次都写成event.keyCode和event.target.这两种写法的效果是一样的。
    //如果按键是Enter
    if (keyCode !== 13) return; //因为14行已经解构赋值了，所以这里可以直接用keyCode了。
    //添加的todo名字不能为空
    if (target.value.trim() === "") {
      //因为14行已经解构赋值了，所以这里可以直接用target了。
      alert("Task name cannot be empty!");
      return;
    }
    //准备好一个todo对象
    const todoObj = { id: nanoid(), name: target.value, done: false };
    //将todoObj传递给App（调一下之前在父亲组件里面定义的addTodo这个函数，就是实现子给父传数据）
    this.props.addTodo(todoObj);
    //清空输入框
    target.value = "";
  };
  render() {
    return (
      <div className="todo-header">
        <input
          onKeyUp={this.handleKeyUp}
          type="text"
          placeholder="Please enter your task name, press Enter to confirm"
        />
      </div>
    );
  }
}
