import { useState } from 'react';

export default function TodoAdd({ onTodoAdd }) {
  const [task, setTask] = useState('');
  return (
    <div className="input-group mb-3">
      <input
        placeholder="Add task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="form-control"
      />
      <button 
        onClick={() => {
          setTask('');
          onTodoAdd(task);
        }}
        className="input-group-text"
      >Add</button>
    </div>
  )
}
