import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar outer-padding flex-row justify-space_between align-center">
      <NavLink to="/">
        <h2>Furniture</h2>
      </NavLink>
      <nav className="flex-row justify-space_between">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/products" className="nav-link">
          Products
        </NavLink>
        <NavLink to="/cart" className="nav-link">
          Cart
        </NavLink>
        <NavLink to="/profile" className="nav-link">
          Profile
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
