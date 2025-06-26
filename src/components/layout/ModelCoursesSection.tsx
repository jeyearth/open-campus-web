import React from 'react';

const courses = [
  {
    name: '徹底体験コース',
    flow: '学科説明会 → 模擬授業（選択）→ 研究室見学 → 在学生交流 → 学食ランチ',
    time: '10:00～15:30',
    merit: 'すべてのプログラムをじっくり体験できる！',
  },
  {
    name: '短時間凝縮コース',
    flow: '学科説明会 → 個別相談会 → 学食ランチ（短時間）',
    time: '10:00～13:00',
    merit: '短時間で要点を押さえたい方におすすめ。',
  },
  {
    name: '保護者向けコース',
    flow: '全体説明 → 個別相談会（入試・奨学金）→ 施設見学',
    time: '10:00～13:30',
    merit: '保護者の疑問や不安をしっかり解消。',
  },
];

const ModelCoursesSection: React.FC = () => {
  return (
    <section style={{ background: '#f8fafc', padding: '48px 0' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: 32 }}>
          おすすめの回り方（モデルコース）
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 24 }}>
          {courses.map((c, i) => (
            <div key={i} style={{
              background: '#fff',
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
              <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: 8 }}>{c.name}</h3>
              <div style={{ fontSize: '0.98rem', color: '#334155', marginBottom: 8 }}><b>流れ：</b>{c.flow}</div>
              <div style={{ fontSize: '0.95rem', color: '#2563eb', marginBottom: 4 }}><b>目安時間：</b>{c.time}</div>
              <span style={{ fontSize: '0.95rem', color: '#16a34a', fontWeight: 'bold' }}>{c.merit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModelCoursesSection; 