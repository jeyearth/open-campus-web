import React from 'react';
import styled from 'styled-components';

const MyHeroSection = styled.section`
  background-image: url('/hero-background.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  /* text-align: center; */
  height: 120vh;
  position: relative;
`;

const HeroContentWrapper = styled.div`
  display: flex;
  /* justify-content: space-between; */
  /* align-items: flex-end; */
  width: 100%;
  max-width: 1100px;
  /* margin: 0 auto 32px auto; */
  padding: 0 32px;

  @media (max-width: 1080px) {
    max-width: 100%;
    flex-direction: column;
    /* align-items: center; */
    margin-bottom: 24px;
    /* padding: 0 8px; */
  }
`;

const HeroTitle = styled.h1`
  /* color: #007BFF; */
  color: ${(props) => props.theme.pallet.primary.main};
  font-size: 10rem;
  font-weight: bold;
  margin-bottom: 16px;
  text-shadow: 2px 3px 4px #808080;

  @media (max-width: 768px) {
    font-size: 5.5rem;
  }
`;

const HeroInfo = styled.p`
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 0;
  /* text-align: right; */
  padding: 14px 28px;
  width: 50%;
  height: 10%px;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.5),
    inset 0 -1px 0 rgba(255, 255, 255, 0.1),
    inset 0 0 20px 10px rgba(255, 255, 255, 1);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 80%;
    font-size: 1.4rem;
    margin-bottom: 24px;
  }
`;

const MyReserveButton = styled.a`
  display: inline-block;
  background: ${(props) => props.theme.pallet.orange.main};
  color: #fff;
  padding: 16px 40px;
  border-radius: 32px;
  font-size: 1.6rem;
  font-weight: bold;
  text-decoration: none;
  box-shadow: 0 4px 16px rgba(37, 99, 235, 0.15);
  transition: 0.2s;
  &:hover {
    background: #1d4ed8;
  }
  @media (max-width: 768px) {
    padding: 12px 32px;
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
          <span style={{ fontWeight: 'bold', fontSize: '1.3rem' }}>
            2025年7月20日（土）・8月24日（日） 10:00～16:00
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