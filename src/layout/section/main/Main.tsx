import React from "react";
import styled from "styled-components";
import photo from "../../../accets/images/main.jpg";
import { FlexContainer } from "../../../components/flexContainer/FlexContainer";
import { Photo } from "../../../components/photo/Photo";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import { PrimaryButton } from "../../../components/button/PrimaryButton";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexContainer justify="space-between" align="center">
          <TitleBlock>
            <LittleText>Hello, I’m</LittleText>
            <MainTitle>Fabio Scaletta</MainTitle>
            <Text>
              I’m a UX/UI designer and Front End Developer based in Kuala
              Lumpur, Malaysia! 🇲🇾. I love designing, coding, creating and
              building stuff.{" "}
            </Text>
            <FlexContainer>
              <PrimaryButton margin="32px 0 0 0" color={"${theme.colors.primaryFont}"}>Send Email</PrimaryButton>
            </FlexContainer>            
          </TitleBlock>
          <Photo src={photo}></Photo>
        </FlexContainer>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  min-height: 530px;
  background-color: rgba(15, 191, 97, 0.1);
  padding-top: 47px;
  margin-bottom: 140px;
`;

const TitleBlock = styled.div`
  max-width: 475px;
  min-height: 310px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`
const LittleText = styled.span`
  font-size: 30px;
  color: ${theme.colors.sectionTitleFont}
`

const MainTitle = styled.h2`
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 60px;
  line-height: 70px;
  color: ${theme.colors.primaryFont};
  margin: 7px 0 21px;
`;

const Text = styled.p`
  font-size: 18px;
  line-height: 30px;
  font-weight: 400px;
  color: ${theme.colors.secondaryFont}
`
