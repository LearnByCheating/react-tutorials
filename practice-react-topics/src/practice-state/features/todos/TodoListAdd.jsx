import { useState } from 'react';

let nextId = 1;
export default function TodoListAdd() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  function handleClick() {
    setTodos([...todos, { id: nextId++, task: task }]);
    setTask('');
  }
  return (
    <div className="border-bottom pb-3 mb-3">
      <h4>Todo List</h4>    
      <ul className="list-group mb-3">
        { todos.map((todo) => { 
          return (
            <li key={ todo.id } className="list-group-item">{todo.task}</li>
          );
        })}
      </ul>
      <div className="input-group mb-3">
        <input
          placeholder="New task" 
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="form-control" 
        />
        <button onClick={handleClick} className="input-group-text">Add</button>
      </div>
    </div>
  );
}
