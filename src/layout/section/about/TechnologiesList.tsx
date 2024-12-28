import React from "react";
import { Icon } from "../../../components/icon/Icon";
import { S } from "./About_Styles";

type StyledTechnologiesPropsType = {
  techItems?: Array<String>;
};

export const TechnologiesList: React.FC<StyledTechnologiesPropsType> = (
  props: StyledTechnologiesPropsType
) => {
  return (
    <S.List>
      {props.techItems?.map((item, index) => {
        return (
          <S.Item key={index}>
            <Icon
              iconId="arrow"
              width="14px"
              height="11px"
              viewBox="0 0 14 11"
            ></Icon>
            <span>{item}</span>
          </S.Item>
        );
      })}
    </S.List>
  );
};
