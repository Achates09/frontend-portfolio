'use client';

import styled from 'styled-components';
import Container from '@/components/common/Container';

// 첫 화면에서 개발자 소개, 핵심 메시지, 주요 CTA를 보여주는 히어로 섹션입니다.
const Wrapper = styled.section`
  min-height: calc(100vh - 72px);
  display: flex;
  align-items: center;
  padding: 72px 0 96px;
`;

const Grid = styled(Container)`
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(280px, 0.8fr);
  align-items: center;
  gap: 56px;

  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const Eyebrow = styled.p`
  margin-bottom: 18px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 15px;
  font-weight: 700;
`;

const Title = styled.h1`
  max-width: 790px;
  font-size: clamp(46px, 7vw, 88px);
  font-weight: 900;
  line-height: 1.05;
  letter-spacing: 0;
`;

const Accent = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

const Description = styled.p`
  max-width: 680px;
  margin-top: 28px;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 20px;
  line-height: 1.8;
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 36px;
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 20px;
  border: 1px solid ${({ $primary, theme }) => ($primary ? theme.colors.primary : theme.colors.line)};
  border-radius: 8px;
  color: ${({ $primary, theme }) => ($primary ? theme.colors.background : theme.colors.text)};
  background: ${({ $primary, theme }) => ($primary ? theme.colors.primary : 'transparent')};
  font-weight: 800;
  transition:
    transform 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const Snapshot = styled.aside`
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: 8px;
  background: rgba(18, 24, 32, 0.74);
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.28);
`;

const SnapshotHeader = styled.div`
  display: flex;
  gap: 8px;
  padding: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.line};
`;

const Dot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
`;

// 오른쪽 코드 카드로 기술 스택과 개발 방향성을 시각적으로 요약합니다.
const Code = styled.pre`
  padding: 24px;
  overflow-x: auto;
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: var(--font-geist-mono), monospace;
  font-size: 14px;
  line-height: 1.8;

  strong {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
  }
`;

const Hero = ({ data }) => {
  const stackText = data.stack.map(item => `'${item}'`).join(', ');
  const focusText = data.focus.map(item => `'${item}'`).join(', ');

  return (
    <Wrapper id="top">
      <Grid>
        <div>
          <Eyebrow>{data.eyebrow}</Eyebrow>
          <Title>
            {data.titlePrefix} <Accent>{data.titleAccent}</Accent>
            {data.titleSuffix}
          </Title>
          <Description>{data.description}</Description>
          <Actions>
            <Button $primary href="#experience">
              경력 보기
            </Button>
            <Button href={`mailto:${data.email}`}>{data.email}</Button>
          </Actions>
        </div>
        <Snapshot aria-label="기술 스택 요약">
          <SnapshotHeader>
            <Dot $color="#ff6b6b" />
            <Dot $color="#f6c177" />
            <Dot $color="#66d9c6" />
          </SnapshotHeader>
          <Code>
            {`const developer = {
  role: `}
            <strong>{`'Frontend Engineer'`}</strong>
            {`,
  stack: [${stackText}],
  asyncFlow: '${data.asyncFlow}',
  styling: '${data.styling}',
  focus: [${focusText}]
};`}
          </Code>
        </Snapshot>
      </Grid>
    </Wrapper>
  );
};

export default Hero;
