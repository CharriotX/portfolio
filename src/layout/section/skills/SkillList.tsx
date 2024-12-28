import skill1 from "../../../accets/images/skill1.png";
import skill2 from "../../../accets/images/skill2.png";
import skill3 from "../../../accets/images/skill3.png";
import { SkillItem } from "./SkillItem";
import { S } from "./Skills_Styles";

const data = [
  {
    number: "01",
    image: skill1,
    backgroundImageColor: "#0FBF6133",
    text: "UX/UI Design",
  },
  {
    number: "02",
    image: skill2,
    backgroundImageColor: "#2D4CFF21",
    text: "Front End Development ",
  },
  {
    number: "03",
    image: skill3,
    backgroundImageColor: "#0FBF610D",
    text: "Responsive Design",
  },
];

export const SkillList = () => {
  return (
    <S.SkillList>
      {data.map((item) => {
        return (
          <SkillItem
            image={item.image}
            backgroundImageColor={item.backgroundImageColor}
            text={item.text}
            number={item.number}
            key={item.number}
          />
        );
      })}
    </S.SkillList>
  );
};
