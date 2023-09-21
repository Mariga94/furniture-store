import "./NavbarModal.css";
import { NavLink } from "react-router-dom";
import { AiOutlineUser, AiOutlineHeart, AiOutlineInbox } from "react-icons/ai";
const NavbarModal = () => {
  return (
    <div className="navbar-modal flex-col">
      <NavLink to="/login" className="primary-button login-link">
        Login
      </NavLink>
      <NavLink to="/">
        <AiOutlineUser className="react-icons" />
        My Account
      </NavLink>
      <NavLink to="/orders">
        <AiOutlineInbox className="react-icons" />
        Orders
      </NavLink>
      <NavLink to="/saved-items">
        <AiOutlineHeart className="react-icons" />
        Saved Items
      </NavLink>
    </div>
  );
};

export default NavbarModal;
