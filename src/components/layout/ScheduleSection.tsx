import React from 'react';
import styled from 'styled-components';
import SectionTitleTwo from '../ui/SectionTitleTwo';
import Schedule from '../ui/Schedule';
import { motion } from 'framer-motion';
import Image from 'next/image';

const schedule = [
  { time: '09:30 - 10:00', title: '受付開始' },
  { time: '10:00 - 10:30', title: '大学全体説明' },
  { time: '10:30 - 11:30', title: '学部説明会', desc: '各学部のカリキュラムや特色を詳しく解説します。' },
  { time: '11:30 - 12:40', title: '模擬授業／研究室見学（選択制）', desc: '希望のプログラムに参加して、大学のリアルな学びを体験。' },
  { time: '12:40 - 13:40', title: 'ランチタイム（学食体験）', desc: '人気の学食メニューをお楽しみください！' },
  { time: '13:40 - 15:30', title: '在学生との交流／個別相談会／入試説明会など', desc: '自由にブースを回って、気になることを何でも聞いてみよう。' },
  { time: '15:30 - 16:00', title: '閉場' },
];

const MyScheduleSection = styled.section`
  background: ${(props) => props.theme.pallet.baseWhite.main};
  padding: 48px 0;

  @media (max-width: 768px) {
    padding: 32px 0;
  }
`;

const ScheduleWrapper = styled(motion.div)`
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0 16px;
    margin-left: 16px;
    max-width: none;
  }
`;

const ScheduleBackgroundWrapper = styled(motion.div)`
  background-color: ${(props) => props.theme.pallet.baseWhite.main};
  border-radius: 0 40px 40px 0;
  padding-left: 100vw;
  margin-left: -100vw;
  padding-right: 40px;
  
  @media (max-width: 768px) {
    border-radius: 0 20px 20px 0;
    padding: 24px 16px 24px 24px;
    padding-left: 100vw;
    margin-left: -100vw;
  }
`;

const SectionDescription = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.pallet.subText.main};
  margin-top: 16px;
  margin: 0 16px;
`;

const FlexContainer = styled.div`
  display: flex;
  gap: 48px;
  margin-top: 40px;
  padding: 40px 0;
  align-items: stretch;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 32px;
    padding: 24px 0;
    align-items: center;
    margin-top: 8px;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 40px;

  @media (max-width: 1024px) {
    margin-left: 0;
    align-items: center;
    min-height: 300px;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    align-items: center;
  }
`;

const RightColumn = styled.div`
  flex: 2;
  padding-left: 32px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

const CampusImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  overflow: visible;
  position: relative;
  min-height: 400px;

  @media (max-width: 1024px) {
    overflow: hidden;
    height: 300px;
    min-height: 300px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    overflow: hidden;
    height: 300px;
    min-height: 300px;
  }
`;

const CampusImage = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 1200px;
  height: 100%;
  border-radius: 60px;
  overflow: hidden;

  @media (max-width: 1024px) {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 24px;
    transform: none;
  }

  @media (max-width: 768px) {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 24px;
    transform: none;
  }
`;

const ScheduleSection: React.FC = () => {
  return (
    <MyScheduleSection>
      <ScheduleWrapper
        variants={{
          offscreen: {
            y: 100,
            opacity: 0,
          },
          onscreen: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 1.4,
            },
          },
        }}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0 }}
      >
        <SectionTitleTwo
          englishTitle="Schedule"
          japaneseTitle="一日の流れ"
          isLightTheme={true}
        />
        <SectionDescription>
          11:30以降は自由行動となります。
          午前中のみ参加や、午後のみ参加なども可能です。
          皆様のご都合に合うような1日としてくださると幸いです。
          （オープンキャンパス参加申し込みは必須です）
        </SectionDescription>
        <ScheduleBackgroundWrapper
          variants={{
            offscreen: {
              x: 200,
              opacity: 0,
            },
            onscreen: {
              x: 0,
              opacity: 1,
              transition: {
                duration: 1.2,
              },
            },
          }}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0 }}
        >
          <FlexContainer>
            <LeftColumn>
              <CampusImageWrapper>
                <CampusImage>
                  <Image
                    src="/schedule-campus.jpeg"
                    alt="Campus Building"
                    fill
                    objectFit="cover"
                  />
                </CampusImage>
              </CampusImageWrapper>
            </LeftColumn>
            <RightColumn>
              <Schedule schedule={schedule} />
            </RightColumn>
          </FlexContainer>
        </ScheduleBackgroundWrapper>
      </ScheduleWrapper>
    </MyScheduleSection>
  );
};

export default ScheduleSection;