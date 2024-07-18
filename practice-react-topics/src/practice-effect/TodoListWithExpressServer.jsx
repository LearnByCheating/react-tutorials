/* 
  Start the express server first to interact with a test API server.
  Open a Terminal window, go to the api-simulator directory and enter: npm run dev
*/

import { useState, useEffect } from 'react';

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getTodos = async () => {
      setIsLoading(true);
      try {
        const res = await fetch('http://localhost:4000/api/todos');
        const data = await res.json();
        if (!res.ok) throw new Error('Server error');
        setTodos(data);
      } catch(err) {
        console.error('Error log:', err.message);
        setError(true);
      }
      setIsLoading(false);
    }        
    getTodos();
  }, []);

  return (
    <div className="border-bottom pt-2 pb-3 mb-3">
      <h4>Todo List</h4>
      { error && <p className="text-danger fw-bold border border-danger px-2 py-1 rounded">Sorry, there was an error.</p>}
      { isLoading && <p className="info">Loading...</p> }
      <table className="table">
        <thead>
          <tr><th>id</th><th>Task</th><th>Status</th></tr>
        </thead>
        <tbody> 
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.task}</td>
              <td>{todo.completed && 'Completed'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
