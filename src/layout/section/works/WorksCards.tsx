import React from "react";
import styled from "styled-components";
import { Photo } from "../../../components/photo/Photo";

import work1 from "../../../accets/images/work1.webp";
import work2 from "../../../accets/images/work2.webp";
import work3 from "../../../accets/images/work3.webp";
import work4 from "../../../accets/images/work4.webp";
import { theme } from "../../../styles/Theme";

export const WorksCards = () => {
  return (
    <StyledCards>
      <Photo src={work1} width="545px" height="350px"></Photo>
      <Photo src={work2} width="545px" height="350px"></Photo>
      <Photo src={work3} width="545px" height="350px"></Photo>
      <Photo src={work4} width="545px" height="350px"></Photo>
    </StyledCards>
  );
};

const StyledCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 26px;

  img{
    border: 1px solid rgba(196, 196, 196, 1)
  }

  @media ${theme.media.mobile} {
    img{
      max-width: 100%;
      height: 300px;
    }
  }
`;
