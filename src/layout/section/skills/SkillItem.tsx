import React from "react";
import { Icon } from "../../../components/icon/Icon";
import styled from "styled-components";
import { FlexContainer } from "../../../components/flexContainer/FlexContainer";
import { Photo } from "../../../components/photo/Photo";
import { theme } from "../../../styles/Theme";

type SkillItemPropsType = {
  image: string;
  backgroundImageColor: string;
  number: string;
  text: string;
};

type BackgroundPropsType = {
  bgcColor: string;
};

export const SkillItem = (props: SkillItemPropsType) => {
  return (
    <Skill>
      <FlexContainer>
        <BgcImage bgcColor={props.backgroundImageColor}>
          <Photo
            src={props.image}
            width="70px"
            height="70px"
            borderRadius="0"
          ></Photo>
        </BgcImage>
        <FlexContainer direction="column" margin="12px 0 0 32px">
          <Number>{props.number}</Number>
          <Text>{props.text}</Text>
        </FlexContainer>
      </FlexContainer>
    </Skill>
  );
};

const Skill = styled.div`
min-width: 330px;
flex-grow: 1;
`;

const BgcImage = styled.div<BackgroundPropsType>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.bgcColor || "#fff"};
  min-width: 120px;
  min-height: 120px;
  border-radius: 20px;
`;

const Number = styled.span`
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  color: ${theme.colors.secondaryFont};
`;
const Text = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  margin-top: 8px;
  white-space: nowrap;

  @media ${theme.media.tablet} {
    white-space: normal;
  }
`;
