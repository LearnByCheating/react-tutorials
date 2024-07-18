import { useReducer, createContext, useContext } from 'react';

const TodosContext = createContext(null);
const TodosDispatchContext = createContext(null);

const initialTodos = [
  { id: 1, task: 'Learn HTML', completed: true },
  { id: 2, task: 'Learn JavaScript', completed: true },
  { id: 3, task: 'Learn Node.js', completed: false },
  { id: 4, task: 'Learn React', completed: false },
];

export function TodosProvider({ children }) {
  const [todos, dispatch] = useReducer(todosReducer, initialTodos);
  return (
    <TodosContext.Provider value={todos}>
      <TodosDispatchContext.Provider value={dispatch}>
        {children}
      </TodosDispatchContext.Provider>
    </TodosContext.Provider>
  );
}

export function useTodos() {
  return useContext(TodosContext);
}

export function useTodosDispatch() {
  return useContext(TodosDispatchContext);
}

function todosReducer(todos, action) {
  switch (action.type) {
    case 'added': {
      return [...todos, {
        id: action.id,
        task: action.task,
        completed: action.completed,
      }];
    }
    case 'changed': {
      return todos.map((t) => {
        if (t.id === action.todo.id) {
          return action.todo;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return todos.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
