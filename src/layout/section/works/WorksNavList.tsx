import React from "react";
import { S } from "./Works_Styles";

const items = ["All", "UX/UI Design", "Web Design", "Frontend Development"];

export const WorksNavList: React.FC = () => {
  return (
    <S.WorksNavigation>
      <S.NavList>
        {items.map((item, index) => {
          return (
            <S.Item key={index}>
              <S.Link>{item}</S.Link>
            </S.Item>
          );
        })}
      </S.NavList>
    </S.WorksNavigation>
  );
};
