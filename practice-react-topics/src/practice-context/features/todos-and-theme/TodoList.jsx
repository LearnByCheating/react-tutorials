import { useState, useContext } from 'react';
import TodoAdd from './TodoAdd.jsx';
import TodoItem from './TodoItem.jsx';
import { ThemeContext } from './ThemeContext.jsx';

const initialTodos = [
  { id: 1, task: 'Learn HTML', completed: true },
  { id: 2, task: 'Learn JavaScript', completed: true },
  { id: 3, task: 'Learn Node.js', completed: false },
  { id: 4, task: 'Learn React', completed: false },
];
let nextId = initialTodos.length + 1;

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos);
  const {theme} = useContext(ThemeContext);

  function handleTodoAdd(task) {
    setTodos([
      ...todos,
      { id: nextId++, task: task, completed: false }
    ]);
  }

  function handleTodoChange(nextTodo) {
    setTodos(todos.map(todo => {
      if (todo.id === nextTodo.id) {
        return nextTodo;
      } else {
        return todo;
      }
    }));
  }

  function handleTodoDelete(todoId) {
    setTodos(
      todos.filter(t => t.id !== todoId)
    );
  }

  return (
    <div className={theme + ' container'}>
      <h4 className="my-2">Todo List</h4>   
      <TodoAdd
        onTodoAdd={handleTodoAdd}
      />
      <ul className="list-group pb-2">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onTodoChange={handleTodoChange}
            onTodoDelete={handleTodoDelete}
          />
        ))}
      </ul>
    </div>
  );
}
