import React, { Component } from "react";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "Check todo" },
      { id: 2, content: "make todo" },
    ],
  };
  deleteTodo = (id) => {
    console.log(id);
    const newTodo = this.state.todos.filter((tdo) => {
      return tdo.id !== id;
    });
    this.setState({ todos: newTodo });
  };

  addTodo = (newtodoState) => {
    console.log("Parent Todo State", newtodoState);

    if (newtodoState.content == "") {
      return null;
    } else {
      newtodoState.id = Math.random();
      let combineTodo = [...this.state.todos, newtodoState];
      console.log("combine State", combineTodo);
      this.setState({
        todos: combineTodo,
      });
    }
  };
  render() {
    return (
      <div className="App container">
        <h1 className="center blue-text">Todos'</h1>
        <Todos todoss={this.state.todos} dTodo={this.deleteTodo} />
        <AddTodo tdo={this.addTodo} />
      </div>
    );
  }
}

export default App;
