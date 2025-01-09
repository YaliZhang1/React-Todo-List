import React, { Component } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import "./App.css";

export default class App extends Component {
  //状态在哪里，操作状态的方法就在哪里
  // initialize the state of the component
  state = {
    todos: [
      { id: "1", name: "Buy groceries", done: true },
      { id: "2", name: "Clean the house", done: false },
      { id: "3", name: "Do laundry", done: false },
      { id: "4", name: "Shopping", done: true },
      // Add more todos here
    ],
  };
  // addTodo for add one todo item, the parameter is todoObj
  addTodo = (todoObj) => {
    const { todos } = this.state; //get the old todos
    const newTodos = [todoObj, ...todos]; //add one todo
    //update status
    this.setState({
      todos: newTodos,
    });
  };

  // updateTodo for update one todo Object
  updateTodo = (id, done) => {
    const { todos } = this.state; //get old todos
    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id)
        //if id are the same, update the status of done to the new done status
        return {
          ...todoObj, //copy the old date
          done, //only update the status of done to the new done status, here is done == done, but we can omit the second parameter done here.
        };
      else return todoObj;
    });
    this.setState({ todos: newTodos }); //update the status
  };
  // deleteTodo for delete one todo item, the parameter is id
  deleteTodo = (id, name) => {
    const { todos } = this.state; //get old todos
    const newTodos = todos.filter((todoObj) => todoObj.id !== id); //delete one todo

    this.setState({ todos: newTodos }); //update the status
  };
  // checkAllTodo for check all
  checkAllTodo = (done) => {
    const { todos } = this.state;
    const newTodos = todos.map((todoObj) => {
      return { ...todoObj, done };
    });
    this.setState({ todos: newTodos });
  };
  // clearAllDone for clear all done todo item
  clearAllDone = () => {
    const { todos } = this.state;
    const newTodos = todos.filter((todoObj) => !todoObj.done);
    this.setState({ todos: newTodos });
  };
  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          {/* App有三个孩子，下面是它分别给它的三个孩子传数组或者函数，让孩子们可以在自己的组件里面使用 */}
          <Header addTodo={this.addTodo} />
          <List
            todos={todos} // App给List传了一个数组todos
            updateTodo={this.updateTodo} //App给List传了一个函数updateTodo
            deleteTodo={this.deleteTodo} //App给List传了一个函数deleteTodo
          />
          <Footer
            todos={todos}
            checkAllTodo={this.checkAllTodo}
            clearAllDone={this.clearAllDone}
          />
          {/* Add your todo components here */}
          {/* <Todo /> */}
        </div>
      </div>
    );
  }
}
