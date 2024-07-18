/* 
  This example is based on the below app from the React website including adding custom hooks: 
  https://react.dev/learn/scaling-up-with-reducer-and-context
*/
import TodoList from './TodoList';
import { TodosProvider } from './TodosContext.jsx';

function App() {
  return (
    <TodosProvider>
      <TodoList />
    </TodosProvider>
  );
}

export default App