/* 
  To run this practice app first go to src/main.js
  and uncomment only: import PracticeCategory from './practice-react-query/App.jsx';

  Start the api-simulator app to interact with a test API server.
  Open a Terminal window, go to the api-simulator directory and enter: npm run dev
*/

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import routes from './routes/index.jsx';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});
const router = createBrowserRouter(routes);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
