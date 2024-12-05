import React from "react";
import styled from "styled-components";
import { FlexContainer } from "../../../components/flexContainer/FlexContainer";
import { Skill } from "./Skill";
import { SectionTitle } from "../../../components/sectionTitle/SectionTitle";

export const Skills = () => {
  return (
    <StyledSkills>
      <FlexContainer justify="" direction="column" align="center">
        <div>My service</div>
        <SectionTitle>What I Do</SectionTitle>
      </FlexContainer>
      <FlexContainer justify="center">
        <Skill
          iconId="uxDesign"
          skillNumber="01"
          skillTitle="UX/UI Design"
        ></Skill>
        <Skill
          iconId="frontend"
          skillNumber="02"
          skillTitle="Front End Development"
        ></Skill>
        <Skill
          iconId="responsiveDesign"
          skillNumber="03"
          skillTitle="Responsive Design"
        ></Skill>
      </FlexContainer>
    </StyledSkills>
  );
};

const StyledSkills = styled.section``;
