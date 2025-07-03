import React from "react";
import styled from "styled-components";

interface ScheduleProps {
  schedule: {
    time: string;
    title: string;
    desc?: string;
  }[];
}

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

const Schedule: React.FC<ScheduleProps> = ({ schedule }) => {
  return (
          <Timeline>
            {schedule.map((item, i) => (
              <TimelineItem key={i}>
                <Time>{item.time}</Time>
                <EventTitle>{item.title}</EventTitle>
                {item.desc && <EventDesc>{item.desc}</EventDesc>}
              </TimelineItem>
            ))}
          </Timeline>
  );
};

export default Schedule;