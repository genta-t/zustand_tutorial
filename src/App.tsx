import './App.css';
import Actions from './components/Action';
import AddTodoForm from './components/AddTodoForm';
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
              TodoItem
            </>
          )
        })
        }
      </ul>
    </div>
  );
}

export default App;
