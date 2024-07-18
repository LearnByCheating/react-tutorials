// import { AuthProvider } from './features/auth/AuthContext';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes/index.jsx';

const router = createBrowserRouter(routes);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
