import React from 'react';

const accessInfo = [
  {
    title: 'アクセス地図',
    desc: '大学の場所を分かりやすく示した地図（仮画像）を掲載。',
    img: '/globe.svg',
  },
  {
    title: '公共交通機関',
    desc: '最寄り駅から徒歩10分。バス利用も便利です。',
  },
  {
    title: '駐車場情報',
    desc: '来場者用駐車場あり（無料／台数制限あり）。',
  },
  {
    title: '周辺情報',
    desc: 'コンビニ・カフェ・観光スポットなども充実。',
  },
];

const AccessSection: React.FC = () => {
  return (
    <section style={{ background: '#f8fafc', padding: '48px 0' }}>
      <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: 32 }}>
          交通アクセス・周辺情報
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 24 }}>
          {accessInfo.map((a, i) => (
            <div key={i} style={{
              background: '#fff',
              borderRadius: 16,
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              padding: 24,
              width: 320,
              minHeight: 120,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: 16,
            }}>
              {a.img && <img src={a.img} alt={a.title} style={{ width: 80, marginBottom: 12 }} />}
              <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: 8 }}>{a.title}</h3>
              <p style={{ fontSize: '0.98rem', color: '#334155' }}>{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccessSection; 