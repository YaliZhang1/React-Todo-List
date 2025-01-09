import React, { Component } from "react";
import PropTypes from "prop-types";
import Item from "../Item";
import "./index.css";

export default class List extends Component {
  //对接收的props进行：类型以及必要性的限制（需要通过 npm add prop-types安装先）
  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired, //需要传入一个函数，当任务状态发生变化时，该函数将被调用
    deleteTodo: PropTypes.func.isRequired, //需要传入一个函数，当任务被删除时，该函数将被调用
  };
  render() {
    // destructuring props to make them easier to use.从父亲那里接过来的数组todos，函数 updateTodo, deleteTodo可以直接通过解构赋值出来之后使用。
    //这里使用this.props来完成父亲传孩子的过程
    const { todos, updateTodo, deleteTodo } = this.props; //todos是自己用。updateTodo,deleteTodo是继续往下传，自己在这里不用。
    return (
      <ul className="todo-main">
        {todos.map((todo) => {
          //todos自己用。
          return (
            <Item
              key={todo.id}
              {...todo}
              updateTodo={updateTodo} //updateTodo,deleteTodo继续往下传，所以按照同样的方法传递给List的儿子Item。
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
    );
  }
}
