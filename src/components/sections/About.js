'use client';

import styled from 'styled-components';
import Container from '@/components/common/Container';

// 자기소개와 주요 지표를 함께 보여주는 소개 섹션입니다.
const Section = styled.section`
  padding: 96px 0;
`;

const Grid = styled(Container)`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 48px;

  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const Number = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 800;
`;

const Title = styled.h2`
  margin-top: 10px;
  font-size: 38px;
  line-height: 1.2;
`;

const Copy = styled.div`
  display: grid;
  gap: 18px;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 18px;
  line-height: 1.8;
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  margin-top: 24px;

  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    grid-template-columns: 1fr;
  }
`;

// 경력 연차, 출시 경험 등 빠르게 훑을 수 있는 숫자 정보를 담습니다.
const Stat = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: 8px;
  padding: 18px;
  background: rgba(18, 24, 32, 0.66);
`;

const StatValue = styled.strong`
  display: block;
  color: ${({ theme }) => theme.colors.text};
  font-size: 26px;
`;

const StatLabel = styled.span`
  display: block;
  margin-top: 4px;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 14px;
`;

const About = () => {
  return (
    <Section id="about">
      <Grid>
        <div>
          <Number>01.</Number>
          <Title>About Me</Title>
        </div>
        <div>
          <Copy>
            <p>
              복잡한 요구사항을 작은 컴포넌트와 명확한 데이터 흐름으로 나누는 일을 좋아합니다.
              Next.js 기반 서비스에서 페이지 구조, 렌더링 전략, 상태 관리 패턴을 설계하며
              사용자 경험과 개발자 경험 사이의 균형을 고민합니다.
            </p>
            <p>
              더미 경력 기준으로는 SaaS 대시보드, 커머스, 예약 플랫폼을 만들었고,
              Redux-Saga로 인증, 결제, 알림처럼 순서가 중요한 비동기 플로우를 다뤘습니다.
            </p>
          </Copy>
          <Stats>
            <Stat>
              <StatValue>3+</StatValue>
              <StatLabel>Years Experience</StatLabel>
            </Stat>
            <Stat>
              <StatValue>12</StatValue>
              <StatLabel>Shipped Features</StatLabel>
            </Stat>
            <Stat>
              <StatValue>4</StatValue>
              <StatLabel>Main Projects</StatLabel>
            </Stat>
          </Stats>
        </div>
      </Grid>
    </Section>
  );
};

export default About;
