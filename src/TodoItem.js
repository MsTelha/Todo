import React from "react";
export default class TodoItem extends React.Component {
  state = {
    isEditing: false,
  };
  editTodoSubmitHandler = (event) => {
    event.preventDefault();
    this.props.editTodoFromState(this.props.index, this.newText.value);
    this.toggleEditing();
  };
  toggleEditing = () => {
    this.setState({
      isEditing: !this.state.isEditing,
    });
  };
  deleteTodo = () => {
    this.props.deleteTodoFromState(this.props.index);
  };
  clickHandler = () => {
    this.props.toggleComplete(this.props.index);
  };
  render() {
    const { todo } = this.props;
    if (this.state.isEditing) {
      return (
        <div>
          <form className="List" onSubmit={this.editTodoSubmitHandler}>
            <input
              id="EditInput"
              type="text"
              defaultValue={todo.text}
              ref={(node) => {
                this.newText = node;
              }}
            ></input>
            <span>
              <button
                className="edt-btn"
                style={{ backgroundColor: "#008CBA" }}
                type="submit"
              >
                Save
              </button>
              <button
                className="dlt-btn"
                style={{ backgroundColor: "green" }}
                onClick={this.toggleEditing}
              >
                Cancel
              </button>
            </span>
          </form>
        </div>
      );
    }
    return (
      <div
        className={todo.completed ? "completed" : ""}
        style={{ cursor: "pointer" }}
      >
        <div className="List">
          <span onClick={this.clickHandler}>{todo.text} </span>
          <span>
            <button className="edt-btn" onClick={this.toggleEditing}>
              Edit
            </button>
            <button className="dlt-btn" onClick={this.deleteTodo}>
              Delete
            </button>
          </span>
        </div>
      </div>
    );
  }
}
