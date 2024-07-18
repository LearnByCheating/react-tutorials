import TodoAdd from './TodoAdd.jsx';
import TodoItem from './TodoItem.jsx';
import { useTodos } from './TodosContext.jsx';

export default function TodoList() {
  const todos = useTodos();
  return (
    <div className="border-bottom pt-2 pb-3 mb-3">
      <h4>Todo List</h4>   
      <TodoAdd />
      <ul className="list-group">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}
