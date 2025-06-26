import React from 'react';

const schedule = [
  { time: '9:30～10:00', content: '受付' },
  { time: '10:00～10:30', content: '全体説明・歓迎' },
  { time: '10:30～11:30', content: '学科説明会' },
  { time: '11:40～12:40', content: '模擬授業／研究室見学（選択制）' },
  { time: '12:40～13:40', content: 'ランチタイム（学食体験）' },
  { time: '13:40～15:30', content: '在学生との交流／個別相談会／入試説明会' },
  { time: '15:30～16:00', content: '閉場' },
];

const ScheduleSection: React.FC = () => {
  return (
    <section style={{ background: '#fff', padding: '48px 0' }}>
      <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: 32 }}>
          オープンキャンパスの一日の流れ
        </h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '0 auto', background: '#f8fafc', borderRadius: 12, overflow: 'hidden' }}>
          <tbody>
            {schedule.map((item, i) => (
              <tr key={i} style={{ borderBottom: '1px solid #e5e7eb' }}>
                <td style={{ padding: '16px 8px', fontWeight: 'bold', width: '120px', color: '#2563eb', fontSize: '1.05rem' }}>{item.time}</td>
                <td style={{ padding: '16px 8px', textAlign: 'left', fontSize: '1rem', color: '#334155' }}>{item.content}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ScheduleSection; 