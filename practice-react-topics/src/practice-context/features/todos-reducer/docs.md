Ref: https://react.dev/learn/scaling-up-with-reducer-and-context

Put both the tasks state and the dispatch function into context. This way, any component below TaskApp in the tree can read the tasks and dispatch actions without the repetitive “prop drilling”.

Relevant files: 
- TodosContext.jsx | Context.jsx file: 
  - Creates the context.
  - Creates a Provider component that holds our providers and has a prop for children components.
  - Exports custom useTodos custom hook that returns the TodosContext value.
  - Exports custom useTodosDispatch custom hook that returns the TodosDispatchContext value.
  - Holds the todosReducer function.

- App.jsx | Parent component file that will hold the TodosProvider.

- Files that use the todos variable: TodoList and TodoAdd.
- Files that use the dispatch method: TodoAdd and TodoItem

Steps:
1. Create the context.
2. Put state and dispatch into context.
3. Use context anywhere in the tree.

Create the context.
Create file named TodosContext.jsx
Step 1: Import useReducer, createContext, and useContext at the top of the file: 
`import { useReducer, createContext, useContext } from 'react';`

Step 2: Call useReducer at the top level of your component.
Syntax: const [state, dispatch] = useReducer(reducer, initialState); 
Takes two parameters: (1) the reducer function defined in step 6, (2) the initial state.
Returns array with values: (1) A state variable. Use a descriptive name like counter. (2) The built-in dispatch function.