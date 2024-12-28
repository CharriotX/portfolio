import { SectionTitle } from "../../../components/sectionTitle/SectionTitle";
import { FlexContainer } from "../../../components/flexContainer/FlexContainer";
import { Photo } from "../../../components/photo/Photo";
import image from "../../../accets/images/about.webp";
import { Container } from "../../../components/Container";
import { TechnologiesList } from "./TechnologiesList";
import { S } from "./About_Styles";

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
    <S.StyledSection>
      <Container>
        <FlexContainer justify="space-around" wrap="wrap-reverse">
          <S.PhotoContainer>
            <S.PhotoWrapper>
              <Photo src={image} width="280px" height="420px"></Photo>
            </S.PhotoWrapper>
          </S.PhotoContainer>
          <S.TextBlock>
            <SectionTitle margin="0 0 37px 0">About Me</SectionTitle>
            <S.Text>
              Hello! My name is Rostam Sadiqi and I am a UX/UI designer and
              Front End Developer. I enjoy creating things that live on the
              internet. An experienced Software Engineer with a demonstrated
              history of working in the Computer Software industry. Skilled in
              Web Design, UX/UI design, and Front-end Development. Specialize in
              Information Security and software engineering, creating dynamic
              and beautiful web pages. I have been in the field for nearly 5
              years, and have been loving every minute of it.{" "}
              <span>
                Here are a few technologies I’ve been working with recently:
              </span>
            </S.Text>
            <TechnologiesList techItems={items}></TechnologiesList>
          </S.TextBlock>
        </FlexContainer>
      </Container>
    </S.StyledSection>
  );
};
