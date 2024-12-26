import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/Theme";

const items = ["All", "UX/UI Design", "Web Design", "Frontend Development"];

export const WorksNavList = () => {
  return (
    <StyledWorksNavigation>
      <NavList>
        {items.map((item) => {
          return (
            <Item>
              <Link>{item}</Link>
            </Item>
          );
        })}
      </NavList>
    </StyledWorksNavigation>
  );
};

const StyledWorksNavigation = styled.nav``;

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  max-width: 545px;
  width: 100%;
  margin: 75px auto 95px;
`;

const Item = styled.li`
  min-width: 50px;
  &:hover {
    color: ${theme.colors.sectionTitleFont};
    text-decoration-line: underline;
    text-decoration-style: solid;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
  }
`;

const Link = styled.a`
  font-size: 18px;
  font-weight: 500;
  line-height: 30px;
  cursor: pointer;
`;
