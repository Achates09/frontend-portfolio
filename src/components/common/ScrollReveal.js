'use client';

import { useEffect, useRef, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

// 세로 방향 애니메이션의 시작 거리입니다. 값을 키우면 더 아래에서 올라오고, 줄이면 움직임이 더 은은해집니다.
const SLIDE_DISTANCE_Y = '56px';

// 가로 방향 애니메이션의 시작 거리입니다. 좌우 섹션 전환감을 크게 만들기 위해 세로보다 넓게 잡습니다.
const SLIDE_DISTANCE_X = '500px';

// 아래에서 위로 올라오며 나타나는 기본 reveal 애니메이션입니다.
const slideUp = keyframes`
  from {
    /* opacity 0으로 시작해 IntersectionObserver가 감지하기 전 콘텐츠 노출을 막습니다. */
    opacity: 0;
    /* translate3d를 사용해 GPU 합성 경로를 유도하고 스크롤 중 레이아웃 흔들림을 줄입니다. */
    transform: translate3d(0, ${SLIDE_DISTANCE_Y}, 0);
  }

  to {
    /* 최종 상태에서는 완전히 보이고 원래 위치에 놓입니다. */
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

// 섹션이 화면에 들어올 때 어떤 방향으로 "밀려 들어오는지"를 정의합니다.
// 오른쪽 바깥에서 원래 위치로 들어오기 때문에 이름은 콘텐츠가 왼쪽으로 이동하는 방향을 기준으로 합니다.
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

// 왼쪽 바깥에서 원래 위치로 들어오기 때문에 콘텐츠가 오른쪽으로 이동하며 등장합니다.
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

// 아직 보이지 않는 상태의 시작 transform을 direction prop에 맞춰 계산합니다.
// 애니메이션이 시작되기 전 CSS 상태와 keyframes의 from 상태를 맞춰 첫 프레임 깜빡임을 방지합니다.
const getHiddenTransform = $direction => {
  if ($direction === 'left') {
    // left reveal은 콘텐츠가 오른쪽에서 들어오도록 양수 X 위치에서 시작합니다.
    return `translate3d(${SLIDE_DISTANCE_X}, 0, 0)`;
  }

  if ($direction === 'right') {
    // right reveal은 콘텐츠가 왼쪽에서 들어오도록 음수 X 위치에서 시작합니다.
    return `translate3d(-${SLIDE_DISTANCE_X}, 0, 0)`;
  }

  // direction을 지정하지 않거나 up이면 아래쪽에서 위로 올라오는 기본 모션을 사용합니다.
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
  /* background: 섹션 밴드의 시각적 바탕을 결정하며 Motion의 이동과 분리됩니다. */
  background: ${({ $background, theme }) =>
    $background === 'base'
      ? theme.colors.background
      : $background === 'subtle'
        ? theme.colors.sectionAlt
        : 'transparent'};

  /*
    overflow hidden은 가로로 멀리 떨어진 시작 위치의 콘텐츠가
    화면 밖에서 들어오기 전 옆 섹션 위로 삐져나오는 것을 막습니다.
  */
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
  /* opacity: reveal 전에는 투명하게, reveal 후에는 keyframes 종료 상태와 같은 1로 유지합니다. */
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};

  /*
    transform: reveal 전에는 direction별 시작 위치로 이동시키고,
    reveal 후에는 실제 레이아웃 위치로 되돌립니다.
  */
  transform: ${({ $visible, $direction }) => ($visible ? 'translate3d(0, 0, 0)' : getHiddenTransform($direction))};

  ${({ $visible, $direction, $delay }) =>
    $visible &&
    css`
      /*
        direction: 섹션이 어느 쪽에서 들어오는지,
        delay: 여러 섹션을 순차적으로 보이게 하고 싶을 때 사용합니다.
      */
      /*
        720ms는 스크롤 reveal이 너무 급하지 않게 보이는 지속 시간입니다.
        cubic-bezier(0.22, 1, 0.36, 1)은 빠르게 들어온 뒤 부드럽게 멈추는 easing입니다.
        both는 애니메이션 전후 스타일을 유지해 시작/종료 순간의 튐을 줄입니다.
      */
      animation: ${$direction === 'left' ? slideLeft : $direction === 'right' ? slideRight : slideUp} 720ms cubic-bezier(0.22, 1, 0.36, 1) ${$delay}ms both;
    `}

  @media (prefers-reduced-motion: reduce) {
    /*
      사용자가 OS에서 움직임 줄이기를 켠 경우 애니메이션을 제거하고
      콘텐츠를 즉시 보여 접근성과 멀미 가능성을 우선합니다.
    */
    animation: none !important;
    transform: none !important;
    opacity: 1 !important;
  }
`;

const ScrollReveal = ({ children, direction = 'up', delay = 0, background = 'default' }) => {
  // IntersectionObserver가 관찰할 실제 섹션 Wrapper DOM을 보관합니다.
  const ref = useRef(null);

  // 한 번 보인 뒤에는 true로 고정되어 스크롤을 되돌려도 다시 숨지 않습니다.
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // ref.current는 렌더가 끝난 뒤에만 DOM 노드를 가리키므로 effect 안에서 읽습니다.
    const node = ref.current;

    if (!node || typeof IntersectionObserver === 'undefined') {
      // 브라우저가 IntersectionObserver를 지원하지 않으면 콘텐츠 접근성을 위해 바로 노출합니다.
      setVisible(true);
      return undefined;
    }

    // 요소가 뷰포트에 충분히 들어왔는지 감지해 reveal 애니메이션을 한 번만 시작합니다.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // 최초 진입 시 visible을 켜고 관찰을 끝내 불필요한 스크롤 콜백을 줄입니다.
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

    // Wrapper를 관찰 대상으로 등록해 섹션 단위로 등장 타이밍을 판단합니다.
    observer.observe(node);

    // 컴포넌트가 사라질 때 observer를 정리해 메모리 누수와 중복 콜백을 방지합니다.
    return () => observer.disconnect();
  }, []);

  return (
    /*
      Wrapper는 배경과 overflow를 담당하고, Motion은 실제 콘텐츠 이동을 담당합니다.
      두 레이어를 나누면 배경 밴드는 고정된 채 콘텐츠만 자연스럽게 등장합니다.
    */
    <Wrapper ref={ref} $background={background}>
      <Motion $visible={visible} $direction={direction} $delay={delay}>
        {children}
      </Motion>
    </Wrapper>
  );
};

export default ScrollReveal;
