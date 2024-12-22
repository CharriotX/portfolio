import React from "react";
import { Icon } from "../icon/Icon";
import styled from "styled-components";
import { theme } from "../../styles/Theme";

export const Logo = () => {
  return (
    <StyledLogo>
      <Icon iconId={"logo"} />
    </StyledLogo>
  );
};

const StyledLogo = styled.a`
  cursor: pointer;
`
