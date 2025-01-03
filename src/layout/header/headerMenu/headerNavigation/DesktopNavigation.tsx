import { Menu } from "../menu/Menu";
import React from "react";
import { S } from "../HeaderMenu_Styles";

export const DesktopNavigation: React.FC<{
  menuItems: Array<string>;
}> = (props: { menuItems: Array<string> }) => {
  return (
    <S.DesktopMenu>
      <Menu menuItems={props.menuItems}></Menu>
    </S.DesktopMenu>
  );
};
