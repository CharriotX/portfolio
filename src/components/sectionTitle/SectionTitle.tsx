import React from "react";
import styled from "styled-components";
import { font } from "../../styles/Common";
import { theme } from "../../styles/Theme";

type SectionTitlePropsType = {
  margin?: string;
};

export const SectionTitle = styled.h2<SectionTitlePropsType>`
   ${font({color: theme.colors.sectionTitleFont, weight: 700, lineHeight: "30px", Fmax: 40, Fmin: 36})}
  margin: ${(props) => props.margin || "0"};
`;
