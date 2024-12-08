import React from "react";
import { FlexContainer } from "../../components/flexContainer/FlexContainer";
import { PrimaryButton } from "../../components/button/PrimaryButton";
import styled from "styled-components";

export const ContactCard = () => {
  return (
    <CardWrap>
      <StyledTextField>
        <h2>Have any project in mind?</h2>
        <div>Let’s work together and I will help you by all my best.</div>
      </StyledTextField>
      <div>
        <PrimaryButton
          color="rgba(15, 191, 97, 1)"
          background="rgba(255, 255, 255, 1)"
        >
          Let’s talk
        </PrimaryButton>
      </div>
    </CardWrap>
  );
};

const CardWrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgba(15, 191, 97, 1);
  border-radius: 15px;
  min-height: 250px;
  min-width: 1116px;
  color: rgba(255, 255, 255, 1);
`;

const StyledTextField = styled.div`
  min-height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
