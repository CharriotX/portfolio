import React from "react";
import { FlexContainer } from "../../../components/flexContainer/FlexContainer";
import { Icon } from "../../../components/icon/Icon";
import styled from "styled-components";

type StyledTechnologiesPropsType = {
  techItems?: Array<String>;
};

export const TechnologiesList = (props: StyledTechnologiesPropsType) => {
  return (
    <List>
      {props.techItems?.map((item) => {
        {
          console.log(item);
        }
        return (
          <Item>
            <Icon iconId="arrow" width="14px" height="11px"></Icon>
            <span>{item}</span>
          </Item>
        );
      })}
    </List>
  );
};

const List = styled.ol`
  -moz-column-count: 2; 
  -webkit-column-count: 2; 
  column-count: 2;
  height: 200px;
`;

const Item = styled.li`
  padding: 12px 0;

  span {
    margin-left: 10px;
  }
`;
