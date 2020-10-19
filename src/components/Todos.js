import React from "react";

function Todos({ todoss, dTodo }) {
  let todoList = todoss.length ? (
    todoss.map((todo) => {
      return (
        <div key={todo.id} className="collection-item">
          <span>{todo.content}</span>
          <button
            onClick={() => {
              dTodo(todo.id);
            }}
          >
            Delete
          </button>
        </div>
      );
    })
  ) : (
    <h3 className="center">You don't have any todos.</h3>
  );
  return <div className="collection">{todoList}</div>;
}

export default Todos;
