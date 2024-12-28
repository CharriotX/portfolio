import styled from "styled-components";
import { FlexContainer } from "../../components/flexContainer/FlexContainer";
import { theme } from "../../styles/Theme";

const Footer = styled.footer`
  background-color: ${theme.colors.secondaryBg};
  display: flex;
  align-items: end;

  @media ${theme.media.mobile} {
    ${FlexContainer} {
      flex-direction: column;
      text-align: center;
      gap: 20px;
    }
  }
`;

const StyledText = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 30px;
`;

const IconNavigation = styled.nav``;

const IconList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IconItem = styled.li`
  &:not(:nth-last-child(-n + 1)) {
    margin-right: 20px;
  }
  cursor: pointer;
`;

const IconLink = styled.a``;

export const S = {
  Footer,
  StyledText,
  IconNavigation,
  IconList,
  IconItem,
  IconLink,
};
