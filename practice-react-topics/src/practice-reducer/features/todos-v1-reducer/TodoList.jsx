import { useReducer } from 'react';
import TodoAdd from './TodoAdd.jsx';
import TodoItem from './TodoItem.jsx';
import todosReducer from './todosReducer.js';

const initialTodos = [
  { id: 1, task: 'Learn HTML', completed: true },
  { id: 2, task: 'Learn JavaScript', completed: true },
  { id: 3, task: 'Learn Node.js', completed: false },
  { id: 4, task: 'Learn React', completed: false },
];
let nextId = initialTodos.length + 1;

export default function TodoList() {
  const [todos, dispatch] = useReducer(todosReducer, initialTodos);

  function handleTodoAdd(task) {
    dispatch({
      type: 'added',
      id: nextId++,
      task: task,
      completed: false,
    });
  }

  function handleTodoChange(nextTodo) {
    dispatch({
      type: 'changed',
      todo: nextTodo,
    });
  }

  function handleTodoDelete(todoId) {
    dispatch({
      type: 'deleted',
      id: todoId,
    });
  }

  return (
    <div className="border-bottom pt-2 pb-3 mb-3">
      <h4>Todo List</h4>   
      <TodoAdd
        onTodoAdd={handleTodoAdd}
      />
      <ul className="list-group">
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
