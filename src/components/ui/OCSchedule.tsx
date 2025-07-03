import React from "react";
import styled from "styled-components";

interface OCScheduleProps {
  schedules: {
    num: string;
    date: Date;
    time: string;
  }[];
}

const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const dayNames = ['日', '月', '火', '水', '木', '金', '土'];
  const dayName = dayNames[date.getDay()];

  return {
    dateString: `${year}年${month}月${day}日`,
    dayName: dayName
  };
};

const ScheduleContainer = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ScheduleItem = styled.div`
  border-left: 4px solid ${(props) => props.theme.pallet.primary.main};
  padding-left: 16px;
`;

const ScheduleNumber = styled.div`
  color: ${(props) => props.theme.pallet.heading.main};
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 4px;
`;

const ScheduleDate = styled.div`
  color: ${(props) => props.theme.pallet.heading.main};
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 4px;
  display: flex;
  align-items: baseline;
  gap: 4px;
`;

const ScheduleDayName = styled.span`
  font-size: 1rem;
  font-weight: normal;
  color: ${(props) => props.theme.pallet.subText.main};
`;

const ScheduleTime = styled.div`
  color: ${(props) => props.theme.pallet.subText.main};
  font-size: 1rem;
`;

const OCSchedule: React.FC<OCScheduleProps> = ({ schedules }) => {
  return (
    <ScheduleContainer>
      {schedules.map((schedule, index) => {
        const { dateString, dayName } = formatDate(schedule.date);
        return (
          <ScheduleItem key={index}>
            <ScheduleNumber>第{schedule.num}回</ScheduleNumber>
            <ScheduleDate>
              {dateString}
              <ScheduleDayName>（{dayName}）</ScheduleDayName>
            </ScheduleDate>
            <ScheduleTime>{schedule.time}</ScheduleTime>
          </ScheduleItem>
        );
      })}
    </ScheduleContainer>
  );
};

export default OCSchedule;