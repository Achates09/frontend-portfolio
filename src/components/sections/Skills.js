'use client';

import styled from 'styled-components';
import Container from '@/components/common/Container';

// 보유 기술을 카테고리별 칩 형태로 보여주는 섹션입니다.
const Section = styled.section`
  padding: 96px 0;
`;

const Inner = styled(Container)``;

const Header = styled.div`
  margin-bottom: 34px;
`;

const Number = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 800;
`;

const Title = styled.h2`
  margin-top: 10px;
  font-size: 38px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;

  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.article`
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: 8px;
  padding: 24px;
  background: rgba(18, 24, 32, 0.72);
`;

const CardTitle = styled.h3`
  font-size: 21px;
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 18px;
`;

const Chip = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 34px;
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: 8px;
  padding: 0 12px;
  color: ${({ theme }) => theme.colors.textMuted};
  background: ${({ theme }) => theme.colors.surfaceAlt};
  font-size: 14px;
  font-weight: 700;
`;

const Skills = ({ groups }) => {
  return (
    <Section id="skills">
      <Inner>
        <Header>
          <Number>03.</Number>
          <Title>Skills</Title>
        </Header>
        <Grid>
          {groups.map((group) => (
            <Card key={group.title}>
              <CardTitle>{group.title}</CardTitle>
              <SkillList>
                {group.skills.map((skill) => (
                  <Chip key={skill}>{skill}</Chip>
                ))}
              </SkillList>
            </Card>
          ))}
        </Grid>
      </Inner>
    </Section>
  );
};

export default Skills;
