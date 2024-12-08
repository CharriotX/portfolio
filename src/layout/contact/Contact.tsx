import React from "react";
import styled from "styled-components";
import { FlexContainer } from "../../components/flexContainer/FlexContainer";
import { PrimaryButton } from "../../components/button/PrimaryButton";
import { ContactCard } from "./ContactCard";

export const Contact = () => {
  return (
    <FlexContainer justify="center">
        <ContactCard></ContactCard>
    </FlexContainer>
    
  );
};
