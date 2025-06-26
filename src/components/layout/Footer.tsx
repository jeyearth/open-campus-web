import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{
      width: '100%',
      height: '300px',
      background: '#1A202C',
      color: '#fff',
      textAlign: 'center',
      padding: '18px 0',
      fontSize: '0.98rem',
      letterSpacing: '0.01em',
      marginTop: 48,
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16 }}>
        <span>© 2024 JFUT 情報学科</span>
        <span>|</span>
        <a href="mailto:info@jfu.ac.jp" style={{ color: '#fff', textDecoration: 'underline', fontWeight: 'bold' }}>お問い合わせ</a>
      </div>
    </footer>
  );
};

export default Footer; 