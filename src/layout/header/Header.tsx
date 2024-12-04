import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Navigation } from "../../components/navigation/Navigation";

export const Header = () => {
  return (
    <StyledHeader>
      <Logo/>
      <Navigation></Navigation>
    </StyledHeader>
  );
};


const StyledHeader = styled.header`
    background: rgba(15, 191, 97, 0.1);
    display: flex;
    justify-content: space-between;
`