import React from "react";
import styled from "styled-components";

interface SectionTitleTwoProps {
  englishTitle: string;
  japaneseTitle: string;
  isLightTheme?: boolean;
}

const SectionTitleTwo: React.FC<SectionTitleTwoProps> = ({
  englishTitle,
  japaneseTitle,
  isLightTheme = true
}) => {
  return (
    <TitileWrapper>
      <TitleContainer>
        <EnglishTitle $isLightTheme={isLightTheme}>{englishTitle}</EnglishTitle>
        <JapaneseTitle>{japaneseTitle}</JapaneseTitle>
      </TitleContainer>
      <HorizontalLineFirst $isLightTheme={isLightTheme} />
      <HorizontalLineSecond $isLightTheme={isLightTheme} />
    </TitileWrapper>
  );
};

const TitileWrapper = styled.div`
    margin-top: 3rem;
    margin-bottom: 3rem;
`;

const TitleContainer = styled.div`
  text-align: center;
  position: relative;
`;

interface EnglishTitleProps {
  $isLightTheme: boolean;
}

const EnglishTitle = styled.p<EnglishTitleProps>`
  font-size: 5rem;
  font-weight: 900;
  color: ${(props) =>
    props.$isLightTheme
      ? props.theme.pallet.secondary.main
      : props.theme.pallet.baseWhite.main
  };
  margin: 0;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
  z-index: 1;
  
  @media (max-width: 768px) {
    font-size: 4rem;
  }
  
  @media (max-width: 480px) {
    font-size: 3rem;
  }
`;

const JapaneseTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => props.theme.pallet.heading.main};
  margin: 0;
  position: relative;
  z-index: 2;
  padding: 2rem 0;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    padding: 1.5rem 0;
  }
  
  @media (max-width: 480px) {
    font-size: 1.7rem;
    padding: 1rem 0;
  }
`;

const HorizontalLineFirst = styled.div<EnglishTitleProps>`
  background-color: ${(props) =>
    props.$isLightTheme
      ? props.theme.pallet.secondary.main
      : props.theme.pallet.baseWhite.main
  };
  border-radius: 9999px;
  height: 12px;
  width: 100%;
  margin-bottom: 10px;
`;

const HorizontalLineSecond = styled(HorizontalLineFirst)`
  margin-left: -40%;
`;

export default SectionTitleTwo;