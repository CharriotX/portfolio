import React from "react";
import { SkillCard } from "./SkillCard";
import project1Image from "../../../accets/images/project1.webp";
import project2Image from "../../../accets/images/project2.webp";
import project3Image from "../../../accets/images/project3.webp";
import { S } from "./Skills_Styles";

const cardsData = [
  {
    srcImage: project1Image,
    techName: "UX/ ui design",
    textTitle: "Research, Design, Prototype, and Animation",
  },
  {
    srcImage: project2Image,
    techName: "Front end development",
    textTitle: "Implement UX design into live and user friendly ",
  },
  {
    srcImage: project3Image,
    techName: "Responsive design",
    textTitle: "I build landing pages and responsive websites and web App",
  },
];

export const SkillCards: React.FC = () => {
  return (
    <S.CardsWrapper>
      {cardsData.map((item, index) => {
        return (
          <SkillCard
            key={index}
            srcImage={item.srcImage}
            techName={item.techName}
            textTitle={item.textTitle}
          ></SkillCard>
        );
      })}
    </S.CardsWrapper>
  );
};
