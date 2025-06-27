import React from 'react';
import styled from 'styled-components';

const facilities = [
    {
        title: 'Library',
        subtitle: '図書館',
        description: '圧倒的な蔵書数を誇る大学の知の拠点。集中して学習できる個人ブースも人気です。',
        img: '/library.jpeg'
    },
    {
        title: 'Cafeteria',
        subtitle: '学食',
        description: '日替わりランチが人気の学生食堂。仲間と語らい、午後の活力もチャージできます。',
        img: '/cafeteria.jpeg'
    },
    {
        title: 'PC Room',
        subtitle: 'PCルーム',
        description: '最新PCと大型モニターを完備。レポート作成から専門的な演習まで快適に利用できます。',
        img: '/pc-room.jpeg'
    },
    {
        title: 'Sports Center',
        subtitle: 'スポーツセンター',
        description: '最新マシンを備えたジムで気軽にリフレッシュ。体育館やグラウンドも充実しています。',
        img: '/sports-center.jpeg'
    }
];

const circles = [
    {
        title: 'プログラミング研究会',
        description: '仲間と切磋琢磨しながら、アプリ開発や競技プログラミングに挑戦できます。',
    },
    {
        title: 'AI研究会',
        description: '人工知能の最新技術を学び、実際にAIモデルを構築して社会課題の解決を目指します。',
    },
    {
        title: 'サイバーセキュリティ部',
        description: '情報セキュリティ技術を実践的に学び、CTF（Capture The Flag）大会にも出場します。',
    },
    {
        title: 'e-sportsサークル',
        description: 'チームで戦略を練り、様々なゲームタイトルで大会上位入賞を目指して活動しています。',
    },
    {
        title: 'デジタルアート部',
        description: 'ペンタブや3DCGソフトを使い、イラストや映像などデジタル作品を自由に創作します。',
    },
    {
        title: 'ロボット研究会',
        description: 'ロボットの設計からプログラミングまで、ものづくりの楽しさを追求する研究会です。',
    }
];

const CampusLifeSectionWrapper = styled.section`
  background: #f8fafc;
  padding: 48px 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

const MainTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: bold;
  margin-bottom: 48px;
  text-align: left;
  color: #1e293b;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 32px;
  }
`;

const SectionTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 32px;
  text-align: center;
  color: #2563eb;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 24px;
  }
`;

const FacilitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-bottom: 64px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 16px;
    margin-bottom: 48px;
  }
`;

const FacilityCard = styled.div`
  background: ${props => props.theme.pallet.baseWhite.main};
  border-radius: 16px;
  padding: 18px 18px;
  text-align: center;
  color: white;
  box-shadow: 0 4px 16px rgba(37, 99, 235, 0.2);
  
  @media (max-width: 768px) {
    padding: 24px 16px;
  }
`;

const FacilityImage = styled.img`
  width: 100%;
  /* height: 48px; */
  border-radius: 8px;
  background: #e0e7ef;
  object-fit: cover;
`;

const FacilityTitle = styled.h4`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 8px;
  color: ${props => props.theme.pallet.primary.main};
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const FacilitySubtitle = styled.h5`
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 16px;
  color: ${props => props.theme.pallet.heading.main};
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 12px;
  }
`;

const FacilityDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
  color: ${props => props.theme.pallet.text.main};
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const CirclesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const CircleCard = styled.div`
  background: white;
  border-radius: 16px;
  border-left: 4px solid ${props => props.theme.pallet.primary.main};
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const CircleTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 12px;
  color: #1e293b;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 8px;
  }
`;

const CircleDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: #64748b;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const CampusLifeSection: React.FC = () => {
    return (
        <CampusLifeSectionWrapper>
            <Container>
                <MainTitle>充実のキャンパスライフ</MainTitle>
                <SectionTitle>大学施設紹介</SectionTitle>
                <FacilitiesGrid>
                    {facilities.map((facility, index) => (
                        <FacilityCard key={index}>
                            <FacilityImage src={facility.img} />
                            <FacilityTitle>{facility.title}</FacilityTitle>
                            <FacilitySubtitle>{facility.subtitle}</FacilitySubtitle>
                            <FacilityDescription>{facility.description}</FacilityDescription>
                        </FacilityCard>
                    ))}
                </FacilitiesGrid>

                <SectionTitle>部活動・サークル紹介</SectionTitle>
                <CirclesGrid>
                    {circles.map((circle, index) => (
                        <CircleCard key={index} >
                            <CircleTitle>{circle.title}</CircleTitle>
                            <CircleDescription>{circle.description}</CircleDescription>
                        </CircleCard>
                    ))}
                </CirclesGrid>
            </Container>
        </CampusLifeSectionWrapper>
    );
};

export default CampusLifeSection;
