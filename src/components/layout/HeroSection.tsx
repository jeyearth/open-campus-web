import React from 'react';
import styled from 'styled-components';

const MyHeroSection = styled.section`
  background-image: url('/hero-background.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 56px 0 0 0; /* NavBarの高さ分を考慮 */
  
  @media (max-width: 768px) {
    height: 100vh;
    padding: 56px 16px 0 16px;
  }
`;

const HeroContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 48px auto;
  padding: 0 32px;
  gap: 48px;

  @media (max-width: 1024px) {
    max-width: 100%;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 32px;
    margin-bottom: 32px;
    padding: 0 16px;
  }
`;

const HeroTitle = styled.h1`
  color: ${(props) => props.theme.pallet.primary.main};
  font-size: 8rem;
  font-weight: bold;
  margin-bottom: 0;
  text-shadow: 2px 3px 4px #808080;
  line-height: 0.9;
  text-align: left;

  @media (max-width: 1024px) {
    font-size: 6rem;
    text-align: center;
    margin-bottom: 16px;
  }

  @media (max-width: 768px) {
    font-size: 4rem;
  }

  @media (max-width: 480px) {
    font-size: 3.2rem;
  }
`;

const HeroInfo = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 0;
  padding: 20px 32px;
  max-width: 480px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.5),
    inset 0 -1px 0 rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
  text-align: center;

  @media (max-width: 1024px) {
    max-width: 100%;
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 16px 24px;
    margin-bottom: 24px;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 14px 20px;
  }
`;

const MyReserveButton = styled.a`
  display: inline-block;
  background: ${(props) => props.theme.pallet.orange.main};
  color: #fff;
  padding: 18px 48px;
  border-radius: 32px;
  font-size: 1.4rem;
  font-weight: bold;
  text-decoration: none;
  box-shadow: 0 4px 16px rgba(255, 107, 0, 0.3);
  transition: all 0.2s;
  &:hover {
    background: #e55a00;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 107, 0, 0.4);
  }

  @media (max-width: 768px) {
    padding: 14px 36px;
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    padding: 12px 32px;
    font-size: 1.1rem;
  }
`;

const HeroSection: React.FC = () => {
  return (
    <MyHeroSection>
      <HeroContentWrapper>
        <HeroTitle>
          JFUT<br />
          OPEN<br />
          CAMPUS<br />
          2025
        </HeroTitle>
        <HeroInfo>
          オープンキャンパス開催日程：<br />
          <span style={{ fontWeight: 'bold', fontSize: '1.1em', color: '#2563eb' }}>
            2025年7月20日（土）・8月24日（日）<br />
            10:00～16:00
          </span>
        </HeroInfo>
      </HeroContentWrapper>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <MyReserveButton href="#reserve">
          今すぐ予約する！
        </MyReserveButton>
      </div>
    </MyHeroSection>
  );
};

export default HeroSection;