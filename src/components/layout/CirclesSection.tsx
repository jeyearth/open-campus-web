import React from 'react';

const circles = [
  {
    icon: '/file.svg',
    name: 'サッカー部',
    desc: '運動系。大会出場や学内リーグで活躍。',
  },
  {
    icon: '/globe.svg',
    name: '軽音楽サークル',
    desc: '文化系。学園祭ライブや地域イベント出演。',
  },
  {
    icon: '/window.svg',
    name: 'プログラミングコンテスト部',
    desc: '情報学科関連。全国大会出場実績あり。',
  },
  {
    icon: '/vercel.svg',
    name: 'ロボット製作サークル',
    desc: '情報学科関連。ロボコンや展示会で受賞歴多数。',
  },
  {
    icon: '/next.svg',
    name: 'Webデザインサークル',
    desc: '情報学科関連。学内外のWeb制作プロジェクトに参加。',
  },
];

const CirclesSection: React.FC = () => {
  return (
    <section style={{ background: '#f8fafc', padding: '48px 0' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: 32 }}>
          部活動・サークル紹介
        </h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap' }}>
          {circles.map((c, i) => (
            <div key={i} style={{
              background: '#fff',
              borderRadius: 16,
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              padding: 28,
              width: 210,
              minHeight: 160,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: 16,
            }}>
              <img src={c.icon} alt={c.name} style={{ width: 44, marginBottom: 12 }} />
              <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: 8 }}>{c.name}</h3>
              <p style={{ fontSize: '0.98rem', color: '#334155' }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CirclesSection; 