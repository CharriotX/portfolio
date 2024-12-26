import React from "react";
import styled, { css } from "styled-components";
import { PrimaryButton } from "../../../components/button/PrimaryButton";
import { theme } from "../../../styles/Theme";

export const MobileNavigation = () => {
  return (
    <StyledMobileMenu>
      <BurgerButton isOpen={false}>
        <span></span>
      </BurgerButton>
      <MobileMenuPopup isOpen={false}>
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
      </MobileMenuPopup>
    </StyledMobileMenu>
  );
};

const StyledMobileMenu = styled.nav`
  display: none;
  @media ${theme.media.tablet} {
    display:block;
  }
`;

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: ${theme.colors.primaryBg};
  display: none;
  z-index: 9999;

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      display: flex;
      justify-content: center;
      align-items: center;
    `}

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }
`;
const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: -100px;
  right: -100px;
  width: 200px;
  height: 200px;
  z-index: 999999;


  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: black;
    position: absolute;
    left: 40px;
    bottom: 50px;

    ${(props) =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
        background-color: rgba(255, 255, 255, 0);
      `}

    &::before {
      content: "";
      background-color: black;
      display: block;
      width: 36px;
      height: 2px;
      position: absolute;
      transform: translateY(-10px);

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(-45deg) translateY(0);
        `}
    }

    &::after {
      content: "";
      background-color: black;
      display: block;
      width: 24px;
      height: 2px;
      position: absolute;
      transform: translateY(10px);

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(45deg) translateY(0);
          width: 36px;
        `}
    }
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
