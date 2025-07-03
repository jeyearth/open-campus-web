import React from "react";
import styled from "styled-components";

interface ProgramsProps {
  programs: {
    image: string;
    title: string;
    subtitle: string;
  }[];
}

const ProgramsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 16px;
  margin-bottom: 32px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProgramItem = styled.div`
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  aspect-ratio: 16/9;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const ProgramImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProgramOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  padding: 20px 16px 16px;
  color: white;
`;

const ProgramTitle = styled.h4`
  font-size: 1.4rem;
  font-weight: bold;
  margin: 0 0 4px 0;
  color: white;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const ProgramSubtitle = styled.p`
  font-size: 0.9rem;
  margin: 0;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Programs: React.FC<ProgramsProps> = ({ programs }) => {
  return (
    <ProgramsContainer>
      {programs.map((program, index) => (
        <ProgramItem key={index}>
          <ProgramImage 
            src={`/programs/${program.image}`}
            alt={program.title}
          />
          <ProgramOverlay>
            <ProgramTitle>{program.title}</ProgramTitle>
            <ProgramSubtitle>{program.subtitle}</ProgramSubtitle>
          </ProgramOverlay>
        </ProgramItem>
      ))}
    </ProgramsContainer>
  );
};

export default Programs;