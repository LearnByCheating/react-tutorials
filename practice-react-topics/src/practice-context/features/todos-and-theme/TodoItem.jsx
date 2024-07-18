import { useState, useContext } from 'react';
import { ThemeContext } from './ThemeContext.jsx';

export default function TodoItem({ todo, onTodoChange, onTodoDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const {theme} = useContext(ThemeContext);

  return (
    <li className={`${theme} list-group-item`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={
          (e) => onTodoChange({ ...todo, completed: e.target.checked })
        }
        className="form-check-input me-2"
      />

      { isEditing ? (
        <>
          <input
            value={todo.task}
            onChange={(e) => onTodoChange({ ...todo, task: e.target.value })} 
            className="mx-1"
          />
          <button onClick={() => setIsEditing(false)} className="btn btn-sm btn-outline-secondary ms-3 me-1">
            Done
          </button>
        </>
      ) : (
        <>
          {todo.task}
          <button onClick={() => setIsEditing(true)} className="btn btn-sm btn-outline-info ms-3 me-1">
            Edit
          </button>
        </>
      )}

      <button onClick={() => onTodoDelete(todo.id)} className="btn btn-sm btn-outline-danger">
        Delete
      </button>
    </li>
  );
}
