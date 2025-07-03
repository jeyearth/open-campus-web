import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  height: 300px;
  background: ${(props) => props.theme.pallet.heading.main};
  color: #fff;
  text-align: center;
  padding: 18px 0;
  font-size: 0.98rem;
  letter-spacing: 0.01em;
  margin-top: 48px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-top: 0;

  @media (max-width: 768px) {
    height: 200px;
    padding: 16px;
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`;

const FooterText = styled.span`
  color: #fff;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const FooterSeparator = styled.span`
  color: #fff;

  @media (max-width: 768px) {
    display: none;
  }
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: underline;
  font-weight: bold;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterText>© 2024 JFUT 日本未来工科大学</FooterText>
        <FooterSeparator>|</FooterSeparator>
        <FooterLink href="mailto:info@jfu.ac.jp">お問い合わせ</FooterLink>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;