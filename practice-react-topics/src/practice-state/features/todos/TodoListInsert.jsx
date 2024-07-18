import { useState } from 'react';
const initialTodos = [ 
  { id: 1, task: 'Learn HTML' },
  { id: 2, task: 'Learn JavaScript' },
  { id: 3, task: 'Learn Node.js' },
  { id: 4, task: 'Learn React' },
];
// Get the highest id value and add 1 to it.
let nextId = Math.max(...initialTodos.map(todo=>todo.id)) + 1;

export default function TodoListInsert() {
  const [task, setTask] = useState('');
  const [position, setPosition] = useState(initialTodos.length);
  const [todos, setTodos] = useState(initialTodos);

  function handleSubmit(e) {
    e.preventDefault();
    const nextTodos = [
      // Items before the insertion point:
      ...todos.slice(0, position),
      // New item:
      { id: nextId++, task: task },
      // Items after the insertion point:
      ...todos.slice(position)
    ];
    setTodos(nextTodos);
    setTask('');
    setPosition(todos.length + 1);
  }

  return (
    <div className="border-bottom pt-2 pb-3 mb-3">
      <h4>Todo List</h4>    
      <ul className="list-group mb-3">
        { todos.map((todo, i) => (
          <li key={ todo.id } className="list-group-item">Position {i}: {todo.task}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="border-top pt-2">
        <label htmlFor="task">New task</label>     
        <input
          id="task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="form-control mb-2"
        />
        <label htmlFor="position">Insert at position</label>
        <input
          id="position"
          type="number"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          className="form-control mb-2" 
        />
        <button className="btn btn-primary btn-sm">Insert</button>
      </form>
    </div>
  );
}
