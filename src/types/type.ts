export type TypeTodo = {
  id: number;
  title: string;
  completed: boolean;
}

export type TypeTodoStore = {
  todos: TypeTodo[] | [];
  addTodo: (todo: TypeTodo) => void;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
  editTodo: (id: number, title: string) => void;
  loadTodos: () => Promise<void>;
  resetStore: () => void;
}