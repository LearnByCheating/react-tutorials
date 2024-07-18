import { useState } from 'react';

export default function TodoItem() {
  const initialState = { id: 1, task: 'Learn React', completed: false };
  const [todo, setTodo] = useState(initialState);

  const handleChange = () => {
    console.log('before setTodo (previous state):', todo);
    setTodo({...todo, completed: !todo.completed});
    console.log('after setTodo (still previous state):', todo);
  }

  return (
    <div className="border-bottom pb-3 mb-3">
      <h4>Todo Item</h4>    
      <div className="form-check my-2">
        <input type="checkbox" id="completed"
          onChange={handleChange} checked={todo.completed}
          className="form-check-input" />
        <label 
          htmlFor="completed" 
          className="form-check-label"
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {todo.task}
        </label>
      </div>
    </div>
  );
}