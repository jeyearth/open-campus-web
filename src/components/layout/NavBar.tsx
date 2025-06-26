import React from 'react';

const navItems = [
  { label: '表紙', to: '#hero' },
  { label: '特色・強み', to: '#features' },
  { label: '3ステップ', to: '#steps' },
  { label: '分野紹介', to: '#fields' },
  { label: 'プログラム', to: '#programs' },
  { label: 'モデルコース', to: '#courses' },
  { label: 'タイムスケジュール', to: '#schedule' },
  { label: '体験者の声', to: '#voices' },
  { label: '施設紹介', to: '#facilities' },
  { label: 'サークル', to: '#circles' },
  { label: '入試・相談', to: '#admission' },
  { label: 'アクセス', to: '#access' },
];

const NavBar: React.FC = () => {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      background: 'rgba(255,255,255,0.97)',
      boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
      zIndex: 1000,
      borderBottom: '1px solid #e5e7eb',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', height: 56, padding: '0 16px', overflowX: 'auto' }}>
        <span style={{ fontWeight: 'bold', fontSize: '1.1rem', marginRight: 24, color: '#2563eb' }}>JFUT情報学科</span>
        <ul style={{ display: 'flex', gap: 18, listStyle: 'none', margin: 0, padding: 0 }}>
          {navItems.map((item) => (
            <li key={item.to}>
              <a href={item.to} style={{ color: '#334155', textDecoration: 'none', fontWeight: 500, fontSize: '1rem', padding: '4px 0', transition: 'color 0.2s' }}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar; 