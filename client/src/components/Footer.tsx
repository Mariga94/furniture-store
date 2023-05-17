import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Wrapper>
        <LeftContainer>
          <Logo>Furnish</Logo>
        </LeftContainer>
        <RightContainer>
          <NavLinks>
            <Title4>Categories</Title4>
            <NavLink>
              <StyledLink to="/product-category/tables">Tables</StyledLink>
            </NavLink>
            <NavLink>
              <StyledLink to="/product-category/chairs">Chairs</StyledLink>
            </NavLink>
            <NavLink>
              <StyledLink to="/product-category/tv-stands">
                Tv Stands
              </StyledLink>
            </NavLink>
            <NavLink>
              <StyledLink to="/product-category/Living-room-accessories">
                Living room Decorations
              </StyledLink>
            </NavLink>
          </NavLinks>
        </RightContainer>
      </Wrapper>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  background: #f9f9f9;
`;

const Wrapper = styled.div`
  border-top: 1.5px solid #ece4de;
  margin: 100px;
  height: 290px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
`;

const Logo = styled.a`
  font-size: 2rem;
  font-weight: 700;
  text-decoration: none;
`;

const Title4 = styled.h4`
  font-size: 1.25rem;
  line-height: 1.625rem;
`;

const NavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
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
