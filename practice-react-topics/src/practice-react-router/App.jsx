/* 
  To run this practice app first go to src/main.js
  and uncomment only: import PracticeCategory from './practice-react-router/App.jsx';
*/

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes/index.jsx';

const router = createBrowserRouter(routes);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
