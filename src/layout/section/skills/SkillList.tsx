import React from "react";
import { Icon } from "../../../components/icon/Icon";
import styled from "styled-components";
import { FlexContainer } from "../../../components/flexContainer/FlexContainer";
import { Photo } from "../../../components/photo/Photo";
import skill1 from "../../../accets/images/skill1.png"
import skill2 from "../../../accets/images/skill2.png"
import skill3 from "../../../accets/images/skill3.png"
import { SkillItem } from "./SkillItem";

const data = {
  ui: {
    number: "01",
    image: skill1,
    backgroundImageColor: "#0FBF6133",
    text: "UX/UI Design"
  },
  frontend: {
    number: "02",
    image: skill2,
    backgroundImageColor: "#2D4CFF21",
    text: "Front End Development "
  },
  design: {
    number: "03",
    image: skill3,
    backgroundImageColor: "#0FBF610D",
    text: "Responsive Design"
  }
}

export const SkillList = () => {
  return (
    <StyledSkillList>
     <SkillItem image={data.ui.image} backgroundImageColor={data.ui.backgroundImageColor} text={data.ui.text} number={data.ui.number}></SkillItem>
     <SkillItem image={data.frontend.image} backgroundImageColor={data.frontend.backgroundImageColor} text={data.frontend.text} number={data.frontend.number}></SkillItem>
     <SkillItem image={data.design.image} backgroundImageColor={data.design.backgroundImageColor} text={data.design.text} number={data.design.number}></SkillItem>
    </StyledSkillList>
  );
};

const StyledSkillList = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 130px;
  margin-bottom: 132px;
`;

const BackgroundPhoto = styled.div`
  min-width: 120px;
  min-height: 120px;
  border-radius: 20px;
  display: flex;
  justify-content:center;
  align-items: center;
`
const Skill = styled.li``;

const BgcImage = styled.div`

`

const Number = styled.span`
  
`
const Text = styled.p`
  
`
