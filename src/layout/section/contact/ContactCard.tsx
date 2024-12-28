import React from "react";
import { PrimaryButton } from "../../../components/button/PrimaryButton";
import { S } from "./Contact_Styles";

export const ContactCard: React.FC = () => {
  return (
    <S.CardWrap>
      <S.TextBlock>
        <S.Title>Have any project in mind?</S.Title>
        <S.Text>
          Let’s work together and I will help you by all my best.
          {/* <TriangleRotateBLock>
            <TriangleBlock></TriangleBlock>
          </TriangleRotateBLock> */}
        </S.Text>
      </S.TextBlock>
      <S.ButtonBlock>
        <PrimaryButton
          color="rgba(15, 191, 97, 1)"
          background="rgba(255, 255, 255, 1)"
        >
          Let’s talk
        </PrimaryButton>
      </S.ButtonBlock>
    </S.CardWrap>
  );
};
