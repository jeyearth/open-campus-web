import React from 'react';

const facilities = [
  {
    icon: '/file.svg',
    title: '学食',
    desc: '活気ある学食の様子や人気メニュー、価格帯を紹介。オープンキャンパス参加者も利用可能！',
  },
  {
    icon: '/globe.svg',
    title: '図書館',
    desc: '最新の蔵書やラーニングコモンズなど、学習環境が充実。',
  },
  {
    icon: '/window.svg',
    title: 'PCルーム・実験設備',
    desc: '最新の機器が揃った情報学科ならではの学習環境。',
  },
  {
    icon: '/vercel.svg',
    title: '学生ラウンジ・自習スペース',
    desc: '学生が普段利用する休憩・交流スペースも充実。',
  },
  {
    icon: '/next.svg',
    title: 'キャンパス風景',
    desc: '緑豊かな広場やモダンな建物など、魅力的なキャンパス写真を掲載。',
  },
];

const FacilitiesSection: React.FC = () => {
  return (
    <section style={{ background: '#fff', padding: '48px 0' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: 32 }}>
          大学施設紹介
        </h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap' }}>
          {facilities.map((f, i) => (
            <div key={i} style={{
              background: '#f8fafc',
              borderRadius: 16,
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              padding: 28,
              width: 210,
              minHeight: 180,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: 16,
            }}>
              <img src={f.icon} alt={f.title} style={{ width: 44, marginBottom: 12 }} />
              <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: 8 }}>{f.title}</h3>
              <p style={{ fontSize: '0.98rem', color: '#334155' }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection; 