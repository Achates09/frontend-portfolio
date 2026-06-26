'use client';

import styled from 'styled-components';
import Container from '@/components/common/Container';

// 경력 타임라인에 표시할 더미 회사/역할/성과 데이터입니다.
const experiences = [
  {
    company: 'Aster Labs',
    role: 'Frontend Developer',
    period: '2024.03 - 현재',
    summary: 'B2B 운영 대시보드와 고객 관리 워크플로우를 Next.js 기반으로 개발했습니다.',
    items: [
      'Redux-Saga 기반 인증 갱신, 권한 분기, 알림 큐 처리 플로우 구축',
      '공통 테이블, 필터, 모달 시스템을 컴포넌트 단위로 정리해 반복 개발 시간을 단축',
      '라우트 단위 코드 분할과 이미지 최적화로 주요 페이지 초기 로딩 개선',
    ],
  },
  {
    company: 'Pixel Commerce',
    role: 'Frontend Engineer',
    period: '2022.09 - 2024.02',
    summary: '커머스 프로모션 페이지와 주문/결제 화면을 React로 구현했습니다.',
    items: [
      '상품 옵션, 쿠폰, 결제 상태를 Redux store로 관리하고 예외 케이스를 문서화',
      'styled-components 테마 토큰을 도입해 브랜드별 UI 변형을 빠르게 대응',
      '디자이너, 백엔드와 API 계약을 정리하며 릴리즈 체크리스트 운영',
    ],
  },
];

// 실제 경력 사항을 카드형 타임라인으로 보여주는 섹션입니다.
const Section = styled.section`
  padding: 96px 0;
  background: rgba(255, 255, 255, 0.02);
`;

const Inner = styled(Container)``;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 34px;

  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    flex-direction: column;
  }
`;

const Number = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 800;
`;

const Title = styled.h2`
  margin-top: 10px;
  font-size: 38px;
`;

const Lead = styled.p`
  max-width: 520px;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 17px;
  line-height: 1.7;
`;

const List = styled.div`
  display: grid;
  gap: 18px;
`;

const Card = styled.article`
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 28px;
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: 8px;
  padding: 26px;
  background: ${({ theme }) => theme.colors.surface};

  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const Meta = styled.div`
  color: ${({ theme }) => theme.colors.textMuted};
`;

const Company = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  font-size: 22px;
`;

const Role = styled.p`
  margin-top: 6px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
`;

const Period = styled.p`
  margin-top: 14px;
  font-size: 14px;
`;

const Summary = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
  line-height: 1.7;
`;

// 각 경력의 구체적인 담당 업무와 성과를 목록으로 정리합니다.
const BulletList = styled.ul`
  display: grid;
  gap: 10px;
  margin-top: 16px;
  padding-left: 18px;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.7;
`;

const Experience = () => {
  return (
    <Section id="experience">
      <Inner>
        <Header>
          <div>
            <Number>02.</Number>
            <Title>Experience</Title>
          </div>
          <Lead>
            제품 요구사항을 화면, 상태, API 흐름으로 번역하고 팀이 유지보수하기 쉬운 구조로
            정리한 경험을 중심으로 구성했습니다.
          </Lead>
        </Header>
        <List>
          {experiences.map((experience) => (
            <Card key={experience.company}>
              <Meta>
                <Company>{experience.company}</Company>
                <Role>{experience.role}</Role>
                <Period>{experience.period}</Period>
              </Meta>
              <div>
                <Summary>{experience.summary}</Summary>
                <BulletList>
                  {experience.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </BulletList>
              </div>
            </Card>
          ))}
        </List>
      </Inner>
    </Section>
  );
};

export default Experience;
