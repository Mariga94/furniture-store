import React, { useState } from "react";
import styled from "styled-components";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import rectangle38 from "../assets/Rectangle38.png";
import rectangle39 from "../assets/Rectangle39.jpg";
import rectangle40 from "../assets/Rectangle40.jpg";
import data from "../data";

import Product from "../components/Product";
import { useParams } from "react-router-dom";

const itemsPerPage = 9;
const SingleCategoryPage: React.FC = () => {
  const { categorName } = useParams();
  const [products, setProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const itemsToDisplay = data.slice(startIndex, endIndex);

  const handleSearchInputChange = () => {
    return;
  };

  return (
    <ProductsContainer>
      <Wrapper>
        <HeaderTitle>Tables</HeaderTitle>
        <HeaderParagraph>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, dolorem
          ducimus debitis laboriosam illo molestias eveniet, perspiciatis.
        </HeaderParagraph>
        <StyledCarousel
          autoPlay={true}
          interval={3000}
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
        >
          <HeroImage src={rectangle38} alt="hero image" />
          <HeroImage src={rectangle39} alt="hero image" />
          <HeroImage src={rectangle40} alt="hero image" />
        </StyledCarousel>
        <FormContainer>
          <SearchInput
            type="text"
            placeholder="Search property"
            value={searchValue}
            onChange={handleSearchInputChange}
          />
          <SearchButton type="submit">Find Now</SearchButton>
        </FormContainer>
        <HeaderTitle2>Total Chairs</HeaderTitle2>
        <Container>
          {itemsToDisplay.map((item) => (
            <Product
              key={item.id}
              id={item.id}
              imgs={item.img}
              name={item.name}
              category={item.category}
              price={item.price}
            />
          ))}
        </Container>
        <Pagination>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <PageNumber
                key={page}
                active={page === currentPage}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </PageNumber>
            )
          )}
        </Pagination>
      </Wrapper>
    </ProductsContainer>
  );
};

export default SingleCategoryPage;

const ProductsContainer = styled.header`
  background: #f9f9f9;
  padding: 0 100px;
  min-height: 100svh;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HeaderTitle = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  // margin-top: 100px;
  margin-bottom: 20px;
  height: 83px;
`;

const HeaderTitle2 = styled.h2`
  font-size: 2.75rem;
  margin-right: auto;
`;

const HeaderParagraph = styled.p`
  width: 600px;
  height: 64px;
  text-align: center;
`;

const HeroImage = styled.img`
  width: 100%;
  height: 500px;
  margin: 50px 0;
`;

const FormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  box-shadow: 0px 4px 120px rgba(175, 173, 181, 0.15);
  width: 1030px;
  height: 84px;
  padding: 15px;
  margin: 50px 0;
`;
const SearchInput = styled.input`
  width: 800px;
  height: 70px;
  padding: 25px;
  font-size: 1.125rem;
  border: none;
  transition: border-color 0.3s;
`;

const SearchButton = styled.button`
  width: 138px;
  height: 54px;
  color: #fff;
  background: #518581;
`;

const StyledCarousel = styled(Carousel)`
  .carousel-wrapper {
    height: 500px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  margin-bottom: 80px;
  margin-top: 50px;
  // background: tomato;
  padding: 50px;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
`;

const PageNumber = styled.button<{ active?: boolean }>`
  background-color: ${({ active }) => (active ? "#518581" : "")};
  color: ${({ active }) => (active ? "#fff" : "#333")};
  height: 42px;
  width: 38px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  &:hover {
    background-color: ${({ active }) => (active ? "#333" : "#ccc")};
  }
`;
