/* 
  To run the practice apps for this topic first go to src/main.js
  and uncomment only: import PracticeCategory from './practice-refs/App.jsx';
*/

import Practice from './Counter.jsx';
// import Practice from './Stopwatch.jsx';
// import Practice from './FormFocus.jsx';
// import Practice from './GalleryScroll.jsx';

function App() {
  return (
    <div className="container">
      <h1 className="border-bottom">Practice the React refs hook</h1>
      <Practice />
    </div>
  )
}

export default App
