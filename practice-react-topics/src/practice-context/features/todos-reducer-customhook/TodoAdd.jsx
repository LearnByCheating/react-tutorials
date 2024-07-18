import { useState } from 'react';
import { useTodos, useTodosDispatch } from './TodosContext.jsx';

export default function TodoAdd() {
  const [task, setTask] = useState('');
  const dispatch = useTodosDispatch();
  const todos = useTodos();
  const nextId = Math.max(...todos.map(todo=>todo.id)) + 1;
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
          dispatch({
            type: 'added',
            id: nextId,
            task: task,
            completed: false,
          });
        }}
        className="input-group-text"
      >Add</button>
    </div>
  )
}
