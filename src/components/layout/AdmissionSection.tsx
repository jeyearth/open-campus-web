import React from 'react';

const admissions = [
  {
    title: '総合型選抜',
    desc: '多様な能力や意欲を評価する入試制度。詳細は入試ページへ。',
  },
  {
    title: '学校推薦型選抜',
    desc: '高校からの推薦を受けて出願できる制度。',
  },
  {
    title: '一般選抜',
    desc: '学力試験による選抜。',
  },
];

const AdmissionSection: React.FC = () => {
  return (
    <section style={{ background: '#fff', padding: '48px 0' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: 32 }}>
          入試情報・個別相談会
        </h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap', marginBottom: 32 }}>
          {admissions.map((a, i) => (
            <div key={i} style={{
              background: '#f8fafc',
              borderRadius: 16,
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              padding: 24,
              width: 240,
              minHeight: 120,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: 16,
            }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: 8 }}>{a.title}</h3>
              <p style={{ fontSize: '0.98rem', color: '#334155' }}>{a.desc}</p>
              <a href="#" style={{ color: '#2563eb', fontWeight: 'bold', fontSize: '0.95rem', marginTop: 8 }}>詳細ページへ</a>
            </div>
          ))}
        </div>
        <div style={{ background: '#f1f5f9', borderRadius: 12, padding: 24, maxWidth: 600, margin: '0 auto', marginBottom: 16 }}>
          <h3 style={{ fontWeight: 'bold', fontSize: '1.05rem', marginBottom: 8 }}>個別相談会</h3>
          <p style={{ fontSize: '0.98rem', color: '#334155', marginBottom: 4 }}>
            開催時間・場所：オープンキャンパス当日、13:40～15:30、相談コーナーにて<br />
            相談内容：入試、奨学金、学生生活、卒業後の進路など<br />
            教員やアドミッションセンタースタッフが丁寧に対応します。
          </p>
          <span style={{ color: '#16a34a', fontWeight: 'bold', fontSize: '0.98rem' }}>
            オンライン相談も可能！多様なサポート体制で安心です。
          </span>
        </div>
      </div>
    </section>
  );
};

export default AdmissionSection; 