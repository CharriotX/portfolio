import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Navigation } from "../../components/navigation/Navigation";
import { Container } from "../../components/Container";
import { FlexContainer } from "../../components/flexContainer/FlexContainer";

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexContainer justify="space-around" align="center">
          <Logo />
          <Navigation></Navigation>
        </FlexContainer>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background: rgba(15, 191, 97, 0.1);
`;
