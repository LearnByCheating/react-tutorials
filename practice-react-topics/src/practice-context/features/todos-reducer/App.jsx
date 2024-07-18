/* 
  This example is based on the below tutorial from the React website without adding custom hooks:: 
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