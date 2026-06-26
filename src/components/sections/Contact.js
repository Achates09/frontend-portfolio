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
  background: linear-gradient(135deg, rgba(102, 217, 198, 0.13), rgba(246, 193, 119, 0.08));

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
  background: ${({ $primary, theme }) => ($primary ? theme.colors.primary : 'rgba(11, 15, 20, 0.52)')};
  font-weight: 800;
`;

const Contact = () => {
  return (
    <Section id="contact">
      <Panel>
        <div>
          <Number>05.</Number>
          <Title>좋은 제품을 함께 만들 준비가 되어 있습니다.</Title>
          <Copy>
            채용, 협업, 프로젝트 피드백 모두 환영합니다. 실제 연락처가 준비되면 아래 더미
            이메일과 링크만 교체하면 됩니다.
          </Copy>
        </div>
        <Actions>
          <LinkButton $primary href="mailto:hello@example.com">
            Send Mail
          </LinkButton>
          <LinkButton href="https://github.com/" target="_blank" rel="noreferrer">
            GitHub 보기
          </LinkButton>
        </Actions>
      </Panel>
    </Section>
  );
};

export default Contact;
