import React from "react";
import photo from "../../../accets/images/main.jpg";
import { FlexContainer } from "../../../components/flexContainer/FlexContainer";
import { Photo } from "../../../components/photo/Photo";
import { Container } from "../../../components/Container";
import { PrimaryButton } from "../../../components/button/PrimaryButton";
import { S } from "./Main_Styles";

export const Main: React.FC = () => {
  return (
    <S.StyledMain>
      <Container>
        <FlexContainer justify="space-around" wrap="wrap" align="flex-start">
          <S.TitleBlock>
            <S.LittleText>Hello, I’m</S.LittleText>
            <S.MainTitle>Fabio Scaletta</S.MainTitle>
            <S.Text>
              I’m a UX/UI designer and Front End Developer based in Kuala
              Lumpur, Malaysia! 🇲🇾. I love designing, coding, creating and
              building stuff.{" "}
            </S.Text>
            <FlexContainer>
              <PrimaryButton
                margin="32px 0 0 0"
                color={"${theme.colors.primaryFont}"}
              >
                Send Email
              </PrimaryButton>
            </FlexContainer>
          </S.TitleBlock>
          <Photo src={photo}></Photo>
        </FlexContainer>
      </Container>
    </S.StyledMain>
  );
};
