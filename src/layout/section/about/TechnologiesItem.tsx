import React from "react";
import { FlexContainer } from "../../../components/flexContainer/FlexContainer";
import { Icon } from "../../../components/icon/Icon";
import styled from "styled-components";

type TechnologiesItemPropsType = {
  iconId: string;
  itemText: string;
};

export const TechnologiesItem = (props: TechnologiesItemPropsType) => {
  return (
    <StyledItem>
      <FlexContainer justify="space-beetwen" align="center">
        <Icon iconId={props.iconId} width="14px" height="11px"></Icon>
        <span>{props.itemText}</span>
      </FlexContainer>
    </StyledItem>
  );
};

const StyledItem = styled.li``;
