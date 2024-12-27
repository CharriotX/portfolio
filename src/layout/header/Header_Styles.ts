import styled from "styled-components";
import { theme } from "../../styles/Theme";

const Header = styled.header`
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

export const S = {
  Header,
};
