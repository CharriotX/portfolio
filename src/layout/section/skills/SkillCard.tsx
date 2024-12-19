import React from "react";
import styled from "styled-components";
import { FlexContainer } from "../../../components/flexContainer/FlexContainer";
import { Photo } from "../../../components/photo/Photo";
import { Icon } from "../../../components/icon/Icon";
import { theme } from "../../../styles/Theme";

type SkillCardPropsType = {
  techName: string;
  textTitle: string;
  srcImage: string;
};

export const SkillCard = (props: SkillCardPropsType) => {
  return (
    <StyledCard>
      <FlexContainer justify="center">
        <CardInfoBlock>
          <StyledName>{props.techName}</StyledName>
          <StyledText>{props.textTitle}</StyledText>
          <StyledLink>
            Learn More
            <span>
              <Icon
                iconId="bigArrow"
                width="27px"
                height="22px"
                viewBox="0 0 27 22"
              ></Icon>
            </span>
          </StyledLink>
          <FlexContainer></FlexContainer>
        </CardInfoBlock>
        <ImageBlock>
          <Photo src={props.srcImage}></Photo>
        </ImageBlock>
      </FlexContainer>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  border: 1px solid rgba(196, 196, 196, 1);
  border-radius: 30px;
  max-height: 400px;

  &:nth-child(2) {
    margin: 108px 0;
  }
`;

const CardInfoBlock = styled.div`
  padding: 50px 80px 50px 50px;
`;

const StyledText = styled.p`
  font-size: 35px;
  font-weight: 700;
  line-height: 45px;
  margin: 36px 0 72px;
  max-width: 380px;
`;

const StyledName = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  text-transform: uppercase;
  color: ${theme.colors.secondaryFont};
`;

const ImageBlock = styled.div`
  position: relative;
  top: -43px;
  right: 51px;

  img {
    box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.25);
  }
`;

const StyledLink = styled.a`
  min-width: 120px;
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  cursor: pointer;

  span {
    padding-left:26px;
  }
`;
