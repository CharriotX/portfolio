import React from "react";
import styled from "styled-components";
import { FlexContainer } from "../../../components/flexContainer/FlexContainer";
import { Photo } from "../../../components/photo/Photo";

type SkillCardPropsType = {
    srcImage: string
}

export const SkillCard = (props: SkillCardPropsType) => {
  return (
    <StyledCard>
      <FlexContainer>
        <div></div>
        <div>
            <Photo src={props.srcImage} ></Photo>
        </div>
      </FlexContainer>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  border: 1px solid rgba(255, 255, 255, 1);
  border-radius: 30px;
`;

const StyledTitle = styled.h2`
    
`


const StyledName = styled.h4`
    
`
