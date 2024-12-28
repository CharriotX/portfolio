import styled from "styled-components";
import { font } from "../../../styles/Common";
import { theme } from "../../../styles/Theme";

const CardWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(15, 191, 97, 1);
  border-radius: 15px;
  max-width: 1116px;
  width: 100%;
  color: ${theme.colors.contactCardFont};
  padding: 0 53px 0 45px;

  position: relative;
  top: 45px;
  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.25);
  margin: 0 15px;

  @media ${theme.media.mobile} {
    flex-direction: column;
    padding: 0 20px 20px 20px;
  }
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 72px 0;

  @media ${theme.media.mobile} {
    padding: 15px 0;
  }
`;

const TriangleRotateBLock = styled.div`
  position: relative;
  transform: rotate(-43deg);
`;

const TriangleBlock = styled.div`
  background-color: white;
  opacity: 5%;

  position: absolute;
  left: 550px;
  bottom: -290px;
  transform: rotate(-43deg);

  &:before,
  &:after {
    content: "";
    position: absolute;
    background-color: inherit;
  }
  &,
  &:before,
  &:after {
    width: 6em;
    height: 6em;
    border-top-right-radius: 30%;
  }
  & {
    transform: rotate(-60deg) skewX(-30deg) scale(1, 0.866);
  }
  &:before {
    transform: rotate(-135deg) skewX(-45deg) scale(1.414, 0.707)
      translate(0, -50%);
  }
  &:after {
    transform: rotate(135deg) skewY(-45deg) scale(0.707, 1.414) translate(50%);
  }
`;

const Title = styled.h2`
  ${font({
    weight: 500,
    color: theme.colors.contactCardFont,
    lineHeight: "52.73px",
    Fmax: 45,
    Fmin: 30,
  })}
`;

const Text = styled.h2`
  ${font({
    weight: 500,
    color: theme.colors.contactCardFont,
    lineHeight: "30px",
    Fmax: 18,
    Fmin: 16,
  })}
  margin-top: 24px;
`;
const ButtonBlock = styled.div``;

export const S = {
  CardWrap,
  TextBlock,
  TriangleRotateBLock,
  TriangleBlock,
  Title,
  Text,
  ButtonBlock,
};
