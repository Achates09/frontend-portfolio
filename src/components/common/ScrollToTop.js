'use client';

import { useEffect, useState } from 'react';
import styled from 'styled-components';

const SHOW_BUTTON_AT = 400;

const Button = styled.button`
  position: fixed;
  right: clamp(20px, 4vw, 48px);
  bottom: clamp(20px, 4vw, 48px);
  z-index: 20;
  display: grid;
  width: 48px;
  height: 48px;
  place-items: center;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.background};
  background: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.32);
  cursor: pointer;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  pointer-events: ${({ $visible }) => ($visible ? 'auto' : 'none')};
  transform: translateY(${({ $visible }) => ($visible ? '0' : '12px')});
  transition:
    opacity 0.2s ease,
    transform 0.2s ease,
    background 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.text};
    outline-offset: 3px;
  }

  svg {
    width: 22px;
    height: 22px;
  }

  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    width: 44px;
    height: 44px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

// 페이지를 일정 거리 이상 내렸을 때만 나타나는 화면 상단 이동 버튼입니다.
const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY >= SHOW_BUTTON_AT);

    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });

    return () => window.removeEventListener('scroll', updateVisibility);
  }, []);

  const scrollToTop = event => {
    const topSection = document.getElementById('top');

    event.currentTarget.blur(); // 이동 중 버튼이 숨겨질 때 포커스가 보이지 않는 요소에 남지 않도록 해제합니다.
    window.history.replaceState(null, '', '#top'); // 버튼 클릭 시 주소창의 기존 해시를 #top으로 교체

    topSection?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <Button type="button" aria-label="페이지 맨 위로 이동" aria-hidden={!visible} tabIndex={visible ? 0 : -1} $visible={visible} onClick={scrollToTop}>
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 15 12 8l7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Button>
  );
};

export default ScrollToTop;
