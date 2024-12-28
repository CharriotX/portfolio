import React from "react";
import { FlexContainer } from "../../../components/flexContainer/FlexContainer";
import { ContactCard } from "./ContactCard";

export const Contact: React.FC = () => {
  return (
    <FlexContainer justify="center">
      <ContactCard></ContactCard>
    </FlexContainer>
  );
};
