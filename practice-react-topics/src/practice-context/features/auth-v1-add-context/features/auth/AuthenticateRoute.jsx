import { Navigate } from 'react-router-dom';
import { useContext } from 'react'; // for v2
import { AuthContext } from './AuthContext.jsx'; // for v2
// import { useAuth } from './AuthContext'; // for v3

export default function AuthenticateRoute({ children }) {
  const { isLoggedIn } = useContext(AuthContext).auth; // for v2
  // const { isLoggedIn } = useAuth(); // for v3
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return children;
};