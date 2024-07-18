import { useState } from 'react';

const initialTodos = [ 
  { id: 1, task: 'Learn HTML' },
  { id: 2, task: 'Learn JavaScript' },
  { id: 3, task: 'Learn Node.js' },
  { id: 4, task: 'Learn React' },
];

export default function TodoListUpdate() {
  const [todos, setTodos] = useState(initialTodos);

  function handleChange(e, id) {
    const nextTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: e.target.value}
      } else {
        return todo;
      }
    });
    setTodos(nextTodos);
  }

  return (
    <div className="border-bottom pb-3 mb-3">
      <h4>Todo List</h4>    
      <ul className="list-group mb-3">
        { todos.map((todo) => (
          <input
            key={ todo.id }
            className="list-group-item"
            value={todo.task}
            onChange={(e) => handleChange(e, todo.id)}
          />
        ))}
      </ul>
    </div>
  );
}
