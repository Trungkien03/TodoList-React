import { useEffect, useState } from "react";
import "./App.css";
import { NewTodoForm } from "./components/NewTodoForm";
import { TodoList } from "./components/TodoList";

export const App = () => {
  const [toDos, setToDos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if(localValue == null) return [];
    
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS",JSON.stringify(toDos))
  },[toDos])

  function addTodo(title){
    setToDos((currentToDos) => {
      return [
        ...currentToDos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  function toggleTodo(id, completed) {
    setToDos((currentToDos) => {
      return currentToDos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setToDos((currentToDos) => {
      return currentToDos.filter((todo) => todo.id !== id);
    });
  }
  return (
    <div>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList toDos={toDos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </div>
  );
};
