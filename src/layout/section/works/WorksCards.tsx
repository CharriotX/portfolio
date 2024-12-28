import React from "react";
import { Photo } from "../../../components/photo/Photo";
import { S } from "./Works_Styles";

import work1 from "../../../accets/images/work1.webp";
import work2 from "../../../accets/images/work2.webp";
import work3 from "../../../accets/images/work3.webp";
import work4 from "../../../accets/images/work4.webp";

const workImageList = [work1, work2, work3, work4];

export const WorksCards: React.FC = () => {
  return (
    <S.Cards>
      {workImageList.map((item, index) => {
        return (
          <Photo key={index} src={item} width="545px" height="350px"></Photo>
        );
      })}
    </S.Cards>
  );
};
