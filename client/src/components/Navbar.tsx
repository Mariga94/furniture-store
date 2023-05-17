import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineMenu,
} from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import styled from "styled-components";

const Navbar: React.FC = () => {
  const [isMenuOpen, setisMenuOpen] = React.useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState<boolean>(false);
  const [isHovering, setIsHovering] = React.useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isHovering) {
        setIsDropdownOpen(false);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [isHovering]);

  const handleMenuToggle = (): void => {
    setisMenuOpen((prev) => !prev);
  };

  const handleDropDownToggle = (): void => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  return (
    <NavbarContainer>
      <Logo>Furnish</Logo>
      <NavLinks>
        <NavLink>
          <StyledLink to="">Home</StyledLink>
        </NavLink>
        <NavLink>
          <StyledLink
            to="/products"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Product <FiChevronDown size={15} />
            <DropDownMenu isOpen={isDropdownOpen}>
              <Heading4>Categories</Heading4>
              <DropdownLink to="/product-category/tables">Tables</DropdownLink>
              <DropdownLink to="/product-category/chairs">Chairs</DropdownLink>
              <DropdownLink to="/product-category/tv-stands">
                Tv Stands
              </DropdownLink>
              <DropdownLink to="/product-category/Living-room-accessories">
                Living room Decorations
              </DropdownLink>
            </DropDownMenu>
          </StyledLink>
        </NavLink>
        <NavLink>
          <StyledLink to="">About Us</StyledLink>
        </NavLink>
      </NavLinks>
      <IconsContainer>
        <IconLink to="/cart">
          <AiOutlineShoppingCart size={30} />
        </IconLink>
        <IconLink to="/profile">
          <AiOutlineUser size={30} />
        </IconLink>
        <HumburgerIcon onClick={handleMenuToggle}>
          <AiOutlineMenu size={30} />
        </HumburgerIcon>
      </IconsContainer>
    </NavbarContainer>
  );
};

export default Navbar;

const NavbarContainer = styled.div`
  height: 120px;
  margin-bottom: 100px;
  border-bottom: 0.125rem solid #f3f3f3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px;
  background: #f9f9f9;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Logo = styled.a`
  font-size: 2rem;
  font-weight: 700;
  text-decoration: none;
  height: 18px;
`;

const NavLinks = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 60px;
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 16px;
  }
`;

const NavLink = styled.li`
  line-height: 2rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #151411;
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 2rem;
  &:hover {
    text-decoration: underline;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  @media (max-width: 768px) {
    margin-top: 16px;
  }
`;

const IconLink = styled(Link)`
  color: #000;
  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 8px;
  }
`;

const HumburgerIcon = styled.div`
  display: none;
  margin-left: 16px;
  color: #333;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const DropDownMenu = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: absolute;
  width: 20%;
  top: 33%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  border: 0.5px solid light-grey;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
  transition-delay: 0.2s;
  pointer-events: ${(props) => (props.isOpen ? "auto" : "none")};
`;

const DropdownLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: #151411;
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 2rem;
  &:hover {
    text-decoration: underline;
  }
`;
const Heading4 = styled.h4``;
