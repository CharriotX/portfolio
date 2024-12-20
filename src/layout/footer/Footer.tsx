import React from "react";
import styled from "styled-components";
import { FlexContainer } from "../../components/flexContainer/FlexContainer";
import { Icon } from "../../components/icon/Icon";
import { Container } from "../../components/Container";
import { theme } from "../../styles/Theme";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FlexContainer
          justify="space-between"
          align="center"
          margin="0 0 60px"
        >
          <StyledText>Designed and developed by Rostam Sadiqi 2021</StyledText>
          <IconNavigation>
            <IconList>
              <IconItem>
                <IconLink>
                  <Icon
                    iconId="social1"
                    height="23px"
                    width="21.89px"
                    viewBox="0 0 21.89 21.88"
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
  background-color: ${theme.colors.secondaryBg};
  display: flex;
  align-items: end;
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
  &:not(:nth-last-child(-n+1)) {
    margin-right: 20px;
}
  cursor: pointer;
`;

const IconLink = styled.a``;
