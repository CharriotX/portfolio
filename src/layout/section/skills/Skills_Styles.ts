import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";

//Skills

const Skills = styled.section`
  margin-bottom: 106px;
`;

const Subtitle = styled.div`
  margin-bottom: 16px;
  color: ${theme.colors.secondaryFont};
`

//Skill List

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 165px;
  justify-content: space-between;

  &:first-child {
    padding-right: 20px;
  }

  @media ${theme.media.tablet} {
    flex-direction: column;
    align-items: center;
  }
`;

//Skill item

type BackgroundPropsType = {
    bgcColor: string;
  };

const Skill = styled.div`
  width: 320px;
  padding-bottom: 10px;
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

//Skill Card

const Card = styled.div`
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

const Title = styled.p`
  ${font({ weight: 700, lineHeight: "45px", Fmax: 35, Fmin: 25 })}
  margin: 36px 0 72px;
  max-width: 380px;

  @media ${theme.media.tablet} {
    margin: 18px 0 36px;
  }

`;

const Name = styled.p`
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

const Link = styled.a`
  min-width: 120px;
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  cursor: pointer;

  span {
    padding-left: 26px;
  }
`;

//Skill Cards

const CardsWrapper = styled.div`
  
`

export const S = {
    Skills,
    Subtitle,
    SkillList,
    Skill,
    BgcImage,
    Number,
    Text,
    Card,
    CardInfoBlock,
    Title,
    Name,
    ImageBlock,
    Link,
    CardsWrapper
}