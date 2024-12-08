import React from "react";
import styled from "styled-components";

export const WorksNavigation = () => {
  return (
    <StyledWorksNavigation>
      <li>
        <a>All</a>
      </li>
      <li>
        <a>UX/UI Design</a>
      </li>
      <li>
        <a>Web Design</a>
      </li>
      <li>
        <a>Fron End Development</a>
      </li>
    </StyledWorksNavigation>
  );
};

const StyledWorksNavigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`;
