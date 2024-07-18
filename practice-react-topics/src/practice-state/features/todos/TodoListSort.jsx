import { useState } from 'react';

const initialTodos = [ 
  { id: 1, task: 'Learn React' },  
  { id: 2, task: 'Learn HTML' },
  { id: 3, task: 'Learn Node.js' },
  { id: 4, task: 'Learn JavaScript' },
];
export default function TodoListSort() {
  const [todos, setTodos] = useState(initialTodos);

  function handleSortById() {
    const nextTodos = [...todos];
    nextTodos.sort((a, b) => a.id - b.id);
    setTodos(nextTodos);
  }
  function handleSortByTask() {
    const nextTodos = [...todos];
    nextTodos.sort((a, b) => a.task.localeCompare(b.task, 'en', { sensitivity: 'base' }));
    setTodos(nextTodos);
  }

  return (
    <div className="border-bottom pt-2 pb-3 mb-3">
      <h4>Todo List</h4>
      <button onClick={handleSortById} className="btn btn-secondary btn-sm me-2">
        Sort by ID
      </button>
      <button onClick={handleSortByTask} className="btn btn-secondary btn-sm">
        Sort by Task
      </button>
      <ul className="list-group mt-2">
        { todos.map((todo) => (
          <li key={ todo.id } className="list-group-item">{todo.id}: {todo.task}</li>
        ))}
      </ul>
    </div>
  );
}
