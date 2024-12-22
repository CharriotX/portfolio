import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Navigation } from "../../components/navigation/Navigation";
import { Container } from "../../components/Container";
import { FlexContainer } from "../../components/flexContainer/FlexContainer";
import { theme } from "../../styles/Theme";

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexContainer justify="space-between" align="center">
          <Logo />
          <Navigation></Navigation>
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

  &::before {
    display: inline-block;
    position: absolute;
    content: "";
    width: 190px;
    height: 190px;
    border: 20px solid ${theme.colors.sectionTitleFont};
    border-radius: 50%;
    top: 142px;
    left: -5%;
  }

  &::after {
    display: inline-block;
    position: absolute;
    content: "";
    width: 190px;
    height: 190px;
    border: 20px solid ${theme.colors.sectionTitleFont};
    border-radius: 50%;
    top: -19px;
    left: 95%;
  }
`;
