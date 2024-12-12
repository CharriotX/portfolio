import React from "react";
import styled from "styled-components";
import { FlexContainer } from "../../components/flexContainer/FlexContainer";
import { Icon } from "../../components/icon/Icon";
import { Container } from "../../components/Container";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FlexContainer justify="space-between" align="center">
          <StyledText>Designed and developed by Rostam Sadiqi 2021</StyledText>
          <IconNavigation>
            <IconList>
              <IconItem>
                <IconLink>
                  <Icon
                    iconId="social1"
                    height="21.88px"
                    width="21.88px"
                    viewBox="0 0 22 22"
                  ></Icon>
                </IconLink>
              </IconItem>
              <IconItem>
                <IconLink>
                  <Icon
                    iconId="social2"
                    height="24.22px"
                    width="24.22px"
                    viewBox="0 0 25 25"
                  ></Icon>
                </IconLink>
              </IconItem>
              <IconItem>
                <IconLink>
                  <Icon
                    iconId="social3"
                    height="21.88px"
                    width="21.88px"
                    viewBox="0 0 22 22"
                  ></Icon>
                </IconLink>
              </IconItem>
              <IconItem>
                <IconLink>
                  <Icon
                    iconId="social4"
                    height="21.88px"
                    width="21.88px"
                    viewBox="0 0 22 22"
                  ></Icon>
                </IconLink>
              </IconItem>
            </IconList>
          </IconNavigation>
        </FlexContainer>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  min-height: 300px;
`;

const StyledText = styled.p`
  padding: 10px;
`;

const IconNavigation = styled.nav``;

const IconList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
`;

const IconItem = styled.li`
  margin: 8px;
`;

const IconLink = styled.a``;
