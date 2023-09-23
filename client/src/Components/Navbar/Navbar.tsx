import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { useState, useRef } from "react";
import { NavbarModal } from "..";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [showProfileModal, setShowProfileModal] = useState<boolean>(false);
  const [isShowNavbar, setIsShowNavbar] = useState<boolean>(false);
  const modalRef = useRef(null);

  const handleShowProfileModal = () => {
    setShowProfileModal((prev) => !prev);
  };

  const showNavbar = () => {
    setIsShowNavbar((prev) => !prev);
  };

  return (
    <div className="navbar outer-padding ">
      <div className="hamburger-menu" onClick={showNavbar}>
        <RxHamburgerMenu className="hamburger-icon" />
      </div>
      <NavLink to="/" className="nav-band">
        <h2>Furniture</h2>
      </NavLink>
      <nav className={`nav-links${isShowNavbar ? " show" : ""}`}>
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/products" className="nav-link">
          Products
        </NavLink>
        <div
          className="nav-link flex-row align-center"
          onClick={handleShowProfileModal}
        >
          Profile
          <AiOutlineUser className="react-icon" />
        </div>
        <NavLink to="/cart" className="nav-link flex-row align-center ">
          Cart
          <AiOutlineShoppingCart className="react-icon" />
        </NavLink>
      </nav>
      {showProfileModal && (
        <div
          className={`profile-modal ${showProfileModal ? "show" : ""}`}
          ref={modalRef}
        >
          <NavbarModal />
        </div>
      )}
    </div>
  );
};

export default Navbar;
