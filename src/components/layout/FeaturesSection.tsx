import React from 'react';

const features = [
  {
    icon: '/file.svg',
    title: '実践的PBL教育',
    desc: '企業連携プロジェクトや社会課題解決型PBLで、即戦力となる力を養う。',
  },
  {
    icon: '/globe.svg',
    title: '最先端研究領域',
    desc: 'AI、データサイエンス、IoT、サイバーセキュリティなど、時代の最先端をいく研究テーマと設備。',
  },
  {
    icon: '/window.svg',
    title: '未来を切り拓くキャリア',
    desc: '幅広い分野への就職実績と、卒業生が描くキャリアパスの可能性。',
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section style={{ background: '#f8fafc', padding: '48px 0' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: 32 }}>
          JFUT情報学科の特色・強み
        </h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap' }}>
          {features.map((f, i) => (
            <div key={i} style={{
              background: '#fff',
              borderRadius: 16,
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              padding: 32,
              width: 260,
              minHeight: 260,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: 16,
            }}>
              <img src={f.icon} alt={f.title} style={{ width: 56, marginBottom: 16 }} />
              <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: 12 }}>{f.title}</h3>
              <p style={{ fontSize: '1rem', color: '#334155' }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 