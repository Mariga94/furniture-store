import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";

const HomePage: React.FC = () => {
  return <Container>
    <Navbar />
    Homepage
  </Container>;
};

export default HomePage;

// Styled Components
const Container = styled.div`
    background-color: tomato;
`;
