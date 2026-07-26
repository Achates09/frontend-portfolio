'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Container from './Container';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#project-improvement', label: 'Improvement' },
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
  /* 데스크톱에서는 모든 섹션 링크를 한 줄로 바로 노출합니다. */
  display: flex;
  align-items: center;
  gap: 22px;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 14px;

  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    /* 모바일에서는 공간이 부족하므로 데스크톱 링크를 숨기고 MenuButton으로 대체합니다. */
    display: none;
  }
`;

const NavLink = styled.a`
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

const MenuButton = styled.button`
  /*
   * 햄버거 버튼은 기본적으로 숨겨 데스크톱 레이아웃에 영향을 주지 않습니다.
   * 44px 크기는 터치 화면에서도 누르기 쉬운 조작 영역을 확보하기 위한 값입니다.
   */
  display: none;
  width: 44px;
  height: 44px;
  place-items: center;
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.surface};
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    /* 모바일 구간에서만 햄버거 버튼을 표시합니다. */
    display: grid;
  }

  svg {
    width: 22px;
    height: 22px;
  }
`;

const MobileLinks = styled.nav`
  /*
   * 모바일 메뉴는 DOM에 유지하되 기본 상태에서는 보이지 않습니다.
   * $open은 스타일에만 사용하는 transient prop이라 실제 HTML 속성으로 전달되지 않습니다.
   */
  display: none;

  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    /* open 상태일 때만 2열 메뉴를 열어 짧은 화면에서도 전체 항목이 과도하게 길어지지 않게 합니다. */
    display: ${({ $open }) => ($open ? 'grid' : 'none')};
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8px;
    padding: 0 16px 16px;
  }
`;

const MobileNavLink = styled.a`
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: 8px;
  padding: 12px;
  color: ${({ theme }) => theme.colors.textMuted};
  background: ${({ theme }) => theme.colors.surface};
  font-size: 14px;
  text-align: center;
`;

const Navbar = () => {
  // 모바일 메뉴가 열려 있는지를 버튼 아이콘, 접근성 속성, 메뉴 표시 상태가 함께 공유합니다.
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // 메뉴가 닫혀 있을 때는 불필요한 전역 키보드 이벤트를 등록하지 않습니다.
    if (!isOpen) return undefined;

    // 키보드 사용자가 ESC 키로 열린 모바일 메뉴를 즉시 닫을 수 있게 합니다.
    const closeOnEscape = event => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    window.addEventListener('keydown', closeOnEscape);

    // 메뉴가 닫히거나 컴포넌트가 사라질 때 이벤트를 정리해 중복 실행과 메모리 누수를 방지합니다.
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [isOpen]);

  // 메뉴 항목을 선택해 앵커로 이동한 뒤에는 콘텐츠를 가리지 않도록 메뉴를 자동으로 닫습니다.
  const closeMenu = () => setIsOpen(false);

  return (
    <Header>
      <Inner>
        <Logo href="#top" aria-label="홈으로 이동">
          <Mark src={`${basePath}/navbar-mark.svg`} alt="" width={34} height={34} unoptimized aria-hidden="true" />
          Seokryang.dev
        </Logo>
        <Links aria-label="주요 섹션">
          {navItems.map(item => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </Links>
        {/* aria-expanded는 메뉴의 열림 상태를, aria-controls는 이 버튼이 제어하는 메뉴의 id를 보조 기술에 전달합니다. */}
        <MenuButton
          type="button"
          aria-label={isOpen ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen(current => !current)}
        >
          {/* 같은 SVG에서 open 상태에 따라 햄버거 아이콘과 닫기(X) 아이콘의 path만 교체합니다.
              버튼 자체에 aria-label이 있으므로 장식용 SVG는 스크린 리더에서 숨깁니다. */}
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d={isOpen ? 'M6 6l12 12M18 6 6 18' : 'M4 7h16M4 12h16M4 17h16'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </MenuButton>
      </Inner>
      {/* 데스크톱 Links와 별도의 nav를 사용해 모바일 화면에 적합한 2열 터치 메뉴를 제공합니다. */}
      <MobileLinks id="mobile-navigation" aria-label="모바일 주요 섹션" $open={isOpen}>
        {navItems.map(item => (
          <MobileNavLink key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </MobileNavLink>
        ))}
      </MobileLinks>
    </Header>
  );
};

export default Navbar;
