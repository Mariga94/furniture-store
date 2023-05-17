import React, { useState } from "react";
import styled from "styled-components";
import rec from "../assets/Rectangle 25.png";
const ProductDetailPage: React.FC = () => {
  const [product, setProduct] = useState({});
  return (
    <ProductContainer>
      <Wrapper>
        <ImageContainer src={rec} alt="image" />
        <InfoContainer>
          <Title3>White Aesthetic Chair</Title3>
          <Span>Combination of wood and wool</Span>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
            possimus nam delectus assumenda tempora earum animi mollitia
            voluptatum eligendi cupiditate saepe doloremque minima labore iste
            similique recusandae temporibus beatae eveniet.
          </Paragraph>
          <Price>$99.98</Price>
          <ButtonContainer>
            <ButtonBuy>Buy Now</ButtonBuy>
            <ButtonCart>Add to Cart</ButtonCart>
          </ButtonContainer>
        </InfoContainer>
      </Wrapper>
    </ProductContainer>
  );
};

export default ProductDetailPage;

const ProductContainer = styled.div`
  padding: 0 100px;
//   min-height: 100svh;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  margin-top: 100px;
`;

const ImageContainer = styled.img`
  width: 600px;
  max-height: 600px;
  flex: 1;
`;

const InfoContainer = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Title3 = styled.h3`
  font-size: 2.75rem;
  line-height: 3.5625rem;
`;

const Span = styled.p``;

const Paragraph = styled.p``;

const Price = styled.h3`
  font-size: 2.75rem;
  line-height: 3.5625rem;
  margin-top: 30px;
  
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
  margin-top: 50px;
`;

const ButtonCart = styled.button`
  width: 285px;
  height: 58px;
`;

const ButtonBuy = styled.button`
  background: #518581;
  width: 285px;
  height: 58px;
  color: #fff;
`;
