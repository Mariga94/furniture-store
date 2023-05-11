import React from "react";
import styled from "styled-components";
import hero from "../assets/Rectangle.png";

const HomePage: React.FC = () => {
  return (
    <HeaderContainer>
      <Wrapper>
        <Title>Discover Furniture with High Quality Wood</Title>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          similique est illum, sit error nemo doloremque quo cumque ipsa magnam
          ex optio quia quibusdam tempore ipsam dolorum hic? Amet,
          exercitationem.
        </Paragraph>
        <HeroImage src={hero} alt="Hero Image" />
      </Wrapper>
      <Container1>
        <BenefitsContainer>
          <Header4>Benefits</Header4>
          <Header2>Benefits when using our services</Header2>
        </BenefitsContainer>
        <InfoParagraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          nostrum porro,
        </InfoParagraph>
      </Container1>
      <CardContainer>
        <Card>
          <Header3>Many Choices</Header3>
          <CardParagraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ab
            quam molestiae eos voluptatem assumenda facere accusantium,
            distinctio excepturi maxime est a asperiores sed cupiditate ex alias
            quos, tempora quas!
          </CardParagraph>
        </Card>
        <Card>
          <Header3>Affordable Price</Header3>
          <CardParagraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ab
            quam molestiae eos voluptatem assumenda facere accusantium,
            distinctio excepturi maxime est a asperiores sed cupiditate ex alias
            quos, tempora quas!
          </CardParagraph>
        </Card>
        <Card>
          <Header3>Fast and On Time</Header3>
          <CardParagraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ab
            quam molestiae eos voluptatem assumenda facere accusantium,
            distinctio excepturi maxime est a asperiores sed cupiditate ex alias
            quos, tempora quas!
          </CardParagraph>
        </Card>
      </CardContainer>
    </HeaderContainer>
  );
};

export default HomePage;

// Styled Components
const HeaderContainer = styled.header`
  padding: 0 100px;
  background-color: #f9f9f9;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 4rem;
  line-height: 5.2rem;
  text-align: center;
  color: #000;
  margin-top: 100px;
  margin-bottom: 0;
  width: 824px;
  // height: 166x;
`;

const Paragraph = styled.p`
  width: 796px;
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 2rem;
  color: #afadb5;
  text-align: center;
  margin-top: 30px;
`;

const HeroImage = styled.img`
  width: 100%;
  height: auto;
  margin-top: 92px;
`;

const Container1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 100px;
`;

const BenefitsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 427px;
  height: 151px;
`;

const InfoParagraph = styled.p`
  font-weight: 500;
  font-size: 1.125rem;
  width: 505px;
  height: 96px;
  line-height: 2rem;
  color: #afadb5;
  padding-top: 0px;
`;

const Header3 = styled.h3`
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2rem;
`;
const Header4 = styled.h4`
  color: #ffb23f;
  font-size: 1.125rem;
  font-weight: 700;
  margin: 0;
`;

const Header2 = styled.h2`
  font-weight: 700;
  font-size: 2.75rem;
  color: #151411;
`;
const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  gap: 29px;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 180px;
  
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 285px;
  width: 605px;
  background-color: #ffffff;
  padding: 24px;
`;

const CardParagraph = styled.p`
  color: #afadb5;
  font-size: 1.125rem;
  line-height: 2rem;
`;
