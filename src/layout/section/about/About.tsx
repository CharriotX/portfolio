import React from "react";
import { SectionTitle } from "../../../components/sectionTitle/SectionTitle";
import { FlexContainer } from "../../../components/flexContainer/FlexContainer";
import { Photo } from "../../../components/photo/Photo";
import image from "../../accets/images/about.webp";
import styled from "styled-components";
import { TechnologiesItem } from "./TechnologiesItem";

export const About = () => {
  return (
    <StyledSection>
      <FlexContainer justify="center">
        <SectionTitle>About Me</SectionTitle>
      </FlexContainer>
      <FlexContainer justify="space-around" align="center">
        <AboutInfo>
          <Photo src={image} width="280px" height="420px"></Photo>
        </AboutInfo>
        <AboutInfo>
          <StyledText>
            Hello! My name is Rostam Sadiqi and I am a UX/UI designer and Front
            End Developer. I enjoy creating things that live on the internet. An
            experienced Software Engineer with a demonstrated history of working
            in the Computer Software industry. Skilled in Web Design, UX/UI
            design, and Front-end Development. Specialize in Information
            Security and software engineering, creating dynamic and beautiful
            web pages. I have been in the field for nearly 5 years, and have
            been loving every minute of it. Here are a few technologies I’ve
            been working with recently:
          </StyledText>
          <StyledTechnologies>
            <TechnologiesItem
              iconId="arrow"
              itemText="Angular"
            ></TechnologiesItem>
            <TechnologiesItem iconId="arrow" itemText="HTML"></TechnologiesItem>
            <TechnologiesItem
              iconId="arrow"
              itemText="Figma"
            ></TechnologiesItem>
            <TechnologiesItem
              iconId="arrow"
              itemText="Bootstrap 4,5"
            ></TechnologiesItem>
            <TechnologiesItem
              iconId="arrow"
              itemText="CSS,SASS "
            ></TechnologiesItem>
            <TechnologiesItem
              iconId="arrow"
              itemText="Adobe XD "
            ></TechnologiesItem>
          </StyledTechnologies>
        </AboutInfo>
      </FlexContainer>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  min-height: 70vh;
`;

const AboutInfo = styled.div`
  max-width: 50%;
`;

const StyledText = styled.div``;
const StyledTechnologies = styled.ol``;
