import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { TypeTodo, TypeTodoStore } from "../types/type";

const useTodoStore = create<TypeTodoStore>()(
  devtools(
    persist(
      (set) => ({
        todos: [],
        loadTodos: async () => {
          const respose = await fetch(
            "https://jsonplaceholder.typicode.com/todos"
          );
          const data: TypeTodo[] = await respose.json();
          set({ todos: data });
        },
        resetStore: () => set({ todos: [] }),
        addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
        removeTodo: (id) => 
          set((state) => ({
            todos: state.todos.filter((todo) => todo.id !== id),
          })),
        toggleTodo: (id) => 
          set((state) => ({
            todos: state.todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed} : todo),
          })),
        editTodo: (id, title) => 
          set((state) => ({
            todos: state.todos.map((todo) => todo.id === id ? { ...todo, title} : todo),
          })),
      }),
      {
        name: "todo-store",
      }
    )
  )
)

export default useTodoStore;

