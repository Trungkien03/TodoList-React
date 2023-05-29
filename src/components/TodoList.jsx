import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ toDos, toggleTodo, deleteTodo }) => {
  return (
    <ul className="list">
      {toDos.length === 0 && "No ToDos"}
      {toDos.map((todo) => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo = {toggleTodo}
            deleteTodo = {deleteTodo}
          />
        );
      })}
    </ul>
  );
};
