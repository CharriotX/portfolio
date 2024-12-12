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
`;
