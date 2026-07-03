'use client';

import { useEffect, useRef, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

// 슬라이드 시작 거리입니다. 값을 키우면 더 멀리서 들어오고, 줄이면 더 은은하게 들어옵니다.
const SLIDE_DISTANCE_Y = '56px';
const SLIDE_DISTANCE_X = '500px';

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, ${SLIDE_DISTANCE_Y}, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

// 섹션이 화면에 들어올 때 어떤 방향으로 "밀려 들어오는지"를 정의합니다.
const slideLeft = keyframes`
  from {
    opacity: 0;
    transform: translate3d(${SLIDE_DISTANCE_X}, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const slideRight = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-${SLIDE_DISTANCE_X}, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const getHiddenTransform = $direction => {
  if ($direction === 'left') {
    return `translate3d(${SLIDE_DISTANCE_X}, 0, 0)`;
  }

  if ($direction === 'right') {
    return `translate3d(-${SLIDE_DISTANCE_X}, 0, 0)`;
  }

  return `translate3d(0, ${SLIDE_DISTANCE_Y}, 0)`;
};

const Wrapper = styled.div`
  /*
    바깥 Wrapper는 섹션의 실제 영역과 배경색을 고정해서 담당합니다.
    애니메이션 transform을 이 요소에 주면 배경 밴드까지 움직여서
    페이지의 컨텍스트 구분 영역과 배경색 영역이 어긋나 보일 수 있습니다.
    base 배경은 body의 그라데이션을 덮어 특정 섹션 주변이 밝게 튀는 문제를 막습니다.
    subtle 배경은 불투명한 색을 써서 body의 radial-gradient가 리스트 뒤로 비치지 않게 합니다.
  */
  background: ${({ $background, theme }) =>
    $background === 'base'
      ? theme.colors.background
      : $background === 'subtle'
        ? theme.colors.sectionAlt
        : 'transparent'};
  overflow: hidden;
`;

const Motion = styled.div`
  /* transform/opacity만 애니메이션해서 레이아웃 재계산을 최소화합니다. */
  will-change: transform, opacity;

  /*
    visible이 되기 전에는 콘텐츠만 숨기고 시작 위치에 미리 배치합니다.
    배경은 바깥 Wrapper에 남아 있으므로 섹션 영역과 배경색이 항상 같은 위치에 머뭅니다.
    이 값이 없으면 이미 보이는 섹션에 뒤늦게 애니메이션이 붙어 깜빡이는 것처럼 보일 수 있습니다.
  */
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible, $direction }) => ($visible ? 'translate3d(0, 0, 0)' : getHiddenTransform($direction))};

  ${({ $visible, $direction, $delay }) =>
    $visible &&
    css`
      /*
        direction: 섹션이 어느 쪽에서 들어오는지,
        delay: 여러 섹션을 순차적으로 보이게 하고 싶을 때 사용합니다.
      */
      animation: ${$direction === 'left' ? slideLeft : $direction === 'right' ? slideRight : slideUp} 720ms cubic-bezier(0.22, 1, 0.36, 1) ${$delay}ms both;
    `}

  @media (prefers-reduced-motion: reduce) {
    animation: none !important;
    transform: none !important;
    opacity: 1 !important;
  }
`;

const ScrollReveal = ({ children, direction = 'up', delay = 0, background = 'default' }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node || typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        // threshold를 낮추면 더 일찍, 높이면 더 많이 들어왔을 때 애니메이션이 시작됩니다.
        threshold: 0.3,
        // 아래쪽 여백을 음수로 주면, 요소가 화면 하단에 닿기 전에 미리 등장합니다.
        rootMargin: '0px 0px -10% 0px',
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <Wrapper ref={ref} $background={background}>
      <Motion $visible={visible} $direction={direction} $delay={delay}>
        {children}
      </Motion>
    </Wrapper>
  );
};

export default ScrollReveal;
