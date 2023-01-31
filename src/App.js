import React, { Component } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem.js";
import "./App.css";
class App extends Component {
  state = {
    Todos: [],
  };
  editTodoFromState = (index, newText) => {
    const newTodos = this.state.Todos.map((todo, i) => {
      if (index === i) {
        return {
          ...todo,
          text: newText,
        };
      }
      return todo;
    });
    this.setState({
      Todos: newTodos,
    });
  };
  deleteTodoFromState = (index) => {
    const newTodos = this.state.Todos.filter((todo, i) => {
      return index === i ? false : true;
    });
    this.setState({
      Todos: newTodos,
    });
  };

  toggleComplete = (index) => {
    console.log(index);
    const newTodos = this.state.Todos.map((todo, i) => {
      if (index === i) {
        console.log(index);
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });

    this.setState({
      Todos: [...newTodos],
    });
  };

  addTodosToState = (a) => {
    // console.log(a);
    const newTodos = {
      text: a,
      completed: false,
    };

    this.setState({
      Todos: [...this.state.Todos, newTodos],
    });

    console.log(this.state.Todos);
  };
  render() {
    return (
      <div className="App">
        <h2 className="head">Add Todo in the List</h2>
        <AddTodo addTodosToState={this.addTodosToState} />
        {this.state.Todos.map((todo, index) => {
          return (
            <TodoItem
              editTodoFromState={this.editTodoFromState}
              deleteTodoFromState={this.deleteTodoFromState}
              toggleComplete={this.toggleComplete}
              index={index}
              key={index}
              todo={todo}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
