import styled from "styled-components";

export const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 32px;
  color: ${(props) => props.theme.pallet.heading.main};
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 16px;
  }
`;
