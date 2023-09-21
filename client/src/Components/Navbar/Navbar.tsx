import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { useState, useRef, } from "react";
import { NavbarModal } from "..";

const Navbar = () => {
  const [showProfileModal, setShowProfileModal] = useState<boolean>(false);
  const modalRef = useRef(null);

  const handleShowProfileModal = () => {
    setShowProfileModal((prev) => !prev);
  };

  // Close the modal when a click occurs outside of it
  // const handleDocumentClick = (e: MouseEvent) => {
  //   if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
  //     setShowProfileModal(false);
  //   }
  // };
 
  // useEffect(() => {
  //   if (showProfileModal) {
  //     window.addEventListener("click", handleDocumentClick);
  //   } else {
  //     window.removeEventListener("click", handleDocumentClick);
  //   }

  //   return () => {
  //     window.removeEventListener("click", handleDocumentClick);
  //   };
  // }, [showProfileModal]);

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
        <div
          className="nav-link flex-row align-center"
          onClick={handleShowProfileModal}
        >
          Profile
          <AiOutlineUser className="react-icon" />
        </div>
        <NavLink to="/cart" className="nav-link flex-row align-center">
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
