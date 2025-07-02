import React from 'react';
import styled from 'styled-components';

const MyHeroSection = styled.section`
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 56px 0 0 0;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      radial-gradient(circle at 20% 80%, rgba(37, 99, 235, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(37, 99, 235, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(37, 99, 235, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    height: 100vh;
    padding: 56px 16px 0 16px;
  }
`;

const HeroContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 48px auto;
  padding: 0 32px;
  gap: 48px;
  position: relative;
  z-index: 2;

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

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  
  @media (max-width: 1024px) {
    align-items: center;
    text-align: center;
  }
`;

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 24px;
  flex: 1;
  
  @media (max-width: 1024px) {
    align-items: center;
  }
`;

const HeroTitle = styled.h1`
  color: ${(props) => props.theme.pallet.primary.main};
  font-size: 6rem;
  font-weight: bold;
  margin-bottom: 24px;
  line-height: 0.85;
  text-align: left;
  letter-spacing: -0.02em;

  @media (max-width: 1024px) {
    font-size: 5rem;
    text-align: center;
    margin-bottom: 16px;
  }

  @media (max-width: 768px) {
    font-size: 3.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2.8rem;
  }
`;

const DateCircle = styled.div`
  background: ${(props) => props.theme.pallet.primary.main};
  border-radius: 50%;
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 8px 32px rgba(37, 99, 235, 0.3);
  
  @media (max-width: 768px) {
    width: 160px;
    height: 160px;
  }
`;

const DateYear = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 8px;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const DateMain = styled.div`
  font-size: 3rem;
  font-weight: 900;
  line-height: 0.9;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const StudentImage = styled.div`
  width: 240px;
  height: 160px;
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(37, 99, 235, 0.05) 100%);
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.pallet.primary.main};
  font-size: 1.2rem;
  font-weight: 600;
  box-shadow: 0 4px 20px rgba(37, 99, 235, 0.1);
  
  @media (max-width: 768px) {
    width: 200px;
    height: 140px;
    font-size: 1rem;
  }
`;

const GeometricShape1 = styled.div`
  position: absolute;
  top: 10%;
  right: 15%;
  width: 120px;
  height: 200px;
  background: ${(props) => props.theme.pallet.primary.main};
  border-radius: 0 0 60px 60px;
  opacity: 0.8;
  
  @media (max-width: 768px) {
    width: 80px;
    height: 140px;
    right: 5%;
  }
`;

const GeometricShape2 = styled.div`
  position: absolute;
  bottom: 20%;
  left: 10%;
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, ${(props) => props.theme.pallet.primary.main} 0%, rgba(37, 99, 235, 0.7) 100%);
  border-radius: 0 50px 0 50px;
  opacity: 0.6;
  
  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    left: 5%;
  }
`;

const GeometricShape3 = styled.div`
  position: absolute;
  top: 30%;
  left: 5%;
  width: 80px;
  height: 160px;
  background: rgba(37, 99, 235, 0.3);
  border-radius: 40px;
  
  @media (max-width: 768px) {
    width: 50px;
    height: 100px;
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
  position: relative;
  z-index: 3;
  
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

const HeroSectionNew: React.FC = () => {
  return (
    <MyHeroSection>
      <GeometricShape1 />
      <GeometricShape2 />
      <GeometricShape3 />
      
      <HeroContentWrapper>
        <LeftContent>
          <HeroTitle>
            JFUT<br />
            OPEN<br />
            CAMPUS<br />
            2025
          </HeroTitle>
        </LeftContent>
        
        <RightContent>
          <StudentImage>
            <img src="/hero-background.jpeg" alt="学生の写真" style={{ width: '100%', height: '100%', borderRadius: '40px', objectFit: 'cover' }} />
            {/* 学生の写真 */}
          </StudentImage>
          <DateCircle>
            <DateYear>2025</DateYear>
            <DateMain>
              8.2<span style={{ fontSize: '1.5rem' }}>[土]</span><br />
              8.3<span style={{ fontSize: '1.5rem' }}>[日]</span>
            </DateMain>
          </DateCircle>
        </RightContent>
      </HeroContentWrapper>
      
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <MyReserveButton href="#reserve">
          予約はこちらから！
        </MyReserveButton>
      </div>
    </MyHeroSection>
  );
};

export default HeroSectionNew;