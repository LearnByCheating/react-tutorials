/* 
  To run the practice apps for this topic first go to src/main.js
  and uncomment only: import PracticeCategory from './practice-reducer/App.jsx';
*/

import Practice from './Counter-v0-state.jsx';
// import Practice from './Counter-v1-reducer.jsx';
// import Practice from './features/todos-v0-state/TodoList.jsx';
// import Practice from './features/todos-v1-reducer/TodoList.jsx';

function App() {
  return (
    <div className="container">
      <h1 className="border-bottom">Practice React reducers</h1>
      <Practice />
    </div>
  )
}

export default App
