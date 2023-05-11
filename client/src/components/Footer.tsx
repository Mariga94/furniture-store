import React from "react";
import styled from "styled-components";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <LeftContainer>
        <Logo>Furnish</Logo>
      </LeftContainer>
      <RightContainer>
        
      </RightContainer>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  border-top: 1.5px solid #ece4de;
  margin: 0 100px;
  margin-bottom: 100px;
  height: 300px;
  color: #fff;
  background-color: #518581;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

const RightContainer = styled.div``;

const Logo = styled.a`
  font-size: 2rem;
  font-weight: 700;
  text-decoration: none;
  height: 18px;
`;
