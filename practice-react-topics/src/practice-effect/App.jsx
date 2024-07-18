/* 
  To run the practice apps for this topic first go to src/main.js
  and uncomment only: import PracticeCategory from './practice-effect/App.jsx';
*/

/* The below are from the React website with some modifications: */ 
// import Practice from './Counter';
// import Practice from './OnlineStatus';
// import Practice from './OnlineStatusCustomHook';
// import Practice from './Timer';

/* The below are directly from the CheatSheet tutorials: */
import Practice from './TodoList';
// import Practice from './TodoListWithExpressServer';
// import Practice from './ProductList';
// import Practice from './GalleryCarousel';

function App() {

  return (
    <div className="container">
      <h1 className="border-bottom">Practice React Effects</h1>
      <Practice />
    </div>
  );
}

export default App
