import { useState } from 'react';

const initialTodos = [
  { id: 1, task: 'Learn HTML' },
  { id: 2, task: 'Learn JavaScript' },
  { id: 3, task: 'Learn Node.js' },
  { id: 4, task: 'Learn React' },
];

export default function TodoList() {
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
          <TodoItem
            key={todo.id}
            todo={todo}
            onTodoChange={handleChange}
          />
        ))}
      </ul>
    </div>
  );
}

function TodoItem({ todo, onTodoChange }) {
  const [isEditing, setIsEditing] = useState(false);
  if (isEditing) {
    return (
      <li className="list-group-item">
        <input
          value={todo.task}
          onChange={(e) => onTodoChange(e, todo.id)}
        />
        <button 
          onClick={() => setIsEditing(false)} 
          className="btn btn-sm btn-secondary ms-2 me-1"
        >
          Done
        </button>
      </li>
    )
  } else {
    return (
      <li className="list-group-item">
        {todo.task}
        <span className="float-end">
          <button
            onClick={() => setIsEditing(true)} 
            className="btn btn-sm btn-info ms-3 me-1"
          >Edit</button>
        </span>
      </li>
    )
  }
}
