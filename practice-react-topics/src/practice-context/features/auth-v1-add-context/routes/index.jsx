import Layout from '../components/Layout.jsx';
import Home from '../Home.jsx';
import Unprotected from '../Unprotected.jsx';
import Protected from '../Protected.jsx';
import Login from '../features/auth/Login.jsx';
import Profile from '../features/auth/Profile.jsx';
import AuthenticateRoute from '../features/auth/AuthenticateRoute';


const routes = [{
  path: '/',
  element: <Layout />,
  children: [
    { index: true, element: <Home /> },
    { path: 'login', element: <Login /> },
    { path: 'profile/:id', element: <Profile /> },
    { path: 'unprotected', element: <Unprotected /> },
    { path: 'protected', element: <AuthenticateRoute><Protected /></AuthenticateRoute>},
  ],
}];

export default routes;
