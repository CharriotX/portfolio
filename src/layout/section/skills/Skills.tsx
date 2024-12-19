import React from "react";
import styled from "styled-components";
import { FlexContainer } from "../../../components/flexContainer/FlexContainer";
import { SkillList } from "./SkillList";
import { SectionTitle } from "../../../components/sectionTitle/SectionTitle";
import { Container } from "../../../components/Container";
import { SkillCards } from "./SkillCards";

export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <FlexContainer direction="column" align="center" margin="0 0 92px 0">
          <div>My service</div>
          <SectionTitle>What I Do</SectionTitle>
        </FlexContainer>
          <SkillList></SkillList>
          <SkillCards></SkillCards>
        <FlexContainer></FlexContainer>
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section``;
