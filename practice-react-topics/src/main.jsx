import React from 'react';
import ReactDOM from 'react-dom/client';
// import PracticeCategory from './practice-props/App.jsx';
import PracticeCategory from './practice-state/App.jsx';
// import PracticeCategory from './practice-reducer/App.jsx';
// import PracticeCategory from './practice-effect/App.jsx';
// import PracticeCategory from './practice-context/App.jsx';
// import PracticeCategory from './practice-refs/App.jsx';
// import PracticeCategory from './practice-react-router/App.jsx';
// import PracticeCategory from './practice-react-query/App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PracticeCategory />
  </React.StrictMode>,
);

// Optionally remove StrictMode so prevent double rendering:
/* ReactDOM.createRoot(document.getElementById('root')).render(
    <PracticeCategory />
); */
