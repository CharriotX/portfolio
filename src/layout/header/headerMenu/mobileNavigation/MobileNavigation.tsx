import React, { useState } from "react";
import { Menu } from "../menu/Menu";
import { S } from "../HeaderMenu_Styles";

export const MobileNavigation: React.FC<{
  menuItems: Array<string>;
}> = (props: { menuItems: Array<string> }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onBurgerClick = () => setIsOpen(!isOpen);

  return (
    <S.MobileMenu>
      <S.BurgerButton isOpen={isOpen} onClick={onBurgerClick}>
        <span></span>
      </S.BurgerButton>
      <S.MobileMenuPopup isOpen={isOpen} onClick={() => setIsOpen(false)}>
        <Menu menuItems={props.menuItems}></Menu>
      </S.MobileMenuPopup>
    </S.MobileMenu>
  );
};
