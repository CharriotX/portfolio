import React from "react";
import styled from "styled-components";
import { FlexContainer } from "../../../components/flexContainer/FlexContainer";
import { Photo } from "../../../components/photo/Photo";
import { Icon } from "../../../components/icon/Icon";

type SkillCardPropsType = {
  techName: string,
  textTitle: string,
  srcImage: string;
};

export const SkillCard = (props: SkillCardPropsType) => {
  return (
    <StyledCard>
      <FlexContainer justify="center">
        <div>
          <StyledName>{props.techName}</StyledName>
          <StyledTitle>{props.textTitle}</StyledTitle>
          <div>
            <StyledLink>Learn More</StyledLink>
            <Icon iconId="bigArrow"></Icon>
          </div>
        </div>

        <div>
          <Photo src={props.srcImage}></Photo>
        </div>
      </FlexContainer>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  border: 1px solid rgba(196, 196, 196, 1);
  border-radius: 30px;
`;

const StyledTitle = styled.h2``;

const StyledName = styled.h4``;

const StyledLink = styled.a``;
