import React from "react";
class AddTodo extends React.Component {
  state = {
    todotext: "",
  };
  changeTodotext = (event) => {
    this.setState({
      todotext: event.target.value,
    });
  };
  submitHandler = (event) => {
    //   console.log(this.state.todotext)
    event.preventDefault();
    if (this.state.todotext === "") {
      return;
    }
    this.props.addTodosToState(this.state.todotext);
    this.setState({
      todotext: "",
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input
            className="Input"
            placeholder="Enter task"
            type="text"
            onChange={this.changeTodotext}
            value={this.state.todotext}
          ></input>
          <button className="Button" type="submit">
            Add Todo
          </button>
        </form>
      </div>
    );
  }
}

export default AddTodo;
