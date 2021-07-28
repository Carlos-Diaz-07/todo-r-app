import React from "react";
//import components
import Todo from "./Todo";

const TodoList = ({ filteredTodos, setTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            setTodos={setTodos}
            filteredTodos={filteredTodos}
            text={todo.text}
            todo={todo}
            key={todo.id}
          />
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
