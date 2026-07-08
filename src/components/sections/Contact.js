'use client';

import styled from 'styled-components';
import Container from '@/components/common/Container';

// 이메일과 외부 링크로 이어지는 연락 섹션입니다.
const Section = styled.section`
  padding: 112px 0;
`;

const Panel = styled(Container)`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 30px;
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: 8px;
  padding-top: 42px;
  padding-bottom: 42px;
  /*
    body의 radial-gradient가 반투명 패널 뒤로 비치면 위치마다 배경색이 달라 보입니다.
    불투명한 surface 색을 먼저 깔고, 그 위에 얇은 강조 그라데이션만 올려 패널 내부 색을 균일하게 유지합니다.
  */
  background: linear-gradient(135deg, rgba(102, 217, 198, 0.13), rgba(246, 193, 119, 0.08)), ${({ theme }) => theme.colors.surface};

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
  font-size: clamp(34px, 5vw, 56px);
  line-height: 1.15;
`;

const Copy = styled.p`
  max-width: 660px;
  margin-top: 18px;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 18px;
  line-height: 1.8;
`;

const Actions = styled.div`
  display: grid;
  gap: 12px;
  min-width: 240px;

  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    min-width: 0;
  }
`;

// 메일, GitHub 등 다음 행동으로 연결되는 버튼 링크입니다.
const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  padding: 0 18px;
  color: ${({ $primary, theme }) => ($primary ? theme.colors.background : theme.colors.text)};
  background: ${({ $primary, theme }) => ($primary ? theme.colors.primary : theme.colors.surfaceAlt)};
  font-weight: 800;
`;

const Contact = ({ data }) => {
  return (
    <Section id="contact">
      <Panel>
        <div>
          <Number>05.</Number>
          <Title>{data.title}</Title>
          <Copy>{data.copy}</Copy>
        </div>
        <Actions>
          <LinkButton $primary href={`mailto:${data.email}`}>
            Send Mail
          </LinkButton>
          {/* <LinkButton href={data.githubUrl} target="_blank" rel="noreferrer">
            GitHub 보기
          </LinkButton> */}
        </Actions>
      </Panel>
    </Section>
  );
};

export default Contact;
