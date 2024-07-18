import { NavLink } from 'react-router-dom';

export default function Footer() {
  return(
    <footer className="navbar navbar-expand-sm navbar-light bg-light mt-auto">
      <div className="container">
        <ul className="navbar-nav ml-auto">
          {/* Put routes here */}
          <li className="nav-item">
            <NavLink to="/about" className="nav-link">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/terms" className="nav-link">Terms</NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
}
