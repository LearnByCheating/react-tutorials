import { useState } from 'react';

const details = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed arcu id nisl fringilla pharetra."
const todos = [
  { id: 1, task: 'Beginning HTML', details },
  { id: 2, task: 'Beginning JavaScript', details },
  { id: 3, task: 'Intermediate JavaScript', details },
  { id: 4, task: 'Beginning React', details },
  { id: 5, task: 'Intermediate React', details },
];

export default function TodoListSearch() {
  const [query, setQuery] = useState('');

  const filteredTodos = todos.filter((todo) => {
    return todo.task.split(' ').some((word) =>
      word.toLowerCase().startsWith(query.toLowerCase())
    )
  });

  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <div className="pt-2 mb-3">
      <h4>Search Todo List</h4>
      <label>
        Search for word: 
        <input
          value={query}
          onChange={handleChange}
          className="ms-2"
        />
      </label>

      <hr />
      <table className="table">
        <thead>
          <tr><th width="200">Task</th><th>Details</th></tr>
        </thead>
        <tbody> 
          {filteredTodos.map((todo) => (
            <tr key={todo.id}>
              <td width="200">{todo.task}</td>
              <td>{todo.details}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
