import './App.css';
import Actions from './components/Action';
import AddTodoForm from './components/AddTodoForm';
import TodoItem from './components/TodoItem';
import useTodoStore from './store/todo.store';

const App = () => {
  const { todos } = useTodoStore((state) => state);

  return (
    <div className='container'>
      <AddTodoForm />
      <Actions />
      <ul>
        {todos.length < 1
        ? "No Todos"
        : todos.map((todo) => {
          return(
            <>
              <TodoItem
                key={todo.id}
                todo={todo}
              />
            </>
          )
        })
        }
      </ul>
    </div>
  );
}

export default App;
