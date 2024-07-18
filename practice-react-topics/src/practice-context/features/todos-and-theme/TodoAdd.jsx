import { useState, useContext } from 'react';
import { ThemeContext } from './ThemeContext.jsx';
/*
div.input-group
  input.form-control
  button.input-group-text
*/
export default function TodoAdd({ onTodoAdd }) {
  const [task, setTask] = useState('');
  const {theme} = useContext(ThemeContext);

  return (
    <div className={`input-group mb-3`}>
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
        className={`${theme} input-group-text`}
      >Add</button>
    </div>
  )
}
