import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { HeaderNavigation } from "./headerNavigation/HeaderNavigation";
import { Container } from "../../components/Container";
import { FlexContainer } from "../../components/flexContainer/FlexContainer";
import { theme } from "../../styles/Theme";
import { MobileNavigation } from "./mobileNavigation/MobileNavigation";

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexContainer justify="space-between" align="center">
          <Logo />
          <HeaderNavigation></HeaderNavigation>
          <MobileNavigation></MobileNavigation>
        </FlexContainer>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background: ${theme.colors.secondaryBg};
  min-height: 100px;
  display: flex;
  align-items: center;
  position: relative;
  white-space: nowrap;

  /* &::after {
    display: inline-block;
    position: absolute;
    content: "";
    width: 190px;
    height: 190px;
    border: 20px solid ${theme.colors.sectionTitleFont};
    border-radius: 50%;
    top: -20px;
    right: -10%;
  } */
`;
