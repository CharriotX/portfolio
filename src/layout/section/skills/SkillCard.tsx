import React from "react";
import styled from "styled-components";
import { FlexContainer } from "../../../components/flexContainer/FlexContainer";
import { Photo } from "../../../components/photo/Photo";
import { Icon } from "../../../components/icon/Icon";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";

type SkillCardPropsType = {
  techName: string;
  textTitle: string;
  srcImage: string;
};

export const SkillCard = (props: SkillCardPropsType) => {
  return (
    <StyledCard>
      <FlexContainer justify="space-around" wrap="wrap-reverse">
        <CardInfoBlock>
          <StyledName>{props.techName}</StyledName>
          <StyledTitle>{props.textTitle}</StyledTitle>
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
  max-width: 100%;

  &:nth-child(2) {
    margin: 108px 0;

    @media ${theme.media.tablet} {
    margin: 50px 0;
  }
  }

`;

const CardInfoBlock = styled.div`
  padding: 50px 80px 50px 50px;

  @media ${theme.media.tablet} {
    padding: 15px;
  }
`;

const StyledTitle = styled.p`
  ${font({ weight: 700, lineHeight: "45px", Fmax: 35, Fmin: 25 })}
  margin: 36px 0 72px;
  max-width: 380px;

  @media ${theme.media.tablet} {
    margin: 18px 0 36px;
  }

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
    max-width: 100%;
    box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.25);
  }

  @media ${theme.media.tablet} {
    position: block;
    right: 0;
    top: 10px;
    padding: 0 10px;

    img{
      max-width: 100%;
      height: 300px;
    }

  }
`;

const StyledLink = styled.a`
  min-width: 120px;
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  cursor: pointer;

  span {
    padding-left: 26px;
  }
`;
