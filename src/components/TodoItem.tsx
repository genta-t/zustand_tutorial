import React from "react";
import useTodoStore  from "../store/todo.store";
import { TypeTodoItemProps } from "../types/type";


const TodoItem = ({ todo }: TypeTodoItemProps) => {
  const { editTodo, removeTodo, toggleTodo } = useTodoStore((state) => state);

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        readOnly
        onClick={() => toggleTodo(todo.id)}
      />
      <input 
        value={todo.title}
        onChange={(e) => editTodo(todo.id, e.target.value)}
      />
      <button
        onClick={() => removeTodo(todo.id)}
      >
        Delete
      </button>
    </li>
  )
}

export default TodoItem;