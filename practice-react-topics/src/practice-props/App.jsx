/* 
  To run the practice apps for this topic first go to src/main.js
  and uncomment only: import PracticeCategory from './practice-props/App.jsx';
*/

import Greeting from './Greeting.jsx';
import TodoList from './TodoList.jsx';
import TodoListFiltered from './TodoListFiltered.jsx';
import TodoListProps from './TodoListProps.jsx';

function App() {
  return (
    <div className="container">
      <h1 className="border-bottom">Practice React Components and Props</h1>
      <Greeting username="Joey" />
      {/* <TodoList /> */}
      {/* <TodoListFiltered /> */}
      {/* <TodoListProps /> */}
    </div>
  )
}

export default App
