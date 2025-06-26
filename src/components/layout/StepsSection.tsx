import React from 'react';

const steps = [
  {
    step: 'STEP 1',
    title: '日程を選ぼう！',
    desc: (
      <>
        <div>開催日程：</div>
        <ul style={{ margin: '8px 0 0 0', padding: 0, listStyle: 'none' }}>
          <li><b>第1回：2025年7月20日（土）10:00～16:00</b>（対面形式）</li>
          <li><b>第2回：2025年8月24日（日）10:00～16:00</b>（対面形式）</li>
        </ul>
        <a href="#reserve" style={{ color: '#2563eb', fontWeight: 'bold', display: 'inline-block', marginTop: 8 }}>各日程の予約はこちら</a>
      </>
    ),
  },
  {
    step: 'STEP 2',
    title: '興味のある分野を見つけよう！',
    desc: '情報科学の広大な世界で、あなたが惹かれる学びのテーマを見つけましょう。',
  },
  {
    step: 'STEP 3',
    title: '体験したいプログラムを選んでみよう！',
    desc: 'JFUT情報学科のリアルな学びを体験し、自分だけのオープンキャンパスプランを立てましょう。',
  },
];

const StepsSection: React.FC = () => {
  return (
    <section style={{ background: '#fff', padding: '48px 0' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: 32 }}>
          オープンキャンパス参加への3ステップ
        </h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap' }}>
          {steps.map((s, i) => (
            <div key={i} style={{
              background: '#f1f5f9',
              borderRadius: 16,
              padding: 32,
              width: 260,
              minHeight: 220,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: 16,
            }}>
              <div style={{ fontWeight: 'bold', color: '#2563eb', fontSize: '1.1rem', marginBottom: 8 }}>{s.step}</div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: 12 }}>{s.title}</h3>
              <div style={{ fontSize: '1rem', color: '#334155' }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection; 