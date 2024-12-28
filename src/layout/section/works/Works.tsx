import React from "react";
import { FlexContainer } from "../../../components/flexContainer/FlexContainer";
import { SectionTitle } from "../../../components/sectionTitle/SectionTitle";
import { WorksNavList } from "./WorksNavList";
import { WorksCards } from "./WorksCards";
import { PrimaryButton } from "../../../components/button/PrimaryButton";
import { Container } from "../../../components/Container";
import { S } from "./Works_Styles";

export const Works: React.FC = () => {
  return (
    <S.Works>
      <Container>
        <FlexContainer justify="" direction="column">
          <S.Subtitle>Portfolio</S.Subtitle>
          <SectionTitle>My recent works</SectionTitle>
        </FlexContainer>
        <WorksNavList></WorksNavList>
        <FlexContainer wrap="wrap" justify="center">
          <WorksCards></WorksCards>
        </FlexContainer>
        <FlexContainer justify="center" margin="97px 0 92px">
          <PrimaryButton padding="12px 64.5px" fontSize="20px">
            See More
          </PrimaryButton>
        </FlexContainer>
      </Container>
    </S.Works>
  );
};
