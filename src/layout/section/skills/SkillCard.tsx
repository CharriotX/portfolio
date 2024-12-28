import React from "react";
import { FlexContainer } from "../../../components/flexContainer/FlexContainer";
import { Photo } from "../../../components/photo/Photo";
import { Icon } from "../../../components/icon/Icon";
import { S } from "./Skills_Styles";

type SkillCardPropsType = {
  techName: string;
  textTitle: string;
  srcImage: string;
};

export const SkillCard = (props: SkillCardPropsType) => {
  return (
    <S.Card>
      <FlexContainer justify="space-around" wrap="wrap-reverse">
        <S.CardInfoBlock>
          <S.Name>{props.techName}</S.Name>
          <S.Title>{props.textTitle}</S.Title>
          <S.Link>
            Learn More
            <span>
              <Icon
                iconId="bigArrow"
                width="27px"
                height="22px"
                viewBox="0 0 27 22"
              ></Icon>
            </span>
          </S.Link>
        </S.CardInfoBlock>
        <S.ImageBlock>
          <Photo src={props.srcImage}></Photo>
        </S.ImageBlock>
      </FlexContainer>
    </S.Card>
  );
};
