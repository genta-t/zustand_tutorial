import React, { useState } from "react";
import useTodoStore  from "../store/todo.store";

const AddTodoForm = () => {
  const [ value, setValue ] = useState<string>("");
  const { addTodo, todos } = useTodoStore((state) => state);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    addTodo({
      id: todos.length + 1,
      title: value,
      completed: false,
    });
    setValue("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit">Add Todo</button>
        </div>
      </form>
    </>
  )
}

export default AddTodoForm;