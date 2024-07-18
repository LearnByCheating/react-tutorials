import { useState } from 'react';

const initialState = [ 
  { id: 1, task: 'Learn HTML' },
  { id: 2, task: 'Learn JavaScript' },
  { id: 3, task: 'Learn Node.js' },
  { id: 4, task: 'Learn React' },
];

export default function TodoListDelete() {
  const [todos, setTodos] = useState(initialState);

  function handleClick(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  return (
    <div className="border-bottom pt-2 pb-3 mb-3">
      <h4>Todo List</h4>    
      <ul className="list-group mb-3">
        { todos.map((todo) => (
          <li key={ todo.id } className="list-group-item">
            {todo.task}
            <span className="float-end">
              <button 
                onClick={() => handleClick(todo.id)} 
                className="btn btn-sm btn-secondary mx-2"
              >Delete</button>
            </span>
          </li> 
        ))}
      </ul>
    </div>
  );
}
