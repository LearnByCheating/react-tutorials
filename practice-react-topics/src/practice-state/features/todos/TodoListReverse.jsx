import { useState } from 'react';

const initialTodos = [ 
  { id: 1, task: 'Learn HTML' },
  { id: 2, task: 'Learn JavaScript' },
  { id: 3, task: 'Learn Node.js' },
  { id: 4, task: 'Learn React' },
];
export default function TodoListReverse() {
  const [todos, setTodos] = useState(initialTodos);

  function handleClick() {
    const nextTodos = [...todos];
    nextTodos.reverse();
    setTodos(nextTodos);
  }

  return (
    <div className="border-bottom pt-2 pb-3 mb-3">
      <h4>Todo List</h4>
      <button onClick={handleClick} className="btn btn-secondary btn-sm mb-2">
        Reverse
      </button>
      <ul className="list-group">
        { todos.map((todo) => (
          <li key={ todo.id } className="list-group-item">{todo.task}</li>
        ))}
      </ul>
    </div>
  );
}
