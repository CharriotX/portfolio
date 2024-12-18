import React from "react";
import styled from "styled-components";

type SectionTitlePropsType = {
  margin?: string;
};

export const SectionTitle = styled.h2<SectionTitlePropsType>`
  color: rgba(15, 191, 97, 1);
  font-family: Roboto;
  font-size: 40px;
  font-weight: 700;
  line-height: 30px;
  margin: ${(props) => props.margin || "0"};
`;
