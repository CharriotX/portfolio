import { SectionTitle } from "../../../components/sectionTitle/SectionTitle";
import { FlexContainer } from "../../../components/flexContainer/FlexContainer";
import { Photo } from "../../../components/photo/Photo";
import image from "../../../accets/images/about.webp";
import styled from "styled-components";
import { Container } from "../../../components/Container";
import { TechnologiesList } from "./TechnologiesList";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";

const items = [
  "Angular",
  "HTML",
  "Figma",
  "Bootstrap 4,5",
  "CSS, SASS",
  "Adobe XD",
];

export const About = () => {
  return (
    <StyledSection>
      <Container>
        <FlexContainer justify="space-around" wrap="wrap-reverse">
          <PhotoContainer>
            <PhotoWrapper>
              <Photo src={image} width="280px" height="420px"></Photo>
            </PhotoWrapper>
          </PhotoContainer>
          <TextBlock>
            <SectionTitle margin="0 0 37px 0">About Me</SectionTitle>
            <Text>
              Hello! My name is Rostam Sadiqi and I am a UX/UI designer and
              Front End Developer. I enjoy creating things that live on the
              internet. An experienced Software Engineer with a demonstrated
              history of working in the Computer Software industry. Skilled in
              Web Design, UX/UI design, and Front-end Development. Specialize in
              Information Security and software engineering, creating dynamic
              and beautiful web pages. I have been in the field for nearly 5
              years, and have been loving every minute of it.{" "}
              <Text>
                Here are a few technologies I’ve been working with recently:
              </Text>
            </Text>
            <TechnologiesList techItems={items}></TechnologiesList>
          </TextBlock>
        </FlexContainer>
      </Container>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  margin-bottom: 140px;
`;

const TextBlock = styled.div``;

const Text = styled.p`
  ${font({
    color: theme.colors.secondaryFont,
    lineHeight: "30px",
    Fmax: 18,
    Fmin: 16,
  })}
  max-width: 550px;

  p {
    padding-top: 37px;
  }
`;

const PhotoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 100;

  &::before {
    content: "";
    display: inline-block;
    width: 280px;
    height: 420px;
    border: 3px solid ${theme.colors.sectionTitleFont};
    border-radius: 20px;

    position: absolute;
    top: 40px;
    right: 50px;
    z-index: -1;
  }

  @media ${theme.media.tablet} {
    &::before {
      top: 15px;
      right: 20px;
    }
  }
`;
