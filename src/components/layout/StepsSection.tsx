import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../ui/SectionTitle';
import SectionTitleTwo from '../ui/SectionTitleTwo';

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
  box-shadow: 0 2px 8px rgba(255,107,0,0.12);
  transition: background 0.6s;
  text-align: center;
  &:hover {
    background: #e55a00;
  }
`;

const steps = [
  {
    step: '1',
    title: '日程を選ぼう！',
    desc: (
      <>
        JFUT情報学科の魅力を体験できる最適な日を選びましょう。<br />
        <div style={{ margin: '16px 0 8px 0', fontWeight: 'bold' }}>開催日程:</div>
        <div style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: 4 }}>第1回：2025年7月20日（土） 10:00～16:00 <span style={{ fontWeight: 'normal', fontSize: '0.95rem' }}>（対面形式）</span></div>
        <div style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: 16 }}>第2回：2025年8月24日（日） 10:00～16:00 <span style={{ fontWeight: 'normal', fontSize: '0.95rem' }}>（対面形式）</span></div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ReserveButton href="#reserve">予約する！</ReserveButton>
        </div>
      </>
    ),
  },
  {
    step: '2',
    title: '興味のある分野を見つけよう！',
    desc: (
      <>
        情報科学の広大な世界で、あなたが惹かれる学びのテーマを見つけましょう。<br />
        <ul style={{ textAlign: 'left', margin: '12px 0 0 0', padding: '0 0 0 1.2em', fontSize: '0.98rem' }}>
          <li>AI・機械学習: 人工知能の仕組みを理解し、未来社会をデザインする。</li>
          <li>データサイエンス: ビッグデータを分析し、新たな価値を創造する。</li>
          <li>ソフトウェア開発: アプリケーションやシステムを設計・開発するプロに。</li>
          <li>ネットワーク・セキュリティ: 情報社会を支える安全な環境を構築する。</li>
          <li>IoT・ロボット: モノと情報をつなぎ、次世代の技術を生み出す。</li>
        </ul>
      </>
    ),
  },
  {
    step: '3',
    title: '体験したいプログラムを選んでみよう！',
    desc: (
      <>
        JFUT情報学科のリアルな学びを体験し、自分だけのオープンキャンパスプランを立てましょう。<br />
        <ul style={{ textAlign: 'left', margin: '12px 0 0 0', padding: '0 0 0 1.2em', fontSize: '0.98rem' }}>
          <li>学科説明会: JFUT情報学科の全貌と未来の可能性を知る。</li>
          <li>模擬体験: 「AIプログラミング入門」「サイバー攻撃から身を守るには？」など体験型講座。</li>
          <li>研究室見学・デモ: 最先端の研究現場や、教員や学生と直接交流。</li>
          <li>在学生との交流コーナー: JFUTのリアルな学生生活や学びの楽しさを直接聞けるチャンス。</li>
          <li>個別相談会: 入試、奨学金、学生生活など、気になることを個別に相談。</li>
        </ul>
      </>
    ),
  },
];

const MyStepsSection = styled.section`
  background: ${({ theme }) => theme.pallet.secondary.main};
  padding: 48px 0;
`;

const StepsWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const StepRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 32px;
  margin-bottom: 32px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
    align-items: center;
  }
`;

const StepNumber = styled.div`
  color: ${(props) => props.theme.pallet.primary.main};
  font-size: 2rem;
  font-weight: bold;
  min-width: 120px;
  margin-top: 20px;
  display: flex;
  align-items: end;
  justify-content: center;
  @media (max-width: 768px) {
    font-size: 2.2rem;
    min-width: 0;
    margin-bottom: 8px;
  }
`;

const StepCard = styled.div`
  background: ${(props) => props.theme.pallet.baseWhite.main} ;
  border-radius: 40px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.08);
  padding: 32px 28px;
  min-width: 320px;
  max-width: 500px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  @media (max-width: 768px) {
    min-width: 0;
    width: 90vw;
    margin-bottom: 32px;
  }
`;

const StepCardTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 16px;
`;

const StepsSection: React.FC = () => {
  return (
    <MyStepsSection>
      <StepsWrapper>
        <SectionTitleTwo
          englishTitle="Steps"
          japaneseTitle="参加への3ステップ"
          isLightTheme={false}
        />
        {/* <SectionTitle>
          オープンキャンパス参加への<br />3ステップ
        </SectionTitle> */}
        {steps.map((s, i) => (
          <StepRow key={i}>
            <StepNumber>
              STEP<span style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: 0, lineHeight: 0.9 }}>{s.step}</span>
            </StepNumber>
            <StepCard>
              <StepCardTitle>{s.title}</StepCardTitle>
              <div>{s.desc}</div>
            </StepCard>
          </StepRow>
        ))}
      </StepsWrapper>
    </MyStepsSection>
  );
};

export default StepsSection;