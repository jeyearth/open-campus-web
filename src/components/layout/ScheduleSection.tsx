import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../ui/SectionTitle';

const schedule = [
  { time: '09:30 - 10:00', title: '受付開始' },
  { time: '10:00 - 10:30', title: '大学全体説明' },
  { time: '10:30 - 11:30', title: '学科説明会', desc: '情報学科のカリキュラムや特色を詳しく解説します。' },
  { time: '11:40 - 12:40', title: '模擬授業／研究室見学（選択制）', desc: '希望のプログラムに参加して、大学の学びをリアルに体験。' },
  { time: '12:40 - 13:40', title: 'ランチタイム（学食体験）', desc: '人気の学食メニューをお楽しみください！' },
  { time: '13:40 - 15:30', title: '在学生との交流／個別相談会／入試説明会など', desc: '自由にブースを回って、気になることを何でも聞いてみよう。' },
  { time: '15:30 - 16:00', title: '閉場' },
];

const MySheduleSection = styled.section`
  background: ${(props) => props.theme.pallet.baseWhite.main};
  padding: 48px 0;
`;

const SectionWrapper = styled.section`
  max-width: 900px;
  margin: 0 auto;
`;

const FlexRow = styled.div`
  display: flex;
  max-width: 1100px;
  margin: 0 auto;
  gap: 48px;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    gap: 24px;
    padding: 0 8px;
  }
`;

const LeftCol = styled.div`
  flex: 1.1;
  min-width: 260px;
  padding-top: 12px;
  @media (max-width: 900px) {
    min-width: 0;
  }
`;

const RightCol = styled.div`
  flex: 2;
  min-width: 320px;
  position: relative;
  margin-top: 16px;
  @media (max-width: 900px) {
    min-width: 0;
  }
`;

const Title = styled.h2`
  font-size: 2.2rem;
  font-weight: bold;
  color: ${(props) => props.theme.pallet.heading.main};
  margin-bottom: 8px;
  text-align: left;
`;

const Description = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.pallet.subText.main};
  margin-bottom: 8px;
  text-align: left;
`;

const Note = styled.p`
  font-size: 0.95rem;
  color: #444;
  margin-bottom: 0;
  text-align: left;
`;

const Timeline = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 0 0 32px;
  border-left: 3px solid ${(props) => props.theme.pallet.primary.main};
  position: relative;
`;

const TimelineItem = styled.li`
  position: relative;
  margin-bottom: 32px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Time = styled.div`
  color: ${(props) => props.theme.pallet.primary.main};
  font-weight: bold;
  font-size: 1.08rem;
  margin-bottom: 2px;
`;

const EventTitle = styled.div`
  font-size: 1.15rem;
  font-weight: bold;
  color: ${(props) => props.theme.pallet.heading.main};
`;

const EventDesc = styled.div`
  font-size: 0.98rem;
  color: ${(props) => props.theme.pallet.subText.main};
  margin-top: 2px;
`;

const ScheduleSection: React.FC = () => {
  return (
    <MySheduleSection>
    <SectionWrapper>
      <FlexRow>
        <LeftCol>
          <Title>一日の流れ</Title>
          <Description>
            11:40以降は自由行動となります。<br />
            なので、午前中のみ参加や、午後のみ参加なども可能です。<br />
            皆様のご都合に合うような1日としてくださると幸いです。<br />
            （オープンキャンパス参加申し込みは必須です）
          </Description>
        </LeftCol>
        <RightCol>
          <Timeline>
            {schedule.map((item, i) => (
              <TimelineItem key={i}>
                <Time>{item.time}</Time>
                <EventTitle>{item.title}</EventTitle>
                {item.desc && <EventDesc>{item.desc}</EventDesc>}
              </TimelineItem>
            ))}
          </Timeline>
        </RightCol>
      </FlexRow>
    </SectionWrapper>
    </MySheduleSection>
  );
};

export default ScheduleSection;