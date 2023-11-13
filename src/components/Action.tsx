import React from "react";
import useTodoStore  from "../store/todo.store";

const Actions = () => {
  const { loadTodos, resetStore } = useTodoStore((state) => state);
  return (
    <>
      <button onClick={loadTodos}>Load Todo</button>
      <button onClick={resetStore}>Reset Store</button>
    </>
  )
}

export default Actions;