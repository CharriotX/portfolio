import styled from "styled-components";
import { theme } from "../../../styles/Theme";

//Works

const Works = styled.section``;

const Subtitle = styled.div`
  margin-bottom: 16px;
  color: ${theme.colors.secondaryFont};
`;

//Works Nav List

const WorksNavigation = styled.nav``;

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

//Works Cards

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 26px;

  img {
    border: 1px solid rgba(196, 196, 196, 1);
  }

  @media ${theme.media.mobile} {
    img {
      max-width: 100%;
      height: 300px;
    }
  }
`;

export const S = {
  Works,
  Subtitle,
  WorksNavigation,
  NavList,
  Item,
  Link,
  Cards,
};
