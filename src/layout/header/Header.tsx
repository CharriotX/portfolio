import React, { useEffect, useState } from "react";
import { Logo } from "../../components/logo/Logo";
import { Container } from "../../components/Container";
import { FlexContainer } from "../../components/flexContainer/FlexContainer";
import { MobileNavigation } from "./headerMenu/mobileNavigation/MobileNavigation";
import { S } from "./Header_Styles";
import { DesktopNavigation } from "./headerMenu/headerNavigation/DesktopNavigation";

export const Header: React.FC = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 768;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const menuItems = ["Home", "About", "Services", "My work"];

  return (
    <S.Header>
      <Container>
        <FlexContainer justify="space-between" align="center">
          <Logo />
          {width > breakpoint ? (
            <DesktopNavigation menuItems={menuItems}></DesktopNavigation>
          ) : (
            <MobileNavigation menuItems={menuItems}></MobileNavigation>
          )}
        </FlexContainer>
      </Container>
    </S.Header>
  );
};
