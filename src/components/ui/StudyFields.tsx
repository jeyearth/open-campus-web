import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

interface StudyFieldsProps {
  fields: {
    icon: string;
    fieldName: string;
    describe: string;
  }[];
}

const StudyFieldsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-top: 24px;
  margin: 12px auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StudyFieldItem = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;
  background-color: ${(props) => props.theme.pallet.secondary.main};
  border-radius: 16px;
`;

const StudyFieldIcon = styled.div`
  width: 60px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  font-weight: bold;
  flex-shrink: 0;
  overflow: hidden;
`;

const StudyFieldIconImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 8px;
`;

const StudyFieldContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const StudyFieldText = styled.span`
  color: ${(props) => props.theme.pallet.primary.main};
  font-size: 1.1rem;
  font-weight: 700;
`;

const StudyFieldDescription = styled.p`
  color: ${(props) => props.theme.pallet.subText.main};
  font-size: 0.85rem;
  line-height: 1.4;
  margin: 0;
`;

const StudyFields: React.FC<StudyFieldsProps> = ({ fields }) => {
  return (
    <StudyFieldsContainer>
      {fields.map((field, index) => (
        <StudyFieldItem
          key={index}
          variants={{
            offscreen: {
              y: 40,
              opacity: 0,
            },
            onscreen: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: index * 0.16,
              },
            },
          }}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0 }}
        >
          <StudyFieldIcon>
            <StudyFieldIconImage
              src={`/icons/${field.icon}`}
              alt={field.fieldName}
            />
          </StudyFieldIcon>
          <StudyFieldContent>
            <StudyFieldText>{field.fieldName}</StudyFieldText>
            <StudyFieldDescription>{field.describe}</StudyFieldDescription>
          </StudyFieldContent>
        </StudyFieldItem>
      ))}
    </StudyFieldsContainer>
  );
};

export default StudyFields;