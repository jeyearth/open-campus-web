import React from "react";
import styled from "styled-components";
import SectionTitleTwo from "../ui/SectionTitleTwo";
import OCSchedule from "../ui/OCSchedule";
import StudyFields from "../ui/StudyFields";
import Programs from "../ui/Programs";

const ocSchedule = [
    {
        num: '1',
        date: new Date('2025-08-02'),
        time: '10:00～16:00',
    },
    {
        num: '2',
        date: new Date('2025-08-03'),
        time: '10:00～16:00',
    },
];

const studyFieldsData = [
    {
        icon: 'ai.png',
        fieldName: 'AI・機械学習',
        describe: '人工知能の仕組みを理解し、未来社会をデザインする。',
    },
    {
        icon: 'data-science.png',
        fieldName: 'データサイエンス',
        describe: 'ビッグデータを分析し、新たな価値を創造する。',
    },
    {
        icon: 'software-development.png',
        fieldName: 'ソフトウェア開発',
        describe: 'アプリケーションやシステムを設計・開発するプロになる。',
    },
    {
        icon: 'security.png',
        fieldName: 'セキュリティ',
        describe: '情報社会を支える安全な環境を構築する。',
    },
    {
        icon: 'iot-robot.png',
        fieldName: 'IoT・ロボット',
        describe: 'モノと情報をつなぎ、次世代の技術を生み出す。',
    },
    {
        icon: '3d-graphic.png',
        fieldName: '3Dグラフィックス',
        describe: 'リアルな映像表現を学び、ゲームや映画の世界を創造する。',
    },
];

const programsData = [
    {
        image: 'briefing-session.jpeg',
        title: '学部説明会',
        subtitle: '各学部の特色や将来性を深く理解',
    },
    {
        image: 'campus-tour.jpeg',
        title: 'キャンパスツアー',
        subtitle: '最新の設備や学習環境を見学',
    },
    {
        image: 'mock-class.jpeg',
        title: '体験授業',
        subtitle: '実際の授業を体験してみよう',
    },
    {
        image: 'individual-interview.jpeg',
        title: '個別相談',
        subtitle: '入試や就職について相談',
    },
    {
        image: 'student-interaction.jpeg',
        title: '在学生との交流',
        subtitle: 'リアルな学生生活を直接聞けるチャンス',
    },
    {
        image: 'laboratory-tour.jpeg',
        title: '研究室見学',
        subtitle: '最先端の研究や教員と直接交流',
    },
];

const MyStepsSection = styled.section`
    background-color: ${(props) => props.theme.pallet.secondary.main};
    padding: 48px 0;

    @media (max-width: 768px) {
        padding: 32px 0;
    }
`;

const StepsWrapper = styled.div`
    max-width: 900px;
    margin: 0 auto;
    margin-top: 40px;

    @media (max-width: 768px) {
        padding: 0 16px;
        margin-left: 16px;
        max-width: none;
    }

    @media (max-width: 480px) {
        margin-left: 8px;
    }
`;

const StepsBackgroundWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.pallet.baseWhite.main};
    border-radius: 40px 0 0 40px;
    padding-right: 100vw;
    margin-right: -100vw;
    
    @media (max-width: 768px) {
        /* border-radius: 32px 0 0 px; */
        padding: 24px 16px 24px 24px;
        padding-right: 100vw;
        margin-right: -100vw;
    }
`;

const StepRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 32px;
  margin-bottom: 60px;
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
    margin-bottom: 80px;
    /* text-align: center; */
  }
`;

const StepNumber = styled.div`
  color: ${(props) => props.theme.pallet.primary.main};
  font-size: 2rem;
  font-weight: bold;
  min-width: 120px;
  margin-top: 20px;
  margin-left: 20px;
  display: flex;
  align-items: end;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    min-width: 0;
    margin: 0 0 16px 0;
    justify-content: flex-start;
    /* align-items: flex-start; */
  }
`;

const StepNumberSpan = styled.span`
  font-size: 4.8rem;
  font-weight: bold;
  margin-bottom: 0;
  line-height: 0.9;
  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
`;

const StepContentContainer = styled.div`
  /* background-color: aqua; */
  padding: 32px 28px;
  min-width: 320px;
  /* max-width: 500px; */
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  position: relative;

  @media (max-width: 768px) {
    min-width: 0;
    width: 100%;
    padding: 0;
    /* align-items: center; */
  }
`;

const StepContentTitle = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 16px;
    color: ${(props) => props.theme.pallet.heading.main};

    @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 12px;
  }
`;

const StepContentDesc = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.pallet.subText.main};
  width: 50vw;
  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.6;
    width: 100%;
  }
`;

const ReserveButton = styled.a`
  display: inline-block;
  background: ${(props) => props.theme.pallet.orange.main};
  color: #fff;
  padding: 10px 28px;
  border-radius: 24px;
  font-size: 1.1rem;
  font-weight: bold;
  text-decoration: none;
  margin-top: 16px;
  box-shadow: 0 4px 16px rgba(255, 107, 0, 0.3);
  transition: all 0.2s;
  text-align: center;
  align-self: center;
  
  &:hover {
    background: #e55a00;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 107, 0, 0.4);
  }
`;

const StepsSectionTwo: React.FC = () => {
    return (
        <MyStepsSection>
            <StepsWrapper>
                <StepsBackgroundWrapper>
                    <SectionTitleTwo
                        englishTitle="Steps"
                        japaneseTitle="参加への3ステップ"
                        isLightTheme={true}
                    />
                    <StepRow>
                        <StepNumber>
                            STEP
                            <StepNumberSpan>
                                1
                            </StepNumberSpan>
                        </StepNumber>
                        <StepContentContainer>
                            <StepContentTitle>
                                日程を選ぼう！
                            </StepContentTitle>
                            <StepContentDesc>
                                オープンキャンパスの日程を選んで、参加登録をしましょう。日程は公式サイトで確認できます。
                            </StepContentDesc>
                            <OCSchedule schedules={ocSchedule} />
                            <ReserveButton href="#reserve">予約はこちらから！</ReserveButton>
                        </StepContentContainer>
                    </StepRow>
                    <StepRow>
                        <StepNumber>
                            STEP
                            <StepNumberSpan>
                                2
                            </StepNumberSpan>
                        </StepNumber>
                        <StepContentContainer>
                            <StepContentTitle>
                                興味のある分野を見つけよう！
                            </StepContentTitle>
                            <StepContentDesc>
                                情報技術の基本から応用まで、あなたが学びたい分野のテーマを見つけてしまいましょう。
                            </StepContentDesc>
                            <StudyFields fields={studyFieldsData} />
                        </StepContentContainer>
                    </StepRow>
                                        <StepRow>
                        <StepNumber>
                            STEP
                            <StepNumberSpan>
                                3
                            </StepNumberSpan>
                        </StepNumber>
                        <StepContentContainer>
                            <StepContentTitle>
                                体験したいプログラムを選んでみよう！
                            </StepContentTitle>
                            <StepContentDesc>
                                JFU情報学科のリアルな学びを体験し、自分だけのオープンキャンパスプランを立てましょう。
                            </StepContentDesc>
                            <Programs programs={programsData} />
                        </StepContentContainer>
                    </StepRow>
                </StepsBackgroundWrapper>
            </StepsWrapper>
        </MyStepsSection>
    );
}

export default StepsSectionTwo;