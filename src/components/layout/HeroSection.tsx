import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section style={{
      background: 'linear-gradient(135deg, #e0e7ff 0%, #f0fdfa 100%)',
      padding: '60px 0',
      textAlign: 'center',
    }}>
      <img
        src="/globe.svg"
        alt="JFUT 情報学科 メインビジュアル"
        style={{ width: '180px', marginBottom: '24px' }}
      />
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '16px' }}>
        未来を創るエンジニアへ。<br />
        JFUT情報学科で、キミの可能性を解き放とう！
      </h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '24px' }}>
        オープンキャンパス開催日程：<br />
        <span style={{ fontWeight: 'bold', fontSize: '1.3rem' }}>
          2025年7月20日（土）・8月24日（日） 10:00～16:00
        </span>
      </p>
      <a
        href="#reserve"
        style={{
          display: 'inline-block',
          background: '#2563eb',
          color: '#fff',
          padding: '16px 40px',
          borderRadius: '32px',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          textDecoration: 'none',
          boxShadow: '0 4px 16px rgba(37,99,235,0.15)',
          transition: 'background 0.2s',
        }}
      >
        今すぐ予約する！
      </a>
    </section>
  );
};

export default HeroSection; 