import React from "react";
import styled from "styled-components";
import Cart from "../components/Cart";

const CartPage: React.FC = () => {
  return (
    <CartContainer>
      <HeaderWrapper>
        <Header>Cart</Header>
      </HeaderWrapper>
      <Wrapper>
        <Left>
          <Cart />
          <Cart />
          <Cart />
        </Left>
        <Right>
          <Title3>Order Summary</Title3>
          <DIV>
            <Paragraph>Price</Paragraph>
            <Span>$319.98</Span>
          </DIV>
          <DIV>
            <Paragraph>Shipping</Paragraph>
            <Span>Free</Span>
          </DIV>

          <HR />
          <DIV>
            <Paragraph>Total</Paragraph>
            <Span>$288.08</Span>
          </DIV>

          <CheckoutButton>Proceed to Checkout</CheckoutButton>
        </Right>
      </Wrapper>
    </CartContainer>
  );
};

export default CartPage;

const CartContainer = styled.div`
  padding: 0 100px;
`;
const HeaderWrapper = styled.div``;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 80px;
`;

const Header = styled.h1`
  margin: 0;
  padding: 0;
  line-height: 4.5rem;
//   margin-top: 100px;
  margin-bottom: 60px;
  display: inline-block;
`;
const Right = styled.div`
  width: 380px;
  padding: 32px;
  border-radius: 2px;
  border: 1px solid #d1d1d8;
`;
const Left = styled.div`
  flex: 1;
`;
const Title3 = styled.h3`
  font-size: 1.5rem;
`;
const Paragraph = styled.p``;
const HR = styled.hr``;
const CheckoutButton = styled.button`
  height: 52px;
  width: 100%;
  border-radius: 4px;
  background: #518581;
  color: #fff;
`;
const DIV = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Span = styled.span`
    font-weight: 700;
    font-size: 1rem;
`;
