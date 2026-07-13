'use client';

import { useState } from 'react';
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
  gap: 34px;
`;

const CompanyGroup = styled.article`
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 28px;
  align-items: start;

  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  gap: 16px;
`;

const ProjectList = styled.div`
  display: grid;
  gap: 16px;
`;

const ProjectToggleButton = styled.button`
  display: inline-flex;
  gap: 6px;
  align-items: center;
  justify-content: center;
  justify-self: center;
  min-width: 112px;
  border: 1px solid rgba(102, 217, 198, 0.46);
  border-radius: 999px;
  padding: 10px 18px;
  color: ${({ theme }) => theme.colors.primary};
  font: inherit;
  font-size: 14px;
  font-weight: 800;
  background: rgba(102, 217, 198, 0.08);
  cursor: pointer;

  &:hover {
    background: rgba(102, 217, 198, 0.16);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 3px;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

const ProjectCard = styled.div`
  display: grid;
  gap: 18px;
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: 8px;
  padding: 24px;
  background: ${({ theme }) => theme.colors.surface};
`;

const ProjectHeader = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 14px;
  align-items: start;

  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const Meta = styled.div`
  position: sticky;
  top: 96px;
  color: ${({ theme }) => theme.colors.textMuted};

  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    position: static;
  }
`;

const Company = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  font-size: 22px;
`;

const CompanyDescription = styled.p`
  margin-top: 14px;
  line-height: 1.7;
`;

const CompanyDetailList = styled.dl`
  display: grid;
  gap: 8px;
  margin-top: 14px;
`;

const CompanyDetail = styled.div`
  display: grid;
  grid-template-columns: 48px 1fr;
  gap: 10px;
  align-items: center;
`;

const CompanyDetailLabel = styled.dt`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 13px;
  font-weight: 800;
`;

const CompanyDetailValue = styled.dd`
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
  line-height: 1.4;
`;

const ProjectTitle = styled.h4`
  color: ${({ theme }) => theme.colors.text};
  font-size: 21px;
  line-height: 1.35;
`;

const Role = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
  font-weight: 800;
`;

const CompanyPeriod = styled.p`
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
`;

const Period = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 14px;
  font-weight: 800;
  text-align: right;

  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    text-align: left;
  }
`;

const Summary = styled.p`
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.7;
`;

const ProjectMeta = styled.div`
  display: grid;
  gap: 14px;
  margin-top: 16px;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.surfaceAlt};
`;

const ProjectMetaRow = styled.div`
  display: grid;
  grid-template-columns: 86px 1fr;
  gap: 12px;
  align-items: start;

  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    grid-template-columns: 1fr;
    gap: 6px;
  }
`;

const ProjectMetaLabel = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 13px;
  font-weight: 800;
  line-height: 1.5;
`;

const ProjectMetaValue = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  font-weight: 700;
  line-height: 1.5;
`;

const InlineList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
`;

const Tag = styled.span`
  border: 1px solid rgba(102, 217, 198, 0.28);
  border-radius: 999px;
  padding: 4px 9px;
  color: ${({ theme }) => theme.colors.primary};
  font-family: var(--font-geist-mono), monospace;
  font-size: 12px;
`;

const Client = styled.span`
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: 999px;
  padding: 4px 9px;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 13px;
`;

const ExternalLink = styled.a`
  border: 1px solid rgba(102, 217, 198, 0.46);
  border-radius: 999px;
  padding: 4px 9px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 13px;
  font-weight: 800;
  background: rgba(102, 217, 198, 0.08);

  &::after {
    content: ' ↗';
  }
`;

const ClientLink = styled(ExternalLink)``;

const ProjectLink = styled(ExternalLink)`
  line-height: normal;
`;

const DemoLink = styled(ProjectLink)`
  border-color: rgba(246, 193, 119, 0.52);
  color: ${({ theme }) => theme.colors.secondary};
  background: rgba(246, 193, 119, 0.1);
`;

const StoreProjectLink = styled(ExternalLink)`
  border-color: ${({ $platform }) => ($platform === 'android' ? 'rgba(52, 168, 83, 0.56)' : 'rgba(138, 173, 244, 0.52)')};
  color: ${({ $platform, theme }) => ($platform === 'android' ? '#34a853' : theme.colors.accent)};
  background: ${({ $platform }) => ($platform === 'android' ? 'rgba(52, 168, 83, 0.1)' : 'rgba(138, 173, 244, 0.1)')};
  line-height: normal;
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

const hasText = value => typeof value === 'string' && value.trim().length > 0;

const hasItems = value => Array.isArray(value) && value.length > 0;

const getPlatformStoreLinks = (storeLinks, platform) => (storeLinks?.[platform] ?? []).filter(link => hasText(link.name) || hasText(link.url));

const getStoreLinks = storeLinks => [...getPlatformStoreLinks(storeLinks, 'ios'), ...getPlatformStoreLinks(storeLinks, 'android')];

const STORE_LINK_GROUPS = [
  { key: 'ios', label: 'iOS' },
  { key: 'android', label: 'Android' },
];

const StoreLinkRows = ({ storeLinks }) =>
  STORE_LINK_GROUPS.map(({ key, label }) => {
    const links = getPlatformStoreLinks(storeLinks, key);

    if (!hasItems(links)) {
      return null;
    }

    return (
      <ProjectMetaRow key={key}>
        <ProjectMetaLabel>{label}</ProjectMetaLabel>
        <InlineList>
          {links.map(storeLink => {
            return hasText(storeLink.url) ? (
              <StoreProjectLink key={storeLink.name} href={storeLink.url} target="_blank" rel="noreferrer" $platform={key}>
                {storeLink.name}
              </StoreProjectLink>
            ) : (
              <Client key={storeLink.name}>{storeLink.name}</Client>
            );
          })}
        </InlineList>
      </ProjectMetaRow>
    );
  });

const hasProjectMeta = project =>
  hasText(project.associatedCompany) ||
  hasText(project.introUrl) ||
  hasText(project.demoUrl) ||
  hasItems(project.stack) ||
  hasItems(project.clients) ||
  hasItems(getStoreLinks(project.storeLinks));

const Experience = ({ items }) => {
  // 경력별 프로젝트 목록의 펼침 여부를 고유 키 기준으로 관리합니다.
  const [expandedExperiences, setExpandedExperiences] = useState({});

  const toggleProjects = experienceKey => {
    setExpandedExperiences(current => ({
      ...current,
      [experienceKey]: !current[experienceKey],
    }));
  };

  return (
    <Section id="experience">
      <Inner>
        <Header>
          <div>
            <Number>02.</Number>
            <Title>Experience</Title>
          </div>
          {/* <Lead>제품 요구사항을 화면, 상태, API 흐름으로 번역하고 팀이 유지보수하기 쉬운 구조로 정리한 경험을 중심으로 구성했습니다.</Lead> */}
        </Header>

        <List>
          {items.map((experience, experienceIndex) => {
            const experienceKey = `${experience.company}-${experience.period}-${experienceIndex}`;
            const projects = experience.projects ?? [];
            const isExpanded = Boolean(expandedExperiences[experienceKey]);
            // 접힌 상태에서는 첫 프로젝트만, 펼친 상태에서는 전체 프로젝트를 노출합니다.
            const visibleProjects = isExpanded ? projects : projects.slice(0, 1);
            const projectGridId = `experience-projects-${experienceIndex}`;

            return (
              <CompanyGroup key={experienceKey}>
                <Meta>
                  <Company>{experience.company}</Company>
                  <CompanyPeriod>{experience.period}</CompanyPeriod>
                  <CompanyDetailList>
                    <CompanyDetail>
                      <CompanyDetailLabel>부서</CompanyDetailLabel>
                      <CompanyDetailValue>{experience.department}</CompanyDetailValue>
                    </CompanyDetail>
                    <CompanyDetail>
                      <CompanyDetailLabel>직책</CompanyDetailLabel>
                      <CompanyDetailValue>{experience.position}</CompanyDetailValue>
                    </CompanyDetail>
                    <CompanyDetail>
                      <CompanyDetailLabel>역할</CompanyDetailLabel>
                      <CompanyDetailValue>{experience.role}</CompanyDetailValue>
                    </CompanyDetail>
                  </CompanyDetailList>
                  {hasText(experience.description) && <CompanyDescription>{experience.description}</CompanyDescription>}
                </Meta>

                <ProjectGrid>
                  <ProjectList id={projectGridId}>
                    {visibleProjects.map(project => (
                      <ProjectCard key={project.title}>
                        <ProjectHeader>
                          <div>
                            <ProjectTitle>{project.title}</ProjectTitle>
                            <Role>{project.role}</Role>
                          </div>
                          <Period>{project.period}</Period>
                        </ProjectHeader>
                        <div>
                          <Summary>{project.summary}</Summary>
                          {hasProjectMeta(project) && (
                            <ProjectMeta>
                              {hasText(project.associatedCompany) && (
                                <ProjectMetaRow>
                                  <ProjectMetaLabel>연계 회사</ProjectMetaLabel>
                                  <ProjectMetaValue>{project.associatedCompany}</ProjectMetaValue>
                                </ProjectMetaRow>
                              )}

                              {(hasText(project.introUrl) || hasText(project.demoUrl)) && (
                                <ProjectMetaRow>
                                  <ProjectMetaLabel>링크</ProjectMetaLabel>
                                  <InlineList>
                                    {hasText(project.introUrl) && (
                                      <ProjectLink href={project.introUrl} target="_blank" rel="noreferrer">
                                        소개 페이지
                                      </ProjectLink>
                                    )}
                                    {hasText(project.demoUrl) && (
                                      <DemoLink href={project.demoUrl} target="_blank" rel="noreferrer">
                                        데모 페이지
                                      </DemoLink>
                                    )}
                                  </InlineList>
                                </ProjectMetaRow>
                              )}

                              <StoreLinkRows storeLinks={project.storeLinks} />

                              {hasItems(project.stack) && (
                                <ProjectMetaRow>
                                  <ProjectMetaLabel>주요 기술</ProjectMetaLabel>
                                  <InlineList>
                                    {project.stack.map(stack => (
                                      <Tag key={stack}>#{stack}</Tag>
                                    ))}
                                  </InlineList>
                                </ProjectMetaRow>
                              )}

                              {hasItems(project.clients) && (
                                <ProjectMetaRow>
                                  <ProjectMetaLabel>납품처</ProjectMetaLabel>
                                  <InlineList>
                                    {project.clients.map(client => {
                                      return hasText(client.url) ? (
                                        <ClientLink key={client.name} href={client.url} target="_blank" rel="noreferrer">
                                          {client.name}
                                        </ClientLink>
                                      ) : (
                                        <Client key={client.name}>{client.name}</Client>
                                      );
                                    })}
                                  </InlineList>
                                </ProjectMetaRow>
                              )}
                            </ProjectMeta>
                          )}
                          <BulletList>
                            {project.items.map(item => (
                              <li key={item}>{item}</li>
                            ))}
                          </BulletList>
                        </div>
                      </ProjectCard>
                    ))}
                  </ProjectList>
                  {/* 프로젝트가 여러 개일 때만 더보기/접기 버튼을 노출합니다. */}
                  {projects.length > 1 && (
                    <ProjectToggleButton type="button" aria-expanded={isExpanded} aria-controls={projectGridId} onClick={() => toggleProjects(experienceKey)}>
                      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path
                          d={isExpanded ? 'M5 15 12 8l7 7' : 'M5 9l7 7 7-7'}
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {isExpanded ? '접기' : '더보기'}
                    </ProjectToggleButton>
                  )}
                </ProjectGrid>
              </CompanyGroup>
            );
          })}
        </List>
      </Inner>
    </Section>
  );
};

export default Experience;
