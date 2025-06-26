import React, { useState } from 'react';
import styled from 'styled-components';

const navItems = [
  { label: '特色・強み', to: '#features' },
  { label: '3ステップ', to: '#steps' },
  // { label: '分野紹介', to: '#fields' },
  // { label: 'プログラム', to: '#programs' },
  // { label: 'モデルコース', to: '#courses' },
  { label: 'タイムスケジュール', to: '#schedule' },
  { label: '体験者の声', to: '#voices' },
  // { label: '施設紹介', to: '#facilities' },
  // { label: 'サークル', to: '#circles' },
  // { label: '入試・相談', to: '#admission' },
  { label: 'アクセス', to: '#access' },
];

const MyNavBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.97);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  z-index: 1000;
  border-bottom: 1px solid #e5e7eb;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 56px;
  padding: 0 16px;
  overflow-x: auto;
  justify-content: space-between;
`;

const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.span`
  font-weight: bold;
  font-size: 1.2rem;
  margin-right: 24px;
  color: #2563eb;
`;

const NavList = styled.ul<{ open: boolean }>`
  display: flex;
  gap: 18px;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    position: fixed;
    top: 56px;
    left: 0;
    width: 100vw;
    background: rgba(255, 255, 255, 0.97);
    flex-direction: column;
    gap: 0;
    padding: 16px 0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-120%)')};
    transition: transform 0.3s;
    z-index: 999;
  }
`;

const NavItem = styled.a`
  color: #334155;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  padding: 4px 4px;
  transition: color 0.2s;
  cursor: pointer;
  &:hover {
    color: #2563eb;
  }
  @media (max-width: 768px) {
    display: block;
    padding: 14px 24px;
    font-size: 1rem;
  }
`;

const Hamburger = styled.button<{ open: boolean }>`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  width: 32px;
  height: 32px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1001;
  @media (max-width: 768px) {
    display: flex;
  }
  span {
    display: block;
    width: 24px;
    height: 3px;
    margin: 3px 0;
    background: ${({ open }) => (open ? '#2563eb' : '#334155')};
    border-radius: 2px;
    transition: 0.3s;
  }
`;

const NavBar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleNavClick = () => setOpen(false);

  return (
    <MyNavBar>
      <NavContainer>
        <LeftWrapper>
          <Logo>JFUT 情報学科</Logo>
        </LeftWrapper>
        <Hamburger
          open={open}
          aria-label="メニュー"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span style={{
            transform: open ? 'rotate(45deg) translate(5px, 5px)' : 'none'
          }} />
          <span style={{
            opacity: open ? 0 : 1
          }} />
          <span style={{
            transform: open ? 'rotate(-45deg) translate(8px, -8px)' : 'none'
          }} />
        </Hamburger>
        <NavList open={open}>
          {navItems.map((item) => (
            <li key={item.to}>
              <NavItem href={item.to} onClick={handleNavClick}>
                {item.label}
              </NavItem>
            </li>
          ))}
        </NavList>
      </NavContainer>
    </MyNavBar>
  );
};

export default NavBar;