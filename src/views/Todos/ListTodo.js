import React from "react";
import "./ListTodo.scss";
import AddTodo from "./AddTodo";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
class ListTodo extends React.Component {
  state = {
    listTodos: [
      { id: "todo1", title: "Doing Homework" },
      { id: "todo2", title: "Play games" },
      { id: "todo3", title: "fix bug" },
    ],
    editTodo: {},
  };
  addNewTodo = (todo) => {
    this.setState({
      listTodos: [...this.state.listTodos, todo],
    });
    toast.success("Add Success!");
  };
  deleteTodo = (todo) => {
    let currentTodo = this.state.listTodos;
    currentTodo = currentTodo.filter((item) => item.id !== todo.id);
    this.setState({ listTodos: currentTodo });
    toast.success("Delete Success!");
  };
  editTodo = (todo) => {
    let { listTodos, editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    if (!isEmptyObj && editTodo.id === todo.id) {
      let x = listTodos.map((item) => {
        if (item.id === todo.id) {
          item.title = editTodo.title;
        }
        return item;
      });
      this.setState({ editTodo: "", listTodos: x });
      toast.success("Update todo succeed!");
      return;
    }
    this.setState({ editTodo: todo });
  };
  handleChange = (event) => {
    let editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.title = event.target.value;

    this.setState({ editTodo: editTodoCopy });
  };
  render() {
    let { listTodos, editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    return (
      <div className="list-toto-container">
        <AddTodo addNewTodo={this.addNewTodo} />
        <div className="list-todo-content">
          {listTodos &&
            listTodos.length > 0 &&
            listTodos.map((item, index) => {
              return (
                <div className="TodoChild" key={item.id}>
                  {isEmptyObj ? (
                    <span>
                      {index + 1} - {item.title}{" "}
                    </span>
                  ) : (
                    <>
                      {item.id === editTodo.id ? (
                        <span>
                          {index + 1} -
                          <input
                            value={editTodo.title}
                            onChange={(event) => this.handleChange(event)}
                          />
                        </span>
                      ) : (
                        <span>
                          {index + 1} - {item.title}{" "}
                        </span>
                      )}
                    </>
                  )}
                  <button
                    className="Edit"
                    onClick={() => {
                      this.editTodo(item);
                    }}
                  >
                    {!isEmptyObj && editTodo.id === item.id ? "Save" : "Edit"}
                  </button>
                  <button
                    className="Delete"
                    onClick={() => this.deleteTodo(item)}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default ListTodo;
