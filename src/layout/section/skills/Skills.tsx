import React from "react";
import styled from "styled-components";
import { FlexContainer } from "../../../components/flexContainer/FlexContainer";
import { SkillList } from "./SkillList";
import { SectionTitle } from "../../../components/sectionTitle/SectionTitle";
import { Container } from "../../../components/Container";
import { SkillCards } from "./SkillCards";
import { theme } from "../../../styles/Theme";

export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <FlexContainer direction="column" align="center" margin="0 0 92px 0">
          <Subtitle>My service</Subtitle>
          <SectionTitle>What I Do</SectionTitle>
        </FlexContainer>
          <SkillList></SkillList>
          <SkillCards></SkillCards>
        <FlexContainer></FlexContainer>
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  margin-bottom: 106px;
`;

const Subtitle = styled.div`
  margin-bottom: 16px;
  color: ${theme.colors.secondaryFont};
`
