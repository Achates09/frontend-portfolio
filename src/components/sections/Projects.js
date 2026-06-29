'use client';

import styled from 'styled-components';
import Container from '@/components/common/Container';

// 프로젝트 카드 목록과 간단한 목업 프리뷰를 보여주는 섹션입니다.
const Section = styled.section`
  padding: 96px 0;
  background: rgba(255, 255, 255, 0.02);
`;

const Header = styled(Container)`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 34px;

  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    align-items: flex-start;
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
  max-width: 500px;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.7;
`;

const Grid = styled(Container)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;

  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.article`
  display: flex;
  min-height: 430px;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: 8px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.surface};
`;

const Preview = styled.div`
  min-height: 150px;
  padding: 18px;
  background:
    linear-gradient(135deg, rgba(102, 217, 198, 0.2), rgba(138, 173, 244, 0.12)),
    ${({ theme }) => theme.colors.surfaceAlt};
`;

// 실제 이미지가 준비되기 전까지 프로젝트 화면 느낌을 전달하는 간단한 목업입니다.
const MockWindow = styled.div`
  height: 112px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 8px;
  padding: 14px;
  background: rgba(11, 15, 20, 0.58);
`;

const MockLine = styled.span`
  display: block;
  width: ${({ $width }) => $width};
  height: 10px;
  margin-bottom: 10px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.primary};
  opacity: ${({ $dim }) => ($dim ? 0.34 : 0.82)};
`;

const Body = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 22px;
`;

const ProjectTitle = styled.h3`
  font-size: 24px;
  line-height: 1.25;
`;

const Period = styled.p`
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 14px;
  font-weight: 800;
`;

const Description = styled.p`
  margin-top: 16px;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.7;
`;

const PointList = styled.ul`
  display: grid;
  gap: 8px;
  margin-top: 16px;
  padding-left: 18px;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 14px;
  line-height: 1.6;
`;

const Stack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
  padding-top: 20px;
`;

const Tag = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-family: var(--font-geist-mono), monospace;
  font-size: 12px;
`;

const Projects = ({ items }) => {
  return (
    <Section id="projects">
      <Header>
        <div>
          <Number>04.</Number>
          <Title>Projects</Title>
        </div>
        <Lead>
          실제 경력 정보가 준비되기 전까지 사용할 수 있는 더미 프로젝트입니다. 이후 링크,
          이미지, 성과 수치만 교체하면 됩니다.
        </Lead>
      </Header>
      <Grid>
        {items.map((project, index) => (
          <Card key={project.title}>
            <Preview>
              <MockWindow>
                <MockLine $width={index === 1 ? '72%' : '48%'} />
                <MockLine $width="88%" $dim />
                <MockLine $width="64%" $dim />
                <MockLine $width="76%" $dim />
              </MockWindow>
            </Preview>
            <Body>
              <ProjectTitle>{project.title}</ProjectTitle>
              <Period>{project.period}</Period>
              <Description>{project.description}</Description>
              <PointList>
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </PointList>
              <Stack>
                {project.stack.map((stack) => (
                  <Tag key={stack}>#{stack}</Tag>
                ))}
              </Stack>
            </Body>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default Projects;
