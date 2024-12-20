import { ReactNode } from "react";
import styled from "styled-components";

type PrimaryButtonPropsType = {
  children?: ReactNode;
  background?: string;
  color?: string;
  padding?: string;
  margin?: string;
  lineHeight?: string;
  fontSize?: string;
};

export const PrimaryButton = styled.button<PrimaryButtonPropsType>`
  border: none;
  background: ${(props) => props.background || "rgba(15, 191, 97, 1)"};
  color: ${props => props.color || "rgba(255, 255, 255, 1)"};
  padding: ${props => props.padding || "12px 40px"};
  margin: ${props => props.margin || "0"};
  border-radius: 50px;
  line-height: ${props => props.lineHeight || "30px"};
  font-size: ${props => props.fontSize || "18px"};
  cursor: pointer;
`;
