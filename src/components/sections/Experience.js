'use client';

import styled from 'styled-components';
import Container from '@/components/common/Container';

// 실제 경력 사항을 카드형 타임라인으로 보여주는 섹션입니다.
const Section = styled.section`
  padding: 96px 0;
  /*
    섹션 구분 배경은 page.js의 ScrollReveal wrapper에서 관리합니다.
    이 section은 내부 콘텐츠와 여백만 담당해야 배경 밴드와 콘텐츠 영역이 어긋나지 않습니다.
  */
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

const Experience = ({ items }) => {
  return (
    <Section id="experience">
      <Inner>
        <Header>
          <div>
            <Number>02.</Number>
            <Title>Experience</Title>
          </div>
          <Lead>제품 요구사항을 화면, 상태, API 흐름으로 번역하고 팀이 유지보수하기 쉬운 구조로 정리한 경험을 중심으로 구성했습니다.</Lead>
        </Header>
        <List>
          {items.map(experience => (
            <Card key={experience.company}>
              <Meta>
                <Company>{experience.company}</Company>
                <Role>{experience.role}</Role>
                <Period>{experience.period}</Period>
              </Meta>
              <div>
                <Summary>{experience.summary}</Summary>
                <BulletList>
                  {experience.items.map(item => (
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
