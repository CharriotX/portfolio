import React from "react";
import { FlexContainer } from "../../../components/flexContainer/FlexContainer";
import { Photo } from "../../../components/photo/Photo";
import { S } from "./Skills_Styles";

type SkillItemPropsType = {
  image: string;
  backgroundImageColor: string;
  number: string;
  text: string;
};

export const SkillItem: React.FC<SkillItemPropsType> = (
  props: SkillItemPropsType
) => {
  return (
    <S.Skill>
      <FlexContainer>
        <S.BgcImage bgcColor={props.backgroundImageColor}>
          <Photo
            src={props.image}
            width="70px"
            height="70px"
            borderRadius="0"
          ></Photo>
        </S.BgcImage>
        <FlexContainer direction="column" margin="12px 0 0 32px">
          <S.Number>{props.number}</S.Number>
          <S.Text>{props.text}</S.Text>
        </FlexContainer>
      </FlexContainer>
    </S.Skill>
  );
};
