import React from "react";
import styled from "styled-components";
import project1Image from "../../../accets/images/project1.webp";
import project2Image from "../../../accets/images/project2.webp";
import project3Image from "../../../accets/images/project3.webp";
import skill1 from "../../../accets/images/skill1.png";
import skill2 from "../../../accets/images/skill2.png";
import skill3 from "../../../accets/images/skill3.png";
import { FlexContainer } from "../../../components/flexContainer/FlexContainer";
import { Skill } from "./Skill";
import { SectionTitle } from "../../../components/sectionTitle/SectionTitle";
import { SkillCard } from "./SkillCard";
import { Container } from "../../../components/Container";

export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <FlexContainer direction="column" align="center">
          <div>My service</div>
          <SectionTitle>What I Do</SectionTitle>
        </FlexContainer>
        <FlexContainer justify="center" margin="92px 0 132px 0">
          <Skill
            src={skill1}
            skillNumber="01"
            skillTitle="UX/UI Design"
          ></Skill>
          <Skill
            src={skill2}
            skillNumber="02"
            skillTitle="Front End Development"
          ></Skill>
          <Skill
            src={skill3}
            skillNumber="03"
            skillTitle="Responsive Design"
          ></Skill>
        </FlexContainer>
        <SkillCard
          srcImage={project1Image}
          techName="UX/ ui design"
          textTitle="Research, Design, Prototype, and Animation"
        ></SkillCard>
        <SkillCard
          srcImage={project2Image}
          techName="Front end development"
          textTitle="Implement UX design into live and user friendly "
        ></SkillCard>
        <SkillCard
          srcImage={project3Image}
          techName="Responsive design"
          textTitle="I build landing pages and responsive websites and web App"
        ></SkillCard>
        <FlexContainer></FlexContainer>
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section``;
