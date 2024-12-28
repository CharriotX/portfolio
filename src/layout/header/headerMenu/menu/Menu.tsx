import React from "react";
import { PrimaryButton } from "../../../../components/button/PrimaryButton";
import { S } from "../HeaderMenu_Styles";

export const Menu: React.FC<{ menuItems: Array<string> }> = (props: {
  menuItems: Array<string>;
}) => {
  return (
    <S.MenuList>
      {props.menuItems.map((item, index) => {
        return (
          <S.MenuItem key={index}>
            <S.MenuLink href="#">{item}</S.MenuLink>
          </S.MenuItem>
        );
      })}
      <S.MenuItem>
        <PrimaryButton color={"${theme.colors.primaryFont}"}>
          Resume
        </PrimaryButton>
      </S.MenuItem>
    </S.MenuList>
  );
};
