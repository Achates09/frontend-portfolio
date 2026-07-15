'use client';

import Image from 'next/image';
import styled from 'styled-components';
import Container from './Container';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

// GitHub Pages에서는 앱이 /frontend-portfolio 아래에 배포됩니다.
// NEXT_PUBLIC_BASE_PATH는 .env에서 읽는 값이 아니라 next.config.mjs가 빌드 시 클라이언트 코드에 주입합니다.
// 로컬에서는 빈 문자열이 주입되며, || ''는 설정이 없는 경우에도 루트 경로를 사용하게 하는 안전장치입니다.
// next/image는 public 이미지에 basePath를 자동 적용하지 않으므로 빌드 설정에서 전달받아 직접 붙입니다.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

// 화면 상단에 고정되는 포트폴리오 섹션 내비게이션입니다.
const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(11, 15, 20, 0.82);
  backdrop-filter: blur(18px);
`;

const Inner = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 72px;
  gap: 24px;
`;

const Logo = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 800;
  letter-spacing: 0;
`;

const Mark = styled(Image)`
  display: block;
  flex: 0 0 auto;
  width: 34px;
  height: 34px;
`;

const Links = styled.nav`
  display: flex;
  align-items: center;
  gap: 22px;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 14px;

  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    display: none;
  }
`;

const NavLink = styled.a`
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

const Navbar = () => {
  return (
    <Header>
      <Inner>
        <Logo href="#top" aria-label="홈으로 이동">
          <Mark src={`${basePath}/navbar-mark.svg`} alt="" width={34} height={34} unoptimized aria-hidden="true" />
          Kevin.dev
        </Logo>
        <Links aria-label="주요 섹션">
          {navItems.map(item => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </Links>
      </Inner>
    </Header>
  );
};

export default Navbar;
