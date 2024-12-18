import React from "react";
import { Icon } from "../../../components/icon/Icon";
import styled from "styled-components";
import { FlexContainer } from "../../../components/flexContainer/FlexContainer";
import { Photo } from "../../../components/photo/Photo";

type SkillPropsType = {
  src: string;
  skillNumber: string;
  skillTitle: string;
};

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <BackgroundPhoto>
        <Photo
          src={props.src}
          width="70px"
          height="70px"
          borderRadius="1px"
        ></Photo>
      </BackgroundPhoto>
      <FlexContainer direction="column" justify="center">
        <SkillNumber>{props.skillNumber}</SkillNumber>
        <SkillTitle>{props.skillTitle}</SkillTitle>
      </FlexContainer>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 33%;
  min-height: 130px;
  flex-grow: 1;
`;

const BackgroundPhoto = styled.div`
  min-width: 120px;
  min-height: 120px;
  border-radius: 20px;
  display: flex;
  justify-content:center;
  align-items: center;
`

const SkillTitle = styled.h3``;

const SkillNumber = styled.div``;
