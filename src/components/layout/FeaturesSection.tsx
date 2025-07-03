import React from "react";
import styled from "styled-components";
import SectionTitleTwo from "../ui/SectionTitleTwo";

const features = [
  {
    title: '実践的PBL教育',
    desc: '企業連携プロジェクトや、社会課題解決型のPBL（Project Based Learning）で、即戦力となる力を養う。',
  },
  {
    title: '最先端研究領域',
    desc: 'AI、データサイエンス、IoT、サイバーセキュリティなど、時代の最先端をいく研究テーマと設備。',
  },
  {
    title: '未来を切り拓くキャリア',
    desc: '幅広い分野への就職実績と、卒業生が描くキャリアパスの可能性。',
  },
];

const MyFeaturesSection = styled.section`
  background: ${(props) => props.theme.pallet.baseWhite.main};
  padding: 48px 0;
`;

const MyFeatureWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
`;

const FeaturesMainContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 200%;
  height: 50vh;
  justify-content: center;
  gap: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    height: auto;
    gap: 40px;
    padding: 16px;
  }
`;

const FeatureImgContainer = styled.div`
  width: 36%;
  height: 100%;
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(37, 99, 235, 0.05) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.pallet.primary.main};
  font-size: 1.2rem;
  font-weight: 600;
  box-shadow: 0 4px 20px rgba(37, 99, 235, 0.1);
  border-radius: 100px;
  overflow: hidden;
  margin-left: -24%;
  
  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
    margin-left: 0;
    border-radius: 50px;
  }
`;

const FeatureContentContainer = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: ${(props) => props.theme.pallet.secondary.main};
  border-radius: 100px;
  
  @media (max-width: 768px) {
    width: 100%;
    border-radius: 50px;
    padding: 24px;
  }
`;

const FeatureItem = styled.div`
  text-align: left;
  width: 50%;
  padding: 18px;
  padding-left: 60px;
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 16px 0;
    padding-left: 0;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 8px;
  color: ${(props) => props.theme.pallet.primary.main};
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const FeatureDesc = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.pallet.subText.main};
  width: 50vw;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.6;
    width: 100%;
  }

`;

const FeaturesSection: React.FC = () => {
  return (
    <MyFeaturesSection>
      <MyFeatureWrapper>
        <SectionTitleTwo
          englishTitle="Features"
          japaneseTitle="大学の特色"
          isLightTheme={true}
        />
        <FeaturesMainContainer>
          <FeatureImgContainer>
            <img
              src="/feature-img.jpeg"
              alt="Feature 1"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "20% 50%",
                transform: "scale(1.20)"
              }}
            />
          </FeatureImgContainer>
          <FeatureContentContainer>
            {features.map((f, i) => (
              <FeatureItem key={i}>
                <FeatureTitle>{f.title}</FeatureTitle>
                <FeatureDesc>{f.desc}</FeatureDesc>
              </FeatureItem>
            ))}
          </FeatureContentContainer>
        </FeaturesMainContainer>
      </MyFeatureWrapper>
    </MyFeaturesSection>
  );
};

export default FeaturesSection;