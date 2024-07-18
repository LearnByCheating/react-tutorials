import { useState } from 'react';
import { useTodosDispatch } from './TodosContext.jsx';

export default function TodoItem({ todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useTodosDispatch();

  return (
    <li className="list-group-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={(e) => {
          dispatch({
            type: 'changed',
            todo: { ...todo, completed: e.target.checked },
          });
        }}
        className="form-check-input me-2"
      />

      { isEditing ? (
        <>
          <input
            value={todo.task}
            onChange={(e) => {
              dispatch({
                type: 'changed',
                todo: { ...todo, task: e.target.value },
              });
            }}
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

      <button 
        onClick={() => {
          dispatch({
            type: 'deleted',
            id: todo.id,
          })
        }}
        className="btn btn-sm btn-outline-danger"
      >
        Delete
      </button>
    </li>
  );
}
