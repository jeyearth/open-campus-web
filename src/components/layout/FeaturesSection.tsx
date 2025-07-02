import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../ui/SectionTitle';
import { FaLaptopCode } from "react-icons/fa";
import { SiFuturelearn } from "react-icons/si";
import { GiCircuitry } from "react-icons/gi";
import SectionTitleTwo from '../ui/SectionTitleTwo';

const features = [
  {
    icon: <FaLaptopCode size={56} style={{ marginBottom: 16, color: '#f59e42' }} />,
    title: '実践的PBL教育',
    desc: '企業連携プロジェクトや、社会課題解決型のPBL（Project Based Learning）で、即戦力となる力を養う。',
  },
  {
    icon: <GiCircuitry size={56} style={{ marginBottom: 16, color: '#22c55e' }} />,
    title: '最先端研究領域',
    desc: 'AI、データサイエンス、IoT、サイバーセキュリティなど、時代の最先端をいく研究テーマと設備。',
  },
  {
    icon: <SiFuturelearn size={56} style={{ marginBottom: 16, color: '#2563eb' }} />,
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

const MyCardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  flex-wrap: wrap;
`;

const MyFeatureCard = styled.div`
  background: ${(props) => props.theme.pallet.secondary.main};
  border-radius: 16px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.08);
  padding: 32px;
  width: 260px;
  min-height: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
`;

const MyFeatureHeadline = styled.h3`
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 12px;
  color: ${(props) => props.theme.pallet.heading.main};
`

const MyFeatureDesc = styled.p`
  font-size: 0.8rem;
  color: ${(props) => props.theme.pallet.subText.main};
`;

const FeaturesSection: React.FC = () => {
  return (
    <MyFeaturesSection>
      <MyFeatureWrapper>
        <SectionTitleTwo
          englishTitle="University Features"
          japaneseTitle="大学の特色"
        />
        <SectionTitle>
          JFUT情報学科の特色・強み
        </SectionTitle>
        <MyCardContainer>
          {features.map((f, i) => (
            <MyFeatureCard key={i}>
              {f.icon}
              <MyFeatureHeadline>{f.title}</MyFeatureHeadline>
              {/* <p style={{ fontSize: '1rem', color:  }}>{f.desc}</p> */}
              <MyFeatureDesc>{f.desc}</MyFeatureDesc>
            </MyFeatureCard>
          ))}
        </MyCardContainer>
      </MyFeatureWrapper>
    </MyFeaturesSection>
  );
};

export default FeaturesSection;