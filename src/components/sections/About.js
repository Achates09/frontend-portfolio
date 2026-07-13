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

// 생년월일과 지역을 설명 목록으로 묶고 각 항목을 세로로 배치합니다.
const Profile = styled.dl`
  display: grid;
  gap: 10px;
  margin-top: 20px;
`;

const ProfileItem = styled.div`
  display: grid;
  /* Experience의 CompanyDetail처럼 라벨 열을 고정해 모든 값의 시작 위치를 맞춥니다. */
  grid-template-columns: 64px 1fr;
  gap: 10px;
  align-items: center;
`;

// 라벨은 보조 색상으로, 실제 프로필 값은 더 크고 굵게 구분합니다.
const ProfileLabel = styled.dt`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 15px;
`;

const ProfileValue = styled.dd`
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: 17px;
  font-weight: 700;
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

const About = ({ data }) => {
  return (
    <Section id="about">
      <Grid>
        <div>
          <Number>01.</Number>
          <Title>About Me</Title>
          <Profile>
            <ProfileItem>
              <ProfileLabel>Birth</ProfileLabel>
              <ProfileValue>{data.birthDate}</ProfileValue>
            </ProfileItem>
            <ProfileItem>
              <ProfileLabel>Location</ProfileLabel>
              <ProfileValue>{data.location}</ProfileValue>
            </ProfileItem>
          </Profile>
        </div>
        <div>
          <Copy>
            {data.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Copy>
          <Stats>
            {data.stats.map((stat) => (
              <Stat key={stat.label}>
                <StatValue>{stat.value}</StatValue>
                <StatLabel>{stat.label}</StatLabel>
              </Stat>
            ))}
          </Stats>
        </div>
      </Grid>
    </Section>
  );
};

export default About;
