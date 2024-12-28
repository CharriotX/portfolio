import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";

const StyledSection = styled.section`
  margin-bottom: 140px;
`;

const TextBlock = styled.div``;

const Text = styled.p`
  ${font({
    color: theme.colors.secondaryFont,
    lineHeight: "30px",
    Fmax: 18,
    Fmin: 16,
  })}
  max-width: 550px;

  span {
    display: inline-block;
    padding-top: 37px;
  }
`;

const PhotoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 100;
  padding-top: 25px;

  &::before {
    content: "";
    display: inline-block;
    width: 280px;
    height: 420px;
    border: 3px solid ${theme.colors.sectionTitleFont};
    border-radius: 20px;

    position: absolute;
    top: 60px;
    right: 50px;
    z-index: -1;
  }

  @media ${theme.media.tablet} {
    &::before {
      top: 15px;
      right: 20px;
    }
  }
`;

const List = styled.ol`
  -moz-column-count: 2;
  -webkit-column-count: 2;
  column-count: 2;
  height: 200px;
`;

const Item = styled.li`
  padding: 15px 0;

  span {
    margin-left: 10px;
  }
`;

export const S = {
  StyledSection,
  TextBlock,
  Text,
  PhotoContainer,
  PhotoWrapper,
  List,
  Item,
};
