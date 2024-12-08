import React from "react";
import styled from "styled-components";
import { FlexContainer } from "../../../components/flexContainer/FlexContainer";
import { SectionTitle } from "../../../components/sectionTitle/SectionTitle";
import { WorksNavigation } from "./WorksNavigation";
import { WorksCard } from "./WorksCard";
import work1 from "../../../accets/images/work1.webp"
import work2 from "../../../accets/images/work2.webp"
import work3 from "../../../accets/images/work3.webp"
import work4 from "../../../accets/images/work4.webp"
import { PrimaryButton } from "../../../components/button/PrimaryButton";

export const Works = () => {
  return (
    <StyledWorks>
      <FlexContainer justify="" direction="column" align="center">
        <div>Portfolio</div>
        <SectionTitle>What I Do</SectionTitle>
      </FlexContainer>
      <WorksNavigation></WorksNavigation>
      <FlexContainer wrap="wrap" justify="center">
        <WorksCard imageSrc={work1}></WorksCard>
        <WorksCard imageSrc={work2}></WorksCard>
        <WorksCard imageSrc={work3}></WorksCard>
        <WorksCard imageSrc={work4}></WorksCard>
      </FlexContainer>
      <FlexContainer justify="center">
        <PrimaryButton padding="12px 64.5px">See all</PrimaryButton>
      </FlexContainer>
    </StyledWorks>
  );
};

const StyledWorks = styled.section``;

