import React from "react";
import { FlexContainer } from "../../../components/flexContainer/FlexContainer";
import { SkillList } from "./SkillList";
import { SectionTitle } from "../../../components/sectionTitle/SectionTitle";
import { Container } from "../../../components/Container";
import { SkillCards } from "./SkillCards";
import { S } from "./Skills_Styles";

export const Skills = () => {
  return (
    <S.Skills>
      <Container>
        <FlexContainer direction="column" align="center" margin="0 0 92px 0">
          <S.Subtitle>My service</S.Subtitle>
          <SectionTitle>What I Do</SectionTitle>
        </FlexContainer>
        <SkillList></SkillList>
        <SkillCards></SkillCards>
        <FlexContainer></FlexContainer>
      </Container>
    </S.Skills>
  );
};
