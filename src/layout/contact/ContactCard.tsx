import React from "react";
import { FlexContainer } from "../../components/flexContainer/FlexContainer";
import { PrimaryButton } from "../../components/button/PrimaryButton";
import styled from "styled-components";
import { theme } from "../../styles/Theme";

export const ContactCard = () => {
  return (
    <CardWrap>
      <TextBlock>
        <Title>Have any project in mind?</Title>
        <Text>Let’s work together and I will help you by all my best.</Text>
      </TextBlock>
      <ButtonBlock>
        <PrimaryButton
          color="rgba(15, 191, 97, 1)"
          background="rgba(255, 255, 255, 1)"
        >
          Let’s talk
        </PrimaryButton>
      </ButtonBlock>
    </CardWrap>
  );
};

const CardWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(15, 191, 97, 1);
  border-radius: 15px;
  min-height: 250px;
  min-width: 1116px;
  color: ${theme.colors.contactCardFont};
  padding: 0 53px 0 45px;
  position: relative;
  top: 45px;
  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.25);
`;

const TextBlock = styled.div`
  min-height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h2`
font-size: 45px;
font-weight: 500;
line-height: 52.73px;
`

const Text = styled.h2`
font-size: 18px;
font-weight: 500;
line-height: 30px;
margin-top: 24px;
`
const ButtonBlock= styled.div``