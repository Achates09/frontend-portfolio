'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Container from '@/components/common/Container';

// 대표 프로젝트의 문제 해결 과정과 실제 화면을 함께 보여주는 케이스 스터디 섹션입니다.
const Section = styled.section`
  padding: 104px 0;
`;

// 제목과 소개 문구는 데스크톱에서 두 열로 배치하고, 태블릿 이하에서는 한 열로 쌓습니다.
const Header = styled(Container)`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 0.55fr);
  gap: 42px;
  align-items: end;

  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const Eyebrow = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 800;
`;

const Title = styled.h2`
  max-width: 780px;
  margin-top: 12px;
  font-size: clamp(34px, 5vw, 52px);
  line-height: 1.2;
  word-break: keep-all;
`;

const Project = styled.p`
  margin-top: 18px;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 800;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 17px;
  line-height: 1.8;
`;

const Content = styled(Container)`
  /*
   * 왼쪽에는 Problem/Approach/Outcome을, 오른쪽에는 이미지 갤러리와 지표를 배치합니다.
   * minmax(0, ...)은 갤러리처럼 내부 너비가 큰 요소 때문에 Grid 열이 컨테이너 밖으로
   * 확장되는 것을 방지합니다.
   */
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(360px, 1.1fr);
  gap: 24px;
  margin-top: 44px;

  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const StageList = styled.ol`
  /* 데이터의 순서 자체가 문제 해결 흐름을 나타내므로 의미상 순서 목록(ol)을 사용합니다. */
  display: grid;
  gap: 12px;
  list-style: none;
`;

const Stage = styled.li`
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: 12px;
  padding: 22px;
  background: ${({ theme }) => theme.colors.surface};
`;

const StageLabel = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-family: var(--font-geist-mono), monospace;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const StageTitle = styled.h3`
  margin-top: 8px;
  font-size: 19px;
`;

const StageCopy = styled.p`
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.7;
`;

const Gallery = styled.div`
  /* Viewport가 가로로 스크롤될 때 다음 이미지가 카드 바깥으로 노출되지 않도록 잘라냅니다. */
  min-width: 0;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: 14px;
  background: #0d131b;
  box-shadow: 0 28px 90px rgba(0, 0, 0, 0.28);
`;

const GalleryBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 7px;
  padding: 13px 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.line};
`;

const WindowDots = styled.div`
  /* 브라우저 창 형태를 연상시키는 장식이며 JSX에서 aria-hidden으로 보조 기술에는 숨깁니다. */
  display: flex;
  gap: 7px;

  span {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.line};
  }
`;

const ImageCount = styled.span`
  /* 현재 프레임 번호는 스크롤 및 버튼 이동 시 activeImage 상태와 함께 갱신됩니다. */
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: var(--font-geist-mono), monospace;
  font-size: 12px;
`;

const Viewport = styled.div`
  /*
   * 갤러리의 실제 가로 스크롤 영역입니다.
   * inline mandatory는 가로쓰기 환경에서 스크롤이 끝날 때 반드시 가장 가까운 프레임에
   * 맞춰 정지하게 합니다. 터치 스와이프, 트랙패드, 마우스 스크롤 모두 같은 규칙을 사용합니다.
   */
  display: flex;
  overflow-x: auto;
  overscroll-behavior-inline: contain;
  scroll-snap-type: inline mandatory;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Slide = styled.figure`
  /*
   * 각 슬라이드는 Viewport 너비의 정확히 100%를 차지합니다.
   * scroll-snap-stop: always를 사용해 빠르게 스와이프해도 중간 프레임을 건너뛰지 않게 합니다.
   */
  flex: 0 0 100%;
  min-width: 0;
  scroll-snap-align: start;
  scroll-snap-stop: always;
`;

const Screenshot = styled(Image)`
  /*
   * 정적으로 import한 이미지에서 Next.js가 읽은 실제 width/height로 레이아웃 이동을 방지하면서,
   * 실제 화면에서는 갤러리 너비에 맞게 반응형으로 축소합니다.
   * 서로 조금 다른 원본 비율은 2:1 프레임 안에서 object-fit: contain으로 잘리지 않게 표시합니다.
   * 따라서 원본 이미지 비율이 달라도 이미지 전체가 보이며, 남는 공간만 배경색으로 표시됩니다.
   */
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 2 / 1;
  object-fit: contain;
  background: ${({ theme }) => theme.colors.surface};
`;

const Caption = styled.figcaption`
  padding: 11px 16px;
  border-top: 1px solid ${({ theme }) => theme.colors.line};
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 12px;
`;

const GalleryControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 16px;
  border-top: 1px solid ${({ theme }) => theme.colors.line};
`;

const ArrowButtons = styled.div`
  display: flex;
  gap: 8px;
`;

const ArrowButton = styled.button`
  /* 첫 이미지와 마지막 이미지에서는 이동할 수 없는 방향의 버튼을 비활성화합니다. */
  display: grid;
  width: 38px;
  height: 38px;
  place-items: center;
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.surface};
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

const Pagination = styled.div`
  display: flex;
  gap: 8px;
`;

const PaginationButton = styled.button`
  /* 현재 프레임만 긴 막대 형태로 표시해 이미지 위치를 빠르게 파악하게 합니다. */
  width: ${({ $active }) => ($active ? '24px' : '8px')};
  height: 8px;
  border: 0;
  border-radius: 999px;
  background: ${({ $active, theme }) => ($active ? theme.colors.primary : theme.colors.line)};
  cursor: pointer;
  transition:
    width 0.2s ease,
    background 0.2s ease;

  @media (prefers-reduced-motion: reduce) {
    /* 운영체제에서 움직임 줄이기를 선택한 사용자는 인디케이터 전환 애니메이션을 보지 않습니다. */
    transition: none;
  }
`;

const Metrics = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-top: 14px;

  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const Metric = styled.div`
  border: 1px solid rgba(102, 217, 198, 0.28);
  border-radius: 10px;
  padding: 16px;
  background: rgba(102, 217, 198, 0.06);
`;

const MetricValue = styled.strong`
  display: block;
  font-size: 24px;
`;

const MetricLabel = styled.span`
  display: block;
  margin-top: 4px;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 13px;
`;

const ExampleBadge = styled.span`
  display: inline-block;
  margin-left: 6px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 999px;
  padding: 2px 6px;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 10px;
  vertical-align: middle;
`;

const Note = styled.p`
  grid-column: 1 / -1;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 12px;
  line-height: 1.6;
`;

export default function FeaturedCaseStudy({ data }) {
  // DOM 스크롤 위치를 직접 이동시키기 위해 가로 Viewport 요소를 참조합니다.
  const viewportRef = useRef(null);

  // 현재 보이는 이미지 인덱스를 번호, 페이지 인디케이터, 버튼 활성 상태가 함께 공유합니다.
  const [activeImage, setActiveImage] = useState(0);

  // images가 없는 데이터가 전달되어도 렌더링 중 오류가 발생하지 않도록 빈 배열을 기본값으로 사용합니다.
  const images = data.images ?? [];

  // 인덱스를 실제 픽셀 위치(Viewport 너비 × 인덱스)로 변환해 정확히 한 프레임만 이동합니다.
  const scrollToImage = index => {
    const viewport = viewportRef.current;

    if (!viewport) return;

    viewport.scrollTo({
      left: viewport.clientWidth * index,
      // 버튼과 인디케이터로 이동할 때만 부드럽게 전환합니다.
      // 사용자가 직접 스와이프할 때는 브라우저의 기본 스크롤과 CSS scroll-snap이 처리합니다.
      behavior: 'smooth',
    });
    setActiveImage(index);
  };

  // 터치나 트랙패드로 직접 스크롤한 경우, 가장 가까운 프레임을 계산해 React 상태를 동기화합니다.
  const updateActiveImage = event => {
    const viewport = event.currentTarget;
    const nextIndex = Math.round(viewport.scrollLeft / viewport.clientWidth);

    // 반동 스크롤 등으로 계산값이 범위를 벗어나더라도 유효한 이미지 인덱스 안으로 제한합니다.
    setActiveImage(Math.min(Math.max(nextIndex, 0), images.length - 1));
  };

  // Viewport에 키보드 포커스가 있을 때 좌우 방향키로도 한 프레임씩 탐색할 수 있습니다.
  const handleGalleryKeyDown = event => {
    if (event.key === 'ArrowLeft') scrollToImage(Math.max(activeImage - 1, 0));
    if (event.key === 'ArrowRight') scrollToImage(Math.min(activeImage + 1, images.length - 1));
  };

  return (
    <Section id="case-study">
      <Header>
        <div>
          <Eyebrow>{data.eyebrow}</Eyebrow>
          <Title>{data.title}</Title>
          <Project>{data.project}</Project>
        </div>
        <Description>{data.description}</Description>
      </Header>

      <Content>
        <StageList>
          {data.stages.map(stage => (
            <Stage key={stage.label}>
              <StageLabel>{stage.label}</StageLabel>
              <StageTitle>{stage.title}</StageTitle>
              <StageCopy>{stage.copy}</StageCopy>
            </Stage>
          ))}
        </StageList>

        <div>
          <Gallery aria-label="SEDN 관리자 템플릿 화면 이미지 갤러리">
            <GalleryBar>
              <WindowDots aria-hidden="true">
                <span />
                <span />
                <span />
              </WindowDots>
              {/* aria-live를 통해 이미지 번호 변경을 스크린 리더에도 방해되지 않는 방식으로 알립니다. */}
              <ImageCount aria-live="polite">
                {activeImage + 1} / {images.length}
              </ImageCount>
            </GalleryBar>

            {/* tabIndex=0은 일반 div인 스크롤 영역을 키보드로 진입할 수 있게 합니다. */}
            <Viewport ref={viewportRef} tabIndex={0} onScroll={updateActiveImage} onKeyDown={handleGalleryKeyDown}>
              {images.map((image, index) => (
                <Slide key={index}>
                  {/* image.src는 정적 import로 생성된 이미지 객체이므로 width와 height를 따로 전달할 필요가 없습니다.
                      Next.js가 파일의 실제 크기와 비율을 빌드 시 자동으로 사용합니다.
                      sizes는 반응형 표시 너비를 브라우저에 알립니다.
                      output: export에서는 이미지 최적화 서버가 없으므로 정적 원본을 unoptimized로 제공합니다. */}
                  <Screenshot src={image.src} alt={image.alt} sizes="(max-width: 1024px) calc(100vw - 32px), 55vw" unoptimized />
                  <Caption>{image.caption}</Caption>
                </Slide>
              ))}
            </Viewport>

            <GalleryControls>
              <Pagination aria-label="이미지 선택">
                {images.map((image, index) => (
                  /* aria-current는 현재 선택된 페이지를 보조 기술에도 전달합니다. */
                  <PaginationButton
                    key={image.src.src}
                    type="button"
                    aria-label={`${index + 1}번 이미지 보기`}
                    aria-current={activeImage === index ? 'true' : undefined}
                    $active={activeImage === index}
                    onClick={() => scrollToImage(index)}
                  />
                ))}
              </Pagination>
              <ArrowButtons>
                <ArrowButton type="button" aria-label="이전 이미지" disabled={activeImage === 0} onClick={() => scrollToImage(activeImage - 1)}>
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="m15 5-7 7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </ArrowButton>
                <ArrowButton type="button" aria-label="다음 이미지" disabled={activeImage === images.length - 1} onClick={() => scrollToImage(activeImage + 1)}>
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="m9 5 7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </ArrowButton>
              </ArrowButtons>
            </GalleryControls>
          </Gallery>

          <Metrics>
            {data.metrics.map(metric => (
              <Metric key={metric.label}>
                <MetricValue>
                  {metric.value}
                  {/* 실제 측정값이 아닌 더미 수치는 오해하지 않도록 데이터 기준으로 예시 배지를 표시합니다. */}
                  {metric.isExample && <ExampleBadge>예시</ExampleBadge>}
                </MetricValue>
                <MetricLabel>{metric.label}</MetricLabel>
              </Metric>
            ))}
            {data.note && <Note>{data.note}</Note>}
          </Metrics>
        </div>
      </Content>
    </Section>
  );
}
