import React from 'react';

const voices = [
  {
    name: '佐藤 花子',
    school: '東京都立○○高校',
    grade: '2年',
    comment: 'オープンキャンパスで在学生の話を聞き、雰囲気の良さに惹かれました。入学後はAI研究に挑戦中です！',
    img: '/globe.svg',
  },
  {
    name: '田中 太一',
    school: '埼玉県立△△高校',
    grade: '1年',
    comment: '模擬授業がとても分かりやすく、情報学科の学びの幅広さを実感できました。',
    img: '/file.svg',
  },
  {
    name: '鈴木 美咲',
    school: '千葉県立□□高校',
    grade: '3年',
    comment: '研究室見学で最先端の設備に驚きました。将来はデータサイエンティストを目指しています。',
    img: '/window.svg',
  },
];

const VoicesSection: React.FC = () => {
  return (
    <section style={{ background: '#f8fafc', padding: '48px 0' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: 32 }}>
          先輩体験者の声
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 24 }}>
          {voices.map((v, i) => (
            <div key={i} style={{
              background: '#fff',
              borderRadius: 16,
              padding: 28,
              width: 260,
              minHeight: 220,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: 16,
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            }}>
              <img src={v.img} alt={v.name} style={{ width: 56, height: 56, borderRadius: '50%', marginBottom: 12, background: '#e0e7ef' }} />
              <div style={{ fontWeight: 'bold', fontSize: '1.05rem', marginBottom: 4 }}>{v.name} <span style={{ fontWeight: 'normal', fontSize: '0.95rem', color: '#64748b' }}>（{v.school}・{v.grade}）</span></div>
              <p style={{ fontSize: '0.98rem', color: '#334155', marginTop: 8 }}>{v.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VoicesSection; 