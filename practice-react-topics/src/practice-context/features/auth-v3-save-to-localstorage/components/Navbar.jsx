import { NavLink } from 'react-router-dom';
import { useAuth } from '../features/auth/AuthContext';
import Logout from '../features/auth/Logout';

export default function Navbar() {
  const { isLoggedIn, currentUser } = useAuth().auth;
  
  return(
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-4">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">React Tutorial</NavLink>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/unprotected">Unprotected</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/protected">Protected</NavLink>
          </li>
        </ul>
        <ul className="navbar-nav">
          { isLoggedIn ? (
          <li className="nav-item dropdown">
            <span className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              {currentUser.username} Account
            </span>
            <ul className="dropdown-menu">
              <li><NavLink to={"/profile/" + currentUser.id} className="dropdown-item">Profile</NavLink></li>
              <li><hr className="dropdown-divider" /></li>
              <li><Logout /></li>
            </ul>
          </li>) : (<li className="nav-item"><NavLink to="/login" className="nav-link">Login</NavLink></li>)}
        </ul>
      </div>
    </nav>
  );
}
