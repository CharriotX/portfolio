import React from "react";
import styled from "styled-components";
import { PrimaryButton } from "../../../components/button/PrimaryButton";
import { theme } from "../../../styles/Theme";

export const HeaderNavigation = () => {
  return (
    <StyledMenu>
      <StyledList>
        <StyledItem>
          <StyledLink href="#">Home</StyledLink>
        </StyledItem>
        <StyledItem>
          <StyledLink href="#">About</StyledLink>
        </StyledItem>
        <StyledItem>
          <StyledLink href="#">Service</StyledLink>
        </StyledItem>
        <StyledItem>
          <StyledLink href="#">My work</StyledLink>
        </StyledItem>
        <StyledItem>
          <PrimaryButton color={"${theme.colors.primaryFont}"}>
            Resume
          </PrimaryButton>
        </StyledItem>
      </StyledList>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    align-items: center;
    gap: 30px;
  }

  @media ${theme.media.tablet} {
    display: none;
  }
`;

const StyledList = styled.ul``;

const StyledItem = styled.li``;

const StyledLink = styled.a`
  gap: 30px;
  color: ${theme.colors.primaryFont};
  font-family: "Roboto", serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;

  &:hover {
    color: ${theme.colors.sectionTitleFont};
  }
`;
