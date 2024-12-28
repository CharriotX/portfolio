import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { PrimaryButton } from "../../../components/button/PrimaryButton";

const StyledMain = styled.section`
  background-color: rgba(15, 191, 97, 0.1);
  margin-bottom: 140px;

  img {
    margin: 47px 0 92px;
  }
`;

const TitleBlock = styled.div`
  max-width: 476px;
  display: flex;
  flex-direction: column;
  margin-top: -20px;
  margin-top: 100px;

  ${PrimaryButton}:hover {
    color: white;
  }
`;

const LittleText = styled.span`
  font-size: 30px;
  color: ${theme.colors.sectionTitleFont};
`;

const MainTitle = styled.h2`
  font-family: "Poppins";
  font-weight: 700;
  font-size: 60px;
  line-height: 70px;
  color: ${theme.colors.primaryFont};
  margin: 7px 0 21px;
`;

const Text = styled.p`
  font-size: 18px;
  line-height: 30px;
  font-weight: 400px;
  color: ${theme.colors.secondaryFont};
`;

export const S = {
  StyledMain,
  TitleBlock,
  LittleText,
  MainTitle,
  Text,
};
