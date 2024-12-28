import React from "react";
import { Icon } from "../icon/Icon";
import styled from "styled-components";

export const Logo = () => {
  return (
    <StyledLogo>
      <Icon iconId={"logo"} />
    </StyledLogo>
  );
};

const StyledLogo = styled.a`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
