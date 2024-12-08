import React from "react";
import styled from "styled-components";
import { FlexContainer } from "../../components/flexContainer/FlexContainer";
import { Icon } from "../../components/icon/Icon";
import { Container } from "../../components/Container";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FlexContainer>
          <div>Designed and developed by Rostam Sadiqi 2021</div>
          <IconList>
            <IconLink>
              <Icon iconId="social1"></Icon>
            </IconLink>
            <IconLink>
              <Icon iconId="social2"></Icon>
            </IconLink>
            <IconLink>
              <Icon iconId="social3"></Icon>
            </IconLink>
            <IconLink>
              <Icon iconId="social4"></Icon>
            </IconLink>
          </IconList>
        </FlexContainer>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
`;

const IconList = styled.ul`
  display: flex;
  gap: 30px;
`;

const IconLink = styled.li``;
