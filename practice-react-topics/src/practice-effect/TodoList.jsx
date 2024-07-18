import { useState, useEffect } from 'react';

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await res.json();
        setTodos(data);
      } catch(err) {
        console.error(err);
      }
    }        
    getTodos();
  }, []);

  return (
    <div className="border-bottom pt-2 pb-3 mb-3">
      <h4>Todo List from external API with useEffect</h4>
      <table className="table">
        <thead>
          <tr><th>id</th><th>Task</th><th>Status</th></tr>
        </thead>
        <tbody> 
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.completed && 'Completed'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
