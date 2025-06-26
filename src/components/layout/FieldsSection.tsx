import React from 'react';

const fields = [
  {
    icon: '/globe.svg',
    title: 'AI・機械学習',
    desc: '人工知能の仕組みを理解し、未来社会をデザインする。',
  },
  {
    icon: '/file.svg',
    title: 'データサイエンス',
    desc: 'ビッグデータを分析し、新たな価値を創造する。',
  },
  {
    icon: '/window.svg',
    title: 'ソフトウェア開発',
    desc: 'アプリケーションやシステムを設計・開発するプロになる。',
  },
  {
    icon: '/vercel.svg',
    title: 'ネットワーク・セキュリティ',
    desc: '情報社会を支える安全な通信環境を構築する。',
  },
  {
    icon: '/next.svg',
    title: 'IoT・ロボット',
    desc: 'モノと情報をつなぎ、次世代の技術を生み出す。',
  },
];

const FieldsSection: React.FC = () => {
  return (
    <section style={{ background: '#f8fafc', padding: '48px 0' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: 32 }}>
          学べる分野の紹介
        </h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap' }}>
          {fields.map((f, i) => (
            <div key={i} style={{
              background: '#fff',
              borderRadius: 16,
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              padding: 28,
              width: 210,
              minHeight: 200,
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
        <a href="#" style={{ color: '#2563eb', fontWeight: 'bold', display: 'inline-block', marginTop: 24, fontSize: '1.1rem' }}>
          対応するオープンキャンパスプログラムはこちら！
        </a>
      </div>
    </section>
  );
};

export default FieldsSection; 