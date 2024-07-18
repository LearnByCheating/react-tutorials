import { useState } from 'react';

const initialTodos = [
  { id: 1, task: 'Learn HTML', completed: true },
  { id: 2, task: 'Learn JavaScript', completed: true },
  { id: 3, task: 'Learn Node.js', completed: false },
  { id: 4, task: 'Learn React', completed: false },
];

export default function TodoListFilter() {
  const [todos, setTodos] = useState(initialTodos);
  const [filtered, setFiltered] = useState(false);

  function handleClick() {
    if (filtered) {
      setFiltered(false);
      setTodos(initialTodos);
    } else {
      setFiltered(true);
      setTodos(todos.filter((todo) => todo.completed === false));
    }
  }
  return (
    <div className="border-bottom pt-2 pb-3 mb-3">
      <h4>Todo List with Filter</h4>    
      <button onClick={handleClick} className="btn btn-secondary btn-sm mb-2">
        {filtered ? 'Show all' : 'Show only incomplete'}
      </button>
      <ul className="list-group">
        { todos.map((todo) => ( 
          <li key={ todo.id } className="list-group-item">
            { todo.completed && "Completed: "} {todo.task}
          </li>
        ))}
      </ul>
    </div>
  );
}
