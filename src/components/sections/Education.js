'use client';

import styled from 'styled-components';
import Container from '@/components/common/Container';

// 학력 및 자격 사항을 한 섹션 안에서 카드 목록으로 보여주는 영역입니다.
const Section = styled.section`
  padding: 96px 0;
  /*
    섹션 배경은 page.js의 ScrollReveal wrapper가 담당합니다.
    여기서는 콘텐츠 여백만 관리해서 reveal 애니메이션과 배경 밴드가 분리되도록 합니다.
  */
`;

// 섹션 제목과 설명 문구를 양쪽으로 배치하는 상단 헤더입니다.
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
  max-width: 520px;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.7;
`;

// 학력 카드와 자격 카드가 반응형으로 정렬되는 그리드입니다.
const Grid = styled(Container)`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    grid-template-columns: 1fr;
  }
`;

// 개별 학력/자격 항목을 담는 카드입니다.
const Card = styled.article`
  display: flex;
  min-height: 360px;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: 8px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.surface};
`;

// 카드 상단에서 항목 유형과 기간을 빠르게 구분하게 하는 강조 영역입니다.
const SummaryBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  min-height: 112px;
  padding: 22px;
  background: linear-gradient(135deg, rgba(102, 217, 198, 0.18), rgba(246, 193, 119, 0.12)), ${({ theme }) => theme.colors.surfaceAlt};
`;

const Category = styled.span`
  border: 1px solid rgba(102, 217, 198, 0.42);
  border-radius: 999px;
  padding: 6px 11px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 13px;
  font-weight: 800;
`;

const Status = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 14px;
  font-weight: 800;
  text-align: right;
`;

// 카드 본문은 제목, 기관명, 설명, 세부 항목을 세로 흐름으로 정리합니다.
const Body = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 24px;
`;

const ItemTitle = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  font-size: 24px;
  line-height: 1.3;
`;

const Organization = styled.p`
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 15px;
  font-weight: 800;
`;

const Period = styled.p`
  margin-top: 6px;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 14px;
  font-weight: 800;
`;

const Description = styled.p`
  margin-top: 16px;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.7;
`;

// 이력서에서 강조할 전공, 교육 과정, 자격 취득 내용을 bullet로 보여줍니다.
const DetailList = styled.ul`
  display: grid;
  gap: 8px;
  margin-top: 16px;
  padding-left: 18px;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 14px;
  line-height: 1.6;
`;

// 태그는 항목과 관련된 분야나 기술 키워드를 보조 정보로 노출합니다.
const TagList = styled.div`
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

const Education = ({ items }) => {
  return (
    <Section id="education">
      <Header>
        <div>
          <Number>04.</Number>
          <Title>Education & Certificates</Title>
        </div>
        {/* <Lead>학습 배경과 자격 사항을 정리해 프론트엔드 개발자로 성장해 온 기반을 보여줍니다.</Lead> */}
      </Header>
      <Grid>
        {items.map(item => (
          <Card key={item.title}>
            <SummaryBar>
              <Category>{item.category}</Category>
              <Status>{item.status}</Status>
            </SummaryBar>
            <Body>
              <ItemTitle>{item.title}</ItemTitle>
              <Organization>{item.organization}</Organization>
              <Period>{item.period}</Period>
              <Description>{item.description}</Description>
              <DetailList>
                {item.details.map(detail => (
                  <li key={detail}>{detail}</li>
                ))}
              </DetailList>
              <TagList>
                {item.tags.map(tag => (
                  <Tag key={tag}>#{tag}</Tag>
                ))}
              </TagList>
            </Body>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default Education;
