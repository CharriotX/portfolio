import React from "react";
import styled from "styled-components";
import { FlexContainer } from "../../../components/flexContainer/FlexContainer";
import { SectionTitle } from "../../../components/sectionTitle/SectionTitle";
import { WorksNavList } from "./WorksNavList";
import { WorksCards } from "./WorksCards";
import { PrimaryButton } from "../../../components/button/PrimaryButton";
import { theme } from "../../../styles/Theme";
import { Container } from "../../../components/Container";

export const Works = () => {
  return (
    <StyledWorks>
      <Container>
        <FlexContainer justify="" direction="column">
          <Subtitle>Portfolio</Subtitle>
          <SectionTitle>My recent works</SectionTitle>
        </FlexContainer>
        <WorksNavList></WorksNavList>
        <FlexContainer wrap="wrap" justify="center">
          <WorksCards></WorksCards>
        </FlexContainer>
        <FlexContainer justify="center" margin="97px 0 92px">
          <PrimaryButton padding="12px 64.5px">See all</PrimaryButton>
        </FlexContainer>
      </Container>
    </StyledWorks>
  );
};

const StyledWorks = styled.section``;

const Subtitle = styled.div`
  margin-bottom: 16px;
  color: ${theme.colors.secondaryFont};
`;
