import React from "react";
import styled from "styled-components";
import Rec from "../assets/Rectangle 21.png";

const Cart: React.FC = () => {
  return (
    <CartContainer>
      <Image src={Rec} />
      <Container>
        <Title4>Osmond ArmChair</Title4>
        <Color>White</Color>
        <Details>
          <ButtonContainer>
            <AddButton>+</AddButton>
            <Span>3</Span>
            <LessButton>-</LessButton>
          </ButtonContainer>
          <Remove>Remove</Remove>
        </Details>
      </Container>
      <Price>$149.99</Price>
    </CartContainer>
  );
};

export default Cart;

const CartContainer = styled.div`
  display: flex;
  gap: 36px;
  height: 160px;
  //   border-bottom: 1px solid #D1D1D8;
  margin-bottom: 32px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;
const Image = styled.img`
  height: 160px;
  width: 160px;
`;
const Title4 = styled.h4`
  font-size: 1.25rem;
  line-height: 2.5rem;
  //   border: 1px solid blue;
  margin: 0;
`;
const Color = styled.p`
  //   border: 1px solid green;
  margin: 0;
`;
const Price = styled.h4`
  margin-left: auto;
  font-size: 1.25rem;
  line-height: 3.5625rem;
`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  width: 160px;
  height: 52px;
  border: 1px solid #a2a3b1;
`;
const AddButton = styled.button`
  font-size: 1.7rem;
  width: 30px;
  height: 30px;
  background: none;

  &: hover {
    background: #afadb5;
  }
`;
const LessButton = styled.button`
  font-size: 1.7rem;
  width: 30px;
  height: 30px;
  background: none;
  padding-bottom: 5px;

  &: hover {
    background: #afadb5;
  }
`;
const Span = styled.span`
  font-size: 1rem;
`;

const Remove = styled.p`
  color: #FFB23F;
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
`;
