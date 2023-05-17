import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
interface ProductProps {
  imgs: string;
  category: string;
  name: string;
  price: number;
  id?: number;
}
const Product: React.FC<ProductProps> = ({
  imgs,
  category,
  name,
  price,
  id,
}) => {
  const navigateToProjectPage = useNavigate();

  const handleNavigate = (id:number) => {
    navigateToProjectPage(`/products/${id}`);
  };
  return (
    <ProductContainer id={id} onClick={() => handleNavigate(id)}>
      <ProductImage src={imgs} />
      <ProductCategoryName>{category}</ProductCategoryName>
      <ProductItemName>{name}</ProductItemName>
      <ProductItemPrice>${price}</ProductItemPrice>
    </ProductContainer>
  );
};

export default Product;

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  text-align: left;
  width: 394px;
  border: 1px solid #f2f2f2;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #f2f2f2;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 360px;
  border-radius: 5px;
`;

const ProductItemName = styled.h3`
  font-size: 1.625rem;
`;

const ProductItemPrice = styled.h3`
  font-size: 1.625rem;
`;

const ProductCategoryName = styled.p``;
