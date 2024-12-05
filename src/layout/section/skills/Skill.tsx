import React from "react";
import { Icon } from "../../../components/icon/Icon";
import styled from "styled-components";
import { FlexContainer } from "../../../components/flexContainer/FlexContainer";

type SkillPropsType = {
  iconId: string;
  skillNumber: string;
  skillTitle: string;
};

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <FlexContainer>
        <Icon iconId={props.iconId}></Icon>
        <SkillNumber>{props.skillNumber}</SkillNumber>
        <SkillTitle>{props.skillTitle}</SkillTitle>
      </FlexContainer>
    </StyledSkill>
  );
};

const StyledSkill = styled.div``;

const SkillTitle = styled.h2``;

const SkillNumber = styled.div``;
