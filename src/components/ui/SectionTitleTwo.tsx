import React from "react";
import styled from "styled-components";

interface SectionTitleTwoProps {
  englishTitle: string;
  japaneseTitle: string;
}

const SectionTitleTwo: React.FC<SectionTitleTwoProps> = ({ 
  englishTitle,
  japaneseTitle
}) => {
  return (
    <TitleContainer>
      <EnglishTitle>{englishTitle}</EnglishTitle>
      <JapaneseTitle>{japaneseTitle}</JapaneseTitle>
    </TitleContainer>
  );
};

const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const EnglishTitle = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  color: #666;
  margin-bottom: 0.5rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const JapaneseTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.7rem;
  }
`;

export default SectionTitleTwo;