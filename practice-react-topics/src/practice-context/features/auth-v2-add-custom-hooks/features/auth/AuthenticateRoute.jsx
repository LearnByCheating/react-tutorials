import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

export default function AuthenticateRoute({ children }) {
  const { isLoggedIn } = useAuth().auth;
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return children;
};