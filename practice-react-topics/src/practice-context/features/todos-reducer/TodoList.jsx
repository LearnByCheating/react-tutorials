import { useContext } from 'react';
import { TodosContext } from './TodosContext.jsx';
import TodoAdd from './TodoAdd.jsx';
import TodoItem from './TodoItem.jsx';

export default function TodoList() {
  const todos = useContext(TodosContext);
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
