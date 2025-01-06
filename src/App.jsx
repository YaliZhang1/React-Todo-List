import React, { Component } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import "./App.css";

export default class App extends Component {
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
  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header />
          <List todos={todos} />
          <Footer />
          {/* Add your todo components here */}
          {/* <Todo /> */}
        </div>
      </div>
    );
  }
}
