import { useState } from 'react';

const initialState = [
  { id: 1, task: 'Learn HTML', completed: true },
  { id: 2, task: 'Learn JavaScript', completed: true },
  { id: 3, task: 'Learn Node.js', completed: false },
  { id: 4, task: 'Learn React', completed: false },
];

export default function TodoList() {
  const [todos, setTodos] = useState(initialState);  
  const [allCompleted, setAllCompleted] = useState(false);

  function handleClick() {
    const nextTodos = todos.map((todo) => {
      if (todo.completed === allCompleted) {
        return {...todo, completed: !allCompleted }
      } else {
        return todo;
      }
    })
    setTodos(nextTodos);
    setAllCompleted(!allCompleted);    
  }
  return (
    <div className="border-bottom mt-2 pb-3 mb-3">
      <h4>Todo List</h4>
      <button onClick={handleClick} className="btn btn-sm btn-secondary mx-2">
        { 'Mark All ' + (allCompleted ? 'Uncompleted' : 'Completed')}
      </button>  
      <ul>
        { todos.map((todo) => (
          <li 
            key={ todo.id } 
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.task}
          </li>
        ))}
      </ul>
    </div>
  );
}
