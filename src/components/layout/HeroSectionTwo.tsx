import React from 'react';
import styled from 'styled-components';

const MyHeroSection = styled.section`
  background: ${(props) => props.theme.pallet.secondary.main};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeroContentWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    max-width: 1200px;
    padding: 0 32px;

    @media (max-width: 1024px) {
        max-width: 100%;
        /* flex-direction: column; */
        align-items: center;
    }

    @media (max-width: 768px) {
        padding: 0 16px;
    }
`;

const LeftWrapper = styled.div`
    /* background-color: aqua; */
    flex: 0.8;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-right: 60px;

    @media (max-width: 1024px) {
        padding-right: 20px;
    }

    @media (max-width: 768px) {
        /* flex: 0.7; */
        width: 60%;
        padding-right: 0;
    }
`;

const LeftContainerOne = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    padding: 20px;
    gap: 20px;
`;

const HeroCapsule1 = styled.div`
    width: 100%;
    height: 120px;
    background-color: ${(props) => props.theme.pallet.primarySecond.main};
    margin-top: 4%;
    margin-left: -60%;
    border-radius: 9999px;

    @media (max-width: 1024px) {
        margin-left: -300px;
        margin-top: -100px;
    }

    @media (max-width: 768px) {
        width: 400px;
        margin-left: -40%;
        margin-top: -200px;
    }

    @media (max-width: 480px) {
        margin-left: -240px;
    }
`;

const HeroCapsule2 = styled.div`
    width: 160px;
    height: 500px;
    background-color: ${(props) => props.theme.pallet.primary.main};
    margin-top: -300px;
    /* margin-left: 30%; */
    border-radius: 9999px;
    /* @media (max-width: 1024px) {
        width: 120px;
        height: 150px;
        margin-top: -5%;
    } */
    @media (max-width: 1024px) {
        margin-top: -400px;
    }
    
    @media (max-width: 768px) {
        margin-top: -500px;
        width: 20%;
    }
    
    /* @media (max-width: 480px) {
        width: 80px;
        height: 100px;
    } */
`;

const LeftContainerTwo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    height: 100%;
    padding: 20px;
    gap: 20px;
`;

const HeroTitle = styled.h1`
    color: ${(props) => props.theme.pallet.primary.main};
    font-size: 8rem;
    font-weight: 900;
    line-height: 0.9;
    font-family: 'Inter', sans-serif;
    margin-bottom: 40px;

    @media (max-width: 1024px) {
    font-size: 7rem;
  }

  @media (max-width: 768px) {
    font-size: 14vw;
  }

  @media (max-width: 480px) {
    font-size: 13vw;
  }
`;

const HeroTitleSpan = styled.span`
    font-size: 5rem;
    font-weight: 900;
    line-height: 0.9;
    font-family: 'Inter', sans-serif;

    @media (max-width: 1024px) {
        font-size: 4rem;
    }

    @media (max-width: 768px) {
        font-size: 8vw;
    }
`;

const LeftContainerThree = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    padding: 20px;
    gap: 20px;
`;

const HeroCapsule3 = styled.div`
    width: 100px;
    height: 300%;
    background-color: ${(props) => props.theme.pallet.primary.main};
    margin-left: 12%;
    margin-bottom: -20%;
    border-radius: 9999px;

    @media (max-width: 1024px) {
        width: 80px;
        height: 300px;
        margin-bottom: -30%;
        margin-left: 2%;
    }

    @media (max-width: 768px) {
        width: 20%;
        margin-bottom: -50%;
    }

    @media (max-width: 480px) {
        margin-bottom: -80%;
        margin-left: 0;
    }
`;

const HeroCapsule4 = styled.div`
    width: 140px;
    height: 300%;
    background-color: ${(props) => props.theme.pallet.primarySecond.main};
    margin-left: 30%;
    margin-bottom: -20%;
    border-radius: 9999px;

    @media (max-width: 1024px) {
        width: 140px;
        height: 200px;
        margin-bottom: -60%;
    }

    @media (max-width: 768px) {
        width: 20%;
        margin-bottom: -100%;
    }

    @media (max-width: 480px) {
        margin-bottom: -200%;
    }
`;

// RightWrapper
const RightWrapper = styled.div`
    /* background-color: lightcoral; */
    flex: 0.2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 768px) {
        flex: 0.3;
    }
`;

const HeroImageContainer = styled.div`
    width: 100%;
    max-width: 24rem;
    height: 60vh;
    position: relative;
`;

const HeroImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 70%;
    top: -20%;
    border-radius: 9999px;
    position: absolute;
`;

const DateCircle = styled.div`
    background-color: ${(props) => props.theme.pallet.primary.main};
    border-radius: 50%;
    width: 100%;
    aspect-ratio: 1;
    margin-bottom: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.pallet.baseWhite.main};
`;

const DateCircleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
    margin-bottom: 20px;
`;

const DateYear = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 12px;
    @media (max-width: 1024px) {
        font-size: 1rem;
    }
`;

const DateMain = styled.div`
    font-size: 3rem;
    font-weight: bold;
    line-height: 1;
    @media (max-width: 1024px) {
        font-size: 5.5vw;
    }

    @media (max-width: 768px) {
        font-size: 6.5vw;
    }
`;

const DateMainSpan = styled.span`
    font-size: 1.5rem;
    @media (max-width: 1024px) {
        font-size: 1rem;
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
  z-index: 9999;
  bottom: 14vh;
  
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

const HeroSectionTwo: React.FC = () => {
    return (
        <MyHeroSection>
            <HeroContentWrapper>
                <LeftWrapper>
                    <LeftContainerOne>
                        <HeroCapsule1 />
                        <HeroCapsule2 />
                    </LeftContainerOne>
                    <LeftContainerTwo>
                        <HeroTitle>
                            {/* <span style={{ fontSize: '5rem' }}>JFUT<br /></span> */}
                            <HeroTitleSpan>JFUT<br /></HeroTitleSpan>
                            OPEN<br />
                            CAMPUS<br />
                        </HeroTitle>
                    </LeftContainerTwo>
                    <LeftContainerThree>
                        <HeroCapsule3 />
                        <HeroCapsule4 />
                    </LeftContainerThree>
                </LeftWrapper>
                <RightWrapper>
                    <HeroImageContainer>
                        <HeroImage src="/hero-img-01.jpeg" alt="Hero Image" />
                    </HeroImageContainer>
                    <DateCircle>
                        <DateCircleWrapper>
                            <DateYear>2025</DateYear>
                            <DateMain>
                                8.2<DateMainSpan>[土]</DateMainSpan><br />
                                8.3<DateMainSpan>[日]</DateMainSpan>
                            </DateMain>
                        </DateCircleWrapper>
                    </DateCircle>
                </RightWrapper>
            </HeroContentWrapper>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <MyReserveButton href="#reserve">
                    予約はこちらから！
                </MyReserveButton>
            </div>
        </MyHeroSection>
    );
}

export default HeroSectionTwo;