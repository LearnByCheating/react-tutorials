import { useState, useContext } from 'react';
import { TodosContext, TodosDispatchContext } from './TodosContext.jsx';

export default function TodoAdd() {
  const [task, setTask] = useState('');
  const dispatch = useContext(TodosDispatchContext);
  const todos = useContext(TodosContext);
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
