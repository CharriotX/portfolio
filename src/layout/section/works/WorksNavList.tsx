import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/Theme";

const items = ["All", "UX/UI Design", "Web Design", "Frontend Development"];

export const WorksNavList = () => {
  return (
    <StyledWorksNavigation>
        {items.map((item) => {
          return (
            <Item>
              <Link>{item}</Link>
            </Item>
          );
        })}
    </StyledWorksNavigation>
  );
};

const StyledWorksNavigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap:40px;
  margin: 45px 0 95px;
`;

const Item = styled.li`

&:hover{
  color:${theme.colors.sectionTitleFont};
text-decoration-line: underline;
text-decoration-style: solid;
text-underline-position: from-font;
text-decoration-skip-ink: none;

}

`

const Link = styled.a `
font-size: 18px;
font-weight: 500;
line-height: 30px;
cursor: pointer;
`
