import React from 'react';
import styled from 'styled-components';
import SectionTitleTwo from '../ui/SectionTitleTwo';

const voices = [
  {
    name: '佐藤 葵さん',
    comment: '在学生の方がとても親切で、大学生活のリアルな話を聞けたのが良かったです。キャンパスも広くて綺麗で、ここで学びたいという気持ちが強くなりました。一人で参加しましたが、すぐに他の参加者とも打ち解けられて楽しかったです。',
    img: '/voice01-sato.jpeg',
    rating: 5,
  },
  {
    name: '高橋 健太さん',
    comment: '最先端の研究設備に驚きました。先生方の説明も分かりやすく、専門分野への興味が一層深まりました。模擬授業は高校の授業とは違う大学ならではの面白さがあり、知的好奇心を刺激される最高の体験でした。',
    img: '/voice02-takahashi.jpeg',
    rating: 5,
  },
  {
    name: '鈴木 美咲さん',
    comment: '最初は緊張していましたが、個別相談で先生が親身に話を聞いてくださり、入試や学生生活への不安が解消されました。先輩方の姿を見て、自分の大学生活が具体的にイメージでき、受験勉強へのモチベーションが上がりました。',
    img: '/voice03-suzuki.jpeg',
    rating: 5,
  },
];

const MyVoicesSection = styled.section`
  background: ${(props) => props.theme.pallet.secondary.main};
  padding: 48px 0;
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  padding: 0 16px;
`;

const CardsContainer = styled.div`
  display: flex;
  gap: 24px;
  justify-content: flex-start;
  
  @media (max-width: 864px) {
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 16px;
    
    &::-webkit-scrollbar {
      height: 6px;
    }
    
    &::-webkit-scrollbar-track {
      background: #e2e8f0;
      border-radius: 3px;
    }
    
    &::-webkit-scrollbar-thumb {
      background: #94a3b8;
      border-radius: 3px;
    }
  }
`;

const VoiceCard = styled.div`
  background: ${(props) => props.theme.pallet.baseWhite.main};
  border-radius: 40px;
  padding: 32px;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  scroll-snap-align: start;
  
  @media (max-width: 864px) {
    min-width: 280px;
    max-width: 280px;
    padding: 24px;
  }
`;

const QuoteIcon = styled.div`
  color: ${(props) => props.theme.pallet.primary.main};
  font-size: 2.5rem;
  font-weight: bold;
  text-align: left;
  line-height: 1;
`;

const Comment = styled.p`
  font-size: 0.9rem;
  color: ${(props) => props.theme.pallet.text.main};
  line-height: 1.6;
  margin-bottom: 24px;
  text-align: left;
  flex-grow: 1;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ProfileImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  background: #e0e7ef;
  object-fit: cover;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-grow: 1;
`;

const Name = styled.div`
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 4px;
  color: ${(props) => props.theme.pallet.heading.main};
`;

const Stars = styled.div`
  color: #fbbf24;
  font-size: 1.2rem;
`;

const VoicesSection: React.FC = () => {
  return (
    <MyVoicesSection>
      <Container>
        <SectionTitleTwo
          englishTitle="REVIEWS"
          japaneseTitle="体験者の声"
          isLightTheme={false}
        />
        <CardsContainer>
          {voices.map((voice, i) => (
            <VoiceCard key={i}>
              <QuoteIcon>"</QuoteIcon>
              <Comment>{voice.comment}</Comment>
              <ProfileSection>
                <ProfileImage src={voice.img} alt={voice.name} />
                <ProfileInfo>
                  <Name>{voice.name}</Name>
                  <Stars>{'★'.repeat(voice.rating)}</Stars>
                </ProfileInfo>
              </ProfileSection>
            </VoiceCard>
          ))}
        </CardsContainer>
      </Container>
    </MyVoicesSection>
  );
};

export default VoicesSection;