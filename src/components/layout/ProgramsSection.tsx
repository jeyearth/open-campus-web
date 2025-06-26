import React from 'react';

const programs = [
  {
    title: '学科説明会',
    desc: 'JFUT情報学科の全貌と未来の可能性を知る。',
    style: '初心者向け',
  },
  {
    title: '模擬授業',
    desc: '「AIプログラミング入門」「サイバー攻撃から身を守るには？」など、体験型授業。',
    style: 'じっくり体験',
  },
  {
    title: '研究室見学・デモンストレーション',
    desc: '最先端の研究現場で、教員や学生と直接交流。',
    style: '研究志向',
  },
  {
    title: '在学生との交流コーナー',
    desc: 'JFUTのリアルな学生生活や学びの楽しさを直接聞けるチャンス。',
    style: '雰囲気重視',
  },
  {
    title: '個別相談会',
    desc: '入試、奨学金、学生生活など、気になることを個別に相談。',
    style: '何でも相談',
  },
];

const ProgramsSection: React.FC = () => {
  return (
    <section style={{ background: '#fff', padding: '48px 0' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: 32 }}>
          体験したいプログラムを選んでみよう！
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 24 }}>
          {programs.map((p, i) => (
            <div key={i} style={{
              background: '#f1f5f9',
              borderRadius: 16,
              padding: 28,
              width: 260,
              minHeight: 180,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              marginBottom: 16,
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: 8 }}>{p.title}</h3>
              <p style={{ fontSize: '0.98rem', color: '#334155', marginBottom: 8 }}>{p.desc}</p>
              <span style={{ fontSize: '0.95rem', color: '#2563eb', fontWeight: 'bold' }}>推奨: {p.style}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection; 