import React from "react";
import { FlexContainer } from "../../components/flexContainer/FlexContainer";
import { Icon } from "../../components/icon/Icon";
import { Container } from "../../components/Container";
import { S } from "./Footer_Styles";

const iconsData = [
  {
    iconId: "social1",
    height: "23px",
    width: "21.89px",
    viewBox: "0 0 21.89 21.88",
  },
  {
    iconId: "social2",
    height: "24.22px",
    width: "24.22px",
    viewBox: "0 0 25 25",
  },
  {
    iconId: "social3",
    height: "21.88px",
    width: "21.88px",
    viewBox: "0 0 22 22",
  },
  {
    iconId: "social4",
    height: "21.88px",
    width: "21.88px",
    viewBox: "0 0 22 22",
  },
];

export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <Container>
        <FlexContainer
          justify="space-between"
          align="center"
          margin="200px 0 60px"
        >
          <S.StyledText>
            Designed and developed by Rostam Sadiqi 2021
          </S.StyledText>
          <S.IconNavigation>
            <S.IconList>
              {iconsData.map((item) => {
                return (
                  <S.IconItem key={item.iconId}>
                    <S.IconLink>
                      <Icon
                        iconId={item.iconId}
                        height={item.height}
                        width={item.width}
                        viewBox={item.viewBox}
                      ></Icon>
                    </S.IconLink>
                  </S.IconItem>
                );
              })}
            </S.IconList>
          </S.IconNavigation>
        </FlexContainer>
      </Container>
    </S.Footer>
  );
};
