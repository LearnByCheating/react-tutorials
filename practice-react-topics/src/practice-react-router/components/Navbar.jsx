import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return(
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <NavLink className="navbar-brand" to="/">Practice React Router</NavLink>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {/* Put routes here */}
          <li className="nav-item">
            <NavLink to="/products" className="nav-link">Products</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/articles" className="nav-link">Articles</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
